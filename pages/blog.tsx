import { dehydrate, QueryClient } from "@tanstack/react-query";
import { NextPage } from "next";

import { Title } from "../components/Common";
import { QUERY_KEYS } from "../consts";
import { Posts } from "../fetch";

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
