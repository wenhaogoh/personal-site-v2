import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../shared/consts";
import { Experiences } from "../api";

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
