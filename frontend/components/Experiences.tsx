import { FC } from "react";

import { usePublicContext } from "../contexts/PublicContext";
import { Title } from "./Common";
import Experience from "./Experience";

const Experiences: FC = () => {
  const { experiences } = usePublicContext();

  return (
    <>
      <Title>experience.</Title>
      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </>
  );
};

export default Experiences;
