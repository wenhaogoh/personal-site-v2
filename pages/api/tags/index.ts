import { StatusCodes } from "http-status-codes";

import prisma from "../../../prisma";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.get(async (_req, res) => {
  const tags = await prisma.tag.findMany();
  res.status(StatusCodes.OK).send(tags);
});

handler.post(async (req, res) => {
  const { body: data } = req;
  const tag = await prisma.tag.create({
    data,
  });
  res.status(StatusCodes.CREATED).send(tag);
});

export default handler;
