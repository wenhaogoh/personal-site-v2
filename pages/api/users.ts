import { StatusCodes } from "http-status-codes";

import prisma from "../../prisma";
import getHandler from "../../utils/handler";

const handler = getHandler();

handler.get(async (_req, res) => {
  const users = await prisma.user.findMany();
  res.status(StatusCodes.OK).send(users);
});

handler.post(async (req, res) => {
  const { body: data } = req;
  const user = await prisma.user.create({
    data,
  });
  res.status(StatusCodes.CREATED).send(user);
});

export default handler;
