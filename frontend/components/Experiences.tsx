import { PacmanLoader } from "react-spinners";

import { useGetExperiences } from "../hooks/experience";
import { LoaderContainer, Title } from "./Common";
import Experience from "./Experience";

const Experiences: React.FC = () => {
  const { experiences, isLoading } = useGetExperiences();

  return (
    <>
      <Title>experience.</Title>
      {isLoading && (
        <LoaderContainer>
          <PacmanLoader size={"1rem"} />
        </LoaderContainer>
      )}
      {experiences?.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </>
  );
};

export default Experiences;
