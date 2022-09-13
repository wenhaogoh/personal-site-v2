import { Post } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { NextApiResponse } from "next";
import slugify from "slugify";

import prisma from "../../prisma";
import { CreatePostBody, CustomBodyRequest } from "../../shared/types";
import getHandler from "../../utils/handler";

const handler = getHandler();

handler.get(async (_req, res: NextApiResponse<Post[]>) => {
  const posts = await prisma.post.findMany();
  res.status(StatusCodes.OK).send(posts);
});

handler.post(
  async (
    req: CustomBodyRequest<CreatePostBody>,
    res: NextApiResponse<Post>
  ) => {
    const { body } = req;
    const slug = slugify(body.title);
    const post = await prisma.post.create({
      data: {
        ...body,
        slug,
      },
    });
    res.status(StatusCodes.CREATED).send(post);
  }
);

export default handler;
