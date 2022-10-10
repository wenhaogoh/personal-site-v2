import { StatusCodes } from "http-status-codes";

import prisma from "../../../prisma";
import encrypt from "../../../utils/encryptor";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.get(async (_req, res) => {
  const users = await prisma.user.findMany();
  res.status(StatusCodes.OK).send(users);
});

handler.post(async (req, res) => {
  const {
    body: { email, username, password },
  } = req;

  await prisma.user.create({
    data: {
      email,
      username,
      password: encrypt(password),
    },
  });

  res.status(StatusCodes.CREATED).json(null);
});

export default handler;
