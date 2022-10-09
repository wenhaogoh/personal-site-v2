import { useGetExperiences } from "../hooks/experience";
import { Title } from "./Common";
import Experience from "./Experience";

const Experiences: React.FC = () => {
  const { experiences } = useGetExperiences();

  return (
    <>
      <Title>experience.</Title>
      {experiences?.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </>
  );
};

export default Experiences;
