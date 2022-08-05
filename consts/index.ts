export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "secret";

export const ACCESS_TOKEN_COOKIE_KEY =
  process.env.ACCESS_TOKEN_COOKIE_KEY || "accessToken";

export const BASE_URL =
  process.env.NODE_ENV == "production"
    ? "https://wenhao.me"
    : "http://localhost:3000";
