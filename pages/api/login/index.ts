import { setCookie } from "cookies-next";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { ACCESS_TOKEN_COOKIE_KEY, ACCESS_TOKEN_SECRET } from "../../../consts";
import { CustomRequest, LoginRequest } from "../../../fetch/types";
import prisma from "../../../prisma";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.post(async (req: CustomRequest<LoginRequest>, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      name: {
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
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );

  setCookie(ACCESS_TOKEN_COOKIE_KEY, accessToken, { req, res });
  res.status(StatusCodes.OK).json(null);
});

export default handler;
