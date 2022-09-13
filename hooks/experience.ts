import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../consts";
import { Experiences } from "../fetch";

export const useGetExperiences = () => {
  const { data: experiences } = useQuery(
    [QUERY_KEYS.EXPERIENCES],
    Experiences.getExperiences,
    {
      refetchOnWindowFocus: false,
    }
  );

  return { experiences };
};
