import axios from "axios";
import { API_CONFIG } from "../config";
import { tokenUtils } from "@/utils/tokenUtils";

// 統一的未授權處理
const handleUnauthorized = () => {
  tokenUtils.removeToken();
  window.location.href = "/login";
};

// 錯誤日誌記錄
const logError = (error) => {
  console.error("[API Error]", {
    url: error.config?.url,
    method: error.config?.method,
    status: error.response?.status,
    message: error.message,
    data: error.response?.data, // 加入回應資料
    timestamp: new Date().toISOString(),
    stack: error.stack, // 加入錯誤堆疊
  });
};

// Token 刷新機制
const refreshToken = async () => {
  try {
    const response = await axios.post("/api/refresh-token");
    const newToken = response.data.token;
    tokenUtils.setToken(newToken);
    return newToken;
  } catch (error) {
    handleUnauthorized();
    throw new Error(API_CONFIG.errorMessages.auth.expired);
  }
};

export const createAxiosInstance = (config = {}) => {
  const { requiresAuth = false } = config;

  const instance = axios.create({
    ...API_CONFIG.baseConfig,
    baseURL: API_CONFIG.baseConfig.baseURL,
  });

  // 請求攔截器
  instance.interceptors.request.use(
    async (config) => {
      try {
        // 只有需要驗證的請求才檢查 token
        if (requiresAuth) {
          if (tokenUtils.isTokenExpired()) {
            const newToken = await refreshToken();
            config.headers.Authorization = `Bearer ${newToken}`;
          } else {
            const token = tokenUtils.getToken();
            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }
          }
        }
        return config;
      } catch (error) {
        console.error("請求攔截器錯誤:", error);
        return Promise.reject(error);
      }
    },
    (error) => {
      logError(error);
      return Promise.reject(error);
    },
  );

  // 回應攔截器
  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      logError(error);

      // 網路錯誤
      if (!error.response) {
        return Promise.reject(
          new Error(API_CONFIG.errorMessages.network.offline),
        );
      }

      // HTTP 狀態碼錯誤處理
      switch (error.response.status) {
        case 400:
          return Promise.reject(
            new Error(error.response.data?.message || "請求參數錯誤"),
          );
        case 401:
          // 只有需要驗證的請求才處理未授權錯誤
          if (requiresAuth) {
            handleUnauthorized();
          }
          return Promise.reject(
            new Error(API_CONFIG.errorMessages.auth.unauthorized),
          );
        case 403:
          return Promise.reject(
            new Error(API_CONFIG.errorMessages.auth.forbidden),
          );
        case 404:
          return Promise.reject(new Error("找不到請求的資源"));
        case 408:
          return Promise.reject(
            new Error(API_CONFIG.errorMessages.network.timeout),
          );
        case 429:
          return Promise.reject(new Error("請求次數過多，請稍後再試"));
        case 500:
          return Promise.reject(new Error("伺服器內部錯誤"));
        case 502:
          return Promise.reject(new Error("伺服器暫時無法連線"));
        case 503:
          return Promise.reject(new Error("服務暫時無法使用"));
        case 504:
          return Promise.reject(new Error("伺服器處理超時"));
        default:
          return Promise.reject(error.response.data || error);
      }
    },
  );

  return instance;
};
