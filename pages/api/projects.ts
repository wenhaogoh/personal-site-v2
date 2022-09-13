import { Project, ProjectDescription, Tag } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { NextApiResponse } from "next";

import prisma from "../../prisma";
import getHandler from "../../utils/handler";

const handler = getHandler();

handler.get(
  async (
    _req,
    res: NextApiResponse<
      (Project & { projectDescriptions: ProjectDescription[]; tags: Tag[] })[]
    >
  ) => {
    const projects = await prisma.project.findMany({
      include: {
        projectDescriptions: true,
        tags: true,
      },
    });
    res.status(StatusCodes.OK).send(projects);
  }
);

export default handler;
