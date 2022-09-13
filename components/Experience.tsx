import {
  Experience as ExperienceDto,
  ExperienceDescription,
  Tag,
} from "@prisma/client";
import React from "react";
import styled from "styled-components";

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

type Props = {
  experience: ExperienceDto & {
    experienceDescriptions: ExperienceDescription[];
    tags: Tag[];
  };
};

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
              href={experience.link || undefined}
            >
              {experience.company}
            </UnderlinedLink>
          </Role>
        </RoleCompany>
        <StartEnd>
          <span>
            {new Date(experience.start).toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })}
            &nbsp;-
          </span>
          <span>
            &nbsp;
            {experience.end
              ? new Date(experience.end).toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })
              : "Present"}
          </span>
        </StartEnd>
      </Header>
      <TextList
        items={experience.experienceDescriptions.map(
          (description) => description.content
        )}
      />
      <TagList items={experience.tags} />
      <br />
    </>
  );
};

export default Experience;
