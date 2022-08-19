import styled from "styled-components";

export const Text = styled.p`
  text-align: justify;
`;

export const Title = styled.h3``;

// TODO: Simplify open in new tab configuration
export const UnderlinedLink = styled.a`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    text-decoration: none;
  }
`;

export const TextInput = styled.input`
  all: unset;
  border: 2px solid black;
  padding: 0.2em;
`;
