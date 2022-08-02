import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

import { ACCESS_TOKEN_SECRET } from "../../../consts";
import { CustomRequest, VerifyAccessTokenRequest } from "../../../fetch/types";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post((req: CustomRequest<VerifyAccessTokenRequest>, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    res.status(StatusCodes.FORBIDDEN).json(null);
    return;
  }

  jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err) => {
    if (err) {
      res.status(StatusCodes.FORBIDDEN).json(null);
      return;
    }

    res.status(StatusCodes.OK).json(null);
  });
});

export default handler;
