import { clientAPI } from "@/api/instance";
import { API_CONFIG } from "@/api/config";

export const productService = {
  getProducts: async () => {
    try {
      const response = await clientAPI.get(
        API_CONFIG.endpoints.CLIENT.PRODUCTS.LIST,
      );
      return response;
    } catch (error) {
      console.error("API 錯誤:", error);
      throw new Error(error.message || "取得商品列表失敗");
    }
  },

  getProductById: async (id) => {
    try {
      const response = await clientAPI.get(
        API_CONFIG.endpoints.CLIENT.PRODUCTS.DETAIL(id),
      );
      return response;
    } catch (error) {
      throw new Error(error.message || "取得商品詳細資訊失敗");
    }
  },
};
