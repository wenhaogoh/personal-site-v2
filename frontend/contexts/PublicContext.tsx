import { createContext, FC, PropsWithChildren, useContext } from "react";

import { GetExperiencesDto, GetProjectsDto } from "../../shared/types";
import { useGetExperiences } from "../hooks/experience";
import { useGetProjects } from "../hooks/project";

type PublicContextProps = {
  experiences: GetExperiencesDto[];
  projects: GetProjectsDto[];
  isLoading: boolean;
};

const PublicContext = createContext<PublicContextProps | undefined>(undefined);

export const PublicContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { experiences, isLoading: isExperiencesLoading } = useGetExperiences();
  const { projects, isLoading: isProjectsLoading } = useGetProjects();

  return (
    <PublicContext.Provider
      value={{
        experiences: experiences || [],
        projects: projects || [],
        isLoading: isExperiencesLoading || isProjectsLoading,
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};

export const usePublicContext = () => {
  const context = useContext(PublicContext);
  if (!context) {
    throw new Error(
      "usePublicContext must be used within a PublicContextProvider component"
    );
  }
  return context;
};
