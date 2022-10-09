export const ENV = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "secret",
  ACCESS_TOKEN_COOKIE_KEY: process.env.ACCESS_TOKEN_COOKIE_KEY || "accessToken",
  AUTHENTICATION_SECRET: process.env.AUTHENTICATION_SECRET || "secret",
  BASE_URL:
    process.env.NODE_ENV == "production"
      ? "https://wenhao.me"
      : "http://localhost:3000",
};

export enum QUERY_KEYS {
  POSTS,
  TAGS,
  EXPERIENCES,
  PROJECTS,
}
