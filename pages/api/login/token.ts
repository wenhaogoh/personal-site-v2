import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { ENV } from "../../../consts";
import {
  CustomBodyRequest,
  VerifyAccessTokenBody,
} from "../../../shared/types";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.post((req: CustomBodyRequest<VerifyAccessTokenBody>, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    res.status(StatusCodes.FORBIDDEN).json(null);
    return;
  }

  jwt.verify(accessToken, ENV.ACCESS_TOKEN_SECRET, (err) => {
    if (err) {
      res.status(StatusCodes.FORBIDDEN).json(null);
      return;
    }

    res.status(StatusCodes.OK).json(null);
  });
});

export default handler;
