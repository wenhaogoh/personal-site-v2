import { Experience, ExperienceDescription, Tag } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { NextApiResponse } from "next";

import prisma from "../../prisma";
import getHandler from "../../utils/handler";

const handler = getHandler();

handler.get(
  async (
    _req,
    res: NextApiResponse<
      (Experience & {
        experienceDescriptions: ExperienceDescription[];
        tags: Tag[];
      })[]
    >
  ) => {
    const experiences = await prisma.experience.findMany({
      include: {
        tags: true,
        experienceDescriptions: true,
      },
    });
    res.status(StatusCodes.OK).send(experiences);
  }
);

export default handler;
