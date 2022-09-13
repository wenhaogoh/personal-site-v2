import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../consts";
import { Projects } from "../fetch";

export const useGetProjects = () => {
  const { data: projects } = useQuery(
    [QUERY_KEYS.PROJECTS],
    Projects.getProjects,
    {
      refetchOnWindowFocus: false,
    }
  );

  return { projects };
};
