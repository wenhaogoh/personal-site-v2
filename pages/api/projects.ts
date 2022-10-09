import { StatusCodes } from "http-status-codes";
import type { NextApiResponse } from "next";

import prisma from "../../prisma";
import { GetProjectsDto } from "../../shared/types";
import getHandler from "../../utils/handler";

const handler = getHandler();

handler.get(async (_req, res: NextApiResponse<GetProjectsDto[]>) => {
  const projects = await prisma.project.findMany({
    include: {
      projectDescriptions: true,
      tags: true,
    },
  });
  res.status(StatusCodes.OK).send(projects);
});

export default handler;
