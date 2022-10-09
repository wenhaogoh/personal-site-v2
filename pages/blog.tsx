import { dehydrate, QueryClient } from "@tanstack/react-query";
import { NextPage } from "next";

import { Posts } from "../frontend/api";
import { Title } from "../frontend/components/Common";
import { QUERY_KEYS } from "../shared/consts";

const Blog: NextPage = () => {
  return <Title>work in progress.</Title>;
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEYS.POSTS], Posts.getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Blog;
