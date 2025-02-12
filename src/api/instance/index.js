import { createAxiosInstance } from "./baseInstance";

export const adminAPI = createAxiosInstance({ isAdmin: true });
export const clientAPI = createAxiosInstance({ isAdmin: false });
export const authAPI = createAxiosInstance({ isAuth: true });
