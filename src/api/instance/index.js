import { createAxiosInstance } from "./baseInstance";

export const adminAPI = createAxiosInstance({ requiresAuth: true });
export const clientAPI = createAxiosInstance({ requiresAuth: false });
export const authAPI = createAxiosInstance({ requiresAuth: false });
