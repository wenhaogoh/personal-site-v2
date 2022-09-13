import { setCookie } from "cookies-next";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { ENV } from "../../../consts";
import prisma from "../../../prisma";
import { CustomBodyRequest, LoginRequestBody } from "../../../shared/types";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.post(async (req: CustomBodyRequest<LoginRequestBody>, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
      },
      password: {
        equals: password,
      },
    },
  });

  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).json(null);
    return;
  }

  const accessToken = jwt.sign(
    {
      userId: user?.id,
    },
    ENV.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );

  setCookie(ENV.ACCESS_TOKEN_COOKIE_KEY, accessToken, { req, res });
  res.status(StatusCodes.OK).json(null);
});

export default handler;
