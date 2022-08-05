import { Post as PostData } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { Title } from "../components/Common";
import prisma from "../prisma";

type Props = {
  posts: PostData[];
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return <Title>work in progress.</Title>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await prisma.post.findMany();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};

export default Blog;
