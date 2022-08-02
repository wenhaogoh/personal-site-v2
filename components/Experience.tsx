import React from "react";
import styled from "styled-components";

import { Experience as ExperienceData } from "../consts/types";
import { UnderlinedLink } from "./Common";
import TagList from "./TagList";
import TextList from "./TextList";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoleCompany = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Role = styled.div`
  display: inline-flex;
`;

const StartEnd = styled.div`
  opacity: 0.5;
  text-align: right;

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

interface Props {
  experience: ExperienceData;
}

const Experience: React.FC<Props> = ({ experience }) => {
  return (
    <>
      <Header>
        <RoleCompany>
          <span>{experience.role} </span>
          <Role>
            <span>@&nbsp;</span>
            <UnderlinedLink
              target="_blank"
              rel="noopener noreferrer"
              href={experience.link}
            >
              {experience.company}
            </UnderlinedLink>
          </Role>
        </RoleCompany>
        <StartEnd>
          <span>{experience.start} -</span>
          <span> {experience.end}</span>
        </StartEnd>
      </Header>
      <TextList items={experience.descriptions} />
      <TagList items={experience.tags} />
      <br />
    </>
  );
};

export default Experience;
