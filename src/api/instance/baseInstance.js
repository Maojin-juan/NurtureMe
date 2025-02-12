import axios from "axios";
import { tokenUtils } from "@/utils/tokenUtils";

export const createAxiosInstance = (config = {}) => {
  const { isAdmin = false, isAuth = false } = config;

  const getBaseURL = () => {
    if (isAuth) {
      return `${import.meta.env.VITE_API_URL}/api`;
    }
    return `${import.meta.env.VITE_API_URL}/api${isAdmin ? "/admin" : ""}`;
  };

  const instance = axios.create({
    baseURL: getBaseURL(),
    timeout: 10000,
  });

  // 請求攔截器
  instance.interceptors.request.use(
    (config) => {
      const token = tokenUtils.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // 回應攔截器
  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response?.status === 401) {
        tokenUtils.removeToken();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    },
  );

  return instance;
};
