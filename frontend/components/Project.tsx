import React from "react";
import styled from "styled-components";

import { GetProjectsDto } from "../../shared/types";
import { Link } from "./Common";
import TagList from "./TagList";
import TextList from "./TextList";

type Props = {
  project: GetProjectsDto;
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Project: React.FC<Props> = ({ project }) => {
  return (
    <>
      <Header>
        <span>{project.title}</span>
        <Link target="_blank" rel="noopener noreferrer" href={project.github}>
          github.
        </Link>
      </Header>
      <TextList
        items={project.projectDescriptions.map(
          (description) => description.content
        )}
      />
      <TagList items={project.tags} />
      <br />
    </>
  );
};

export default Project;
