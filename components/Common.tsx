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
