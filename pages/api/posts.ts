import { Post } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import slugify from "slugify";

import { CreatePostRequest, CustomRequest } from "../../fetch/types";
import prisma from "../../prisma";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (_req, res: NextApiResponse<Post[]>) => {
  const posts = await prisma.post.findMany();
  res.status(StatusCodes.OK).send(posts);
});

handler.post(
  async (req: CustomRequest<CreatePostRequest>, res: NextApiResponse<Post>) => {
    const slug = slugify(req.body.title);
    const post = await prisma.post.create({
      data: {
        ...req.body,
        slug,
      },
    });
    res.status(StatusCodes.CREATED).send(post);
  }
);

export default handler;
