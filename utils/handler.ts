import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import NextCors from "nextjs-cors";

const getHandler = () =>
  nextConnect<NextApiRequest, NextApiResponse>().use(async (req, res, next) => {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "https://www.wenhao.me",
      optionsSuccessStatus: 200,
      credentials: true,
    });

    next();
  });

export default getHandler;
