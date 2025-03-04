const API_PATH = import.meta.env.VITE_API_PATH;
const BASE_API = `/v2/api/${API_PATH}`;
const ADMIN_PREFIX = "/admin";

const createEndpoint = (path) => `${BASE_API}${path}`;
const createAuthEndpoint = (path) => `${path}`;

const createResourceEndpoints = (resource, isAdmin = false) => {
  const prefix = isAdmin ? ADMIN_PREFIX : "";
  const base = `${prefix}/${resource}`;
  return {
    LIST: createEndpoint(base + "s"),
    CREATE: createEndpoint(base),
    DETAIL: (id) => createEndpoint(`${base}/${id}`),
    DELETE: (id) => createEndpoint(`${base}/${id}`),
  };
};

export const API_CONFIG = {
  baseConfig: {
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  },

  tokens: {
    adminTokenKey: "adminToken",
    tokenExpiry: 24,
  },

  errorMessages: {
    login: {
      failed: "登入失敗",
      invalid: "帳號或密碼錯誤",
      expired: "登入已過期",
    },
    auth: {
      unauthorized: "未授權的存取",
      forbidden: "無權限存取",
    },
    network: {
      timeout: "連線逾時",
      offline: "網路連線失敗",
    },
  },

  endpoints: {
    AUTH: {
      ADMIN_SIGNIN: createAuthEndpoint("/admin/signin"),
      ADMIN_CHECK: createAuthEndpoint("/api/user/check"),
      ADMIN_LOGOUT: createAuthEndpoint("/logout"),
    },

    ADMIN: {
      PRODUCTS: createResourceEndpoints("product", true),
      ORDERS: createResourceEndpoints("order", true),
      COUPONS: createResourceEndpoints("coupon", true),
      ARTICLES: createResourceEndpoints("article", true),
      UPLOAD: createResourceEndpoints("/upload"),
    },

    CLIENT: {
      PRODUCTS: {
        ...createResourceEndpoints("product"),
        ALL: createEndpoint("/products/all"),
      },
      CART: {
        ...createResourceEndpoints("cart"),
        ADD: createEndpoint("/cart"),
      },
      ORDER: {
        CREATE: createEndpoint("/order"),
        DETAIL: (id) => createEndpoint(`/order/${id}`),
        PAY: (orderId) => createEndpoint(`/pay/${orderId}`),
      },
      COUPON: {
        APPLY: createEndpoint("/coupon"),
      },
      ARTICLES: {
        LIST: createEndpoint("/articles"),
        DETAIL: (id) => createEndpoint(`/article/${id}`),
      },
    },
  },
};
