export const tokenUtils = {
  getToken() {
    return localStorage.getItem("token");
  },

  setToken(token) {
    localStorage.setItem("token", token);
  },

  removeToken() {
    localStorage.removeItem("token");
  },

  isTokenExpired() {
    const token = this.getToken();
    if (!token) return true;

    try {
      // 解析 JWT token
      const payload = JSON.parse(atob(token.split(".")[1]));
      // 檢查是否過期
      return payload.exp * 1000 < Date.now();
    } catch (error) {
      console.error("Token 解析失敗:", error);
      return true;
    }
  },
};
