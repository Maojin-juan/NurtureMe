import { authAPI } from "@/api/instance";
import { API_CONFIG } from "@/api/config";
import { tokenUtils } from "@/utils/tokenUtils";

export const authService = {
  adminLogin: async ({ username, password }) => {
    try {
      const { token, expired } = await authAPI.post(
        API_CONFIG.endpoints.AUTH.ADMIN_SIGNIN,
        { username, password },
      );

      if (token) {
        tokenUtils.setToken(token);
        return { success: true };
      }
      return { success: false, message: "登入失敗" };
    } catch (error) {
      throw new Error(error.message || "登入失敗");
    }
  },

  checkAdmin: async () => {
    try {
      const response = await authAPI.post(
        API_CONFIG.endpoints.AUTH.ADMIN_CHECK,
      );
      return { success: true, data: response };
    } catch (error) {
      throw new Error(error.message || "驗證失敗");
    }
  },

  logout: async () => {
    try {
      await authAPI.post(API_CONFIG.endpoints.AUTH.ADMIN_LOGOUT);
      tokenUtils.removeToken();
      return { success: true };
    } catch (error) {
      throw new Error(error.message || "登出失敗");
    }
  },
};
