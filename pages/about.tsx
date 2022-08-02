import { NextPage } from "next";

import { Title } from "../components/Common";
import Experience from "../components/Experience";
import Project from "../components/Project";
import { experiences, projects } from "../consts/data";

const About: NextPage = () => {
  return (
    <>
      <Title>experience.</Title>
      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
      <Title>projects.</Title>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </>
  );
};

export default About;
