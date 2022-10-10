import { FC } from "react";

import { usePublicContext } from "../contexts/PublicContext";
import { Title } from "./Common";
import Project from "./Project";

const Projects: FC = () => {
  const { projects } = usePublicContext();

  return (
    <>
      <Title>projects.</Title>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </>
  );
};

export default Projects;
