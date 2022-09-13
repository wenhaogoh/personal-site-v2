import { StatusCodes } from "http-status-codes";

import prisma from "../../../prisma";
import {
  CustomBodyRequest,
  UpdateTagBody,
  UpdateTagQuery,
} from "../../../shared/types";
import getHandler from "../../../utils/handler";

const handler = getHandler();

handler.put(
  async (req: CustomBodyRequest<UpdateTagBody, UpdateTagQuery>, res) => {
    const {
      body: data,
      query: { id },
    } = req;
    const tags = await prisma.tag.update({
      where: { id: +id },
      data,
    });
    res.status(StatusCodes.OK).send(tags);
  }
);

export default handler;
