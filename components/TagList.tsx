import React from "react";
import styled from "styled-components";

import { Tag as TagData } from "../consts/types";
import { Link } from "./Common";

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const Tag = styled.li`
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.2em 0.6em;
  border: 1px solid black;
  border-radius: 1em;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

type Props = {
  items: TagData[];
};

const TagList: React.FC<Props> = ({ items }) => {
  return (
    <StyledUl>
      {items.map((item, index) => (
        <Tag key={index}>
          <Link target="_blank" rel="noopener noreferrer" href={item.link}>
            {item.label}
          </Link>
        </Tag>
      ))}
    </StyledUl>
  );
};

export default TagList;
