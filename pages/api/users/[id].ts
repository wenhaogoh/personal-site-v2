import { StatusCodes } from "http-status-codes";

import prisma from "../../../prisma";
import { CustomBodyRequest, IdQuery } from "../../../shared/types";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.delete(async (req: CustomBodyRequest<undefined, IdQuery>, res) => {
  const {
    query: { id },
  } = req;

  await prisma.user.delete({
    where: { id: +id },
  });

  res.status(StatusCodes.OK).json(null);
});

export default handler;
