import { useGetProjects } from "../hooks/project";
import { Title } from "./Common";
import Project from "./Project";

const Projects: React.FC = () => {
  const { projects } = useGetProjects();

  return (
    <>
      <Title>projects.</Title>
      {projects?.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </>
  );
};

export default Projects;
