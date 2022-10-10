import { PacmanLoader } from "react-spinners";

import { useGetProjects } from "../hooks/project";
import { LoaderContainer, Title } from "./Common";
import Project from "./Project";

const Projects: React.FC = () => {
  const { projects, isLoading } = useGetProjects();

  return (
    <>
      <Title>projects.</Title>
      {isLoading && (
        <LoaderContainer>
          <PacmanLoader size={"1rem"} />
        </LoaderContainer>
      )}
      {projects?.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </>
  );
};

export default Projects;
