import { NextApiRequest } from "next";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type CustomRequest<T> = Override<
  NextApiRequest,
  {
    body: T;
  }
>;

export type LoginRequest = {
  username: string;
  password: string;
};

export type VerifyAccessTokenRequest = {
  accessToken: string;
};

export type CreatePostRequest = {
  title: string;
  content?: string;
  author: string;
};
