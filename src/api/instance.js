import axios from "axios";
import { API_CONFIG } from "./config";

const axiosInstance = axios.create(API_CONFIG.baseConfig);

// Request 攔截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response 攔截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 處理錯誤
    return Promise.reject(error);
  },
);

export default axiosInstance;
