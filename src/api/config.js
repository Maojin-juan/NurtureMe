export const API_CONFIG = {
  // API 基本設定
  baseConfig: {
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  },

  // API 端點管理
  endpoints: {
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
    },
    USER: {
      PROFILE: "/user/profile",
      UPDATE: "/user/update",
    },
    PRODUCT: {
      LIST: "/products",
      DETAIL: (id) => `/products/${id}`,
      CREATE: "/products/create",
    },
  },

  // 錯誤訊息管理
  errorMessages: {
    DEFAULT: "發生錯誤，請稍後再試",
    NETWORK_ERROR: "網路連線異常",
    UNAUTHORIZED: "請重新登入",
  },
};
