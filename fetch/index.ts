import { Post } from "@prisma/client";

import { BASE_URL } from "../consts";
import { LoginRequest, VerifyAccessTokenRequest } from "./types";

const responseBody = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

const requests = {
  get: (url: string) => fetch(BASE_URL + url).then(responseBody),
  post: (url: string, body?: unknown) =>
    fetch(BASE_URL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    }).then(responseBody),
};

export const Authentication = {
  login: (body: LoginRequest): Promise<null> =>
    requests.post("/api/login", body),
  verify: (body: VerifyAccessTokenRequest): Promise<null> =>
    requests.post("/api/login/token", body),
};

export const Posts = {
  getPosts: (): Promise<Post[]> => requests.get("/api/posts"),
};
