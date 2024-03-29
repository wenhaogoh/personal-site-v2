import { Post as PostData } from "@prisma/client";
import { FC } from "react";

import { Text, Title } from "./Common";

type Props = {
  post: PostData;
};

const Post: FC<Props> = ({ post }) => {
  return (
    <>
      <Title>{post.title}</Title>
      <Text>{post.content}</Text>
    </>
  );
};

export default Post;
