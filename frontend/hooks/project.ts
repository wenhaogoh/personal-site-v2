import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../shared/consts";
import { Projects } from "../api";

export const useGetProjects = () => {
  const { data: projects, isLoading } = useQuery(
    [QUERY_KEYS.PROJECTS],
    Projects.getProjects,
    {
      refetchOnWindowFocus: false,
    }
  );

  return { projects, isLoading };
};
