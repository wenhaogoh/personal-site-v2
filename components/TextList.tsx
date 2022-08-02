import React from "react";
import styled from "styled-components";

export const StyledUl = styled.ul`
  padding-left: 1.1em;
`;

interface Props {
  items: string[];
}

const TextList: React.FC<Props> = ({ items }) => {
  return (
    <StyledUl>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledUl>
  );
};

export default TextList;
