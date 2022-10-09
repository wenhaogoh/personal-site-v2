import { NextPage } from "next";

import Experiences from "../frontend/components/Experiences";
import Projects from "../frontend/components/Projects";

const About: NextPage = () => {
  return (
    <>
      <Experiences />
      <Projects />
    </>
  );
};

export default About;
