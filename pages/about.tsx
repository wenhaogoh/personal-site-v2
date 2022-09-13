import { NextPage } from "next";

import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

const About: NextPage = () => {
  return (
    <>
      <Experiences />
      <Projects />
    </>
  );
};

export default About;
