import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../consts";
import { Tags } from "../fetch";

export const useGetTags = () => {
  const { data: tags } = useQuery([QUERY_KEYS.TAGS], Tags.getTags, {
    refetchOnWindowFocus: false,
  });

  return { tags };
};
