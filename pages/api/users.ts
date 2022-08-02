import { StatusCodes } from "http-status-codes";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

import prisma from "../../prisma";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (_req, res) => {
  const users = await prisma.user.findMany();
  res.status(StatusCodes.OK).send(users);
});

handler.post(async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.status(StatusCodes.CREATED).send(user);
});

export default handler;
