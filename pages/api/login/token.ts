import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { ACCESS_TOKEN_SECRET } from "../../../consts";
import { CustomRequest, VerifyAccessTokenRequest } from "../../../fetch/types";
import getHandler from "../../../utils/handler";

const handler = getHandler();

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
