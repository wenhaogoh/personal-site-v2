import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { navLinks } from "../consts/data";
import { Link as CustomLink } from "./Common";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  z-index: 1;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding-top: 1rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  display: inline;
`;

const RightLinksContainer = styled.div`
  @media only screen and (max-width: 425px) {
  }
`;

const RightLink = styled(CustomLink)`
  display: inline-block;
  margin-left: 1em;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <Link href="/" passHref>
            <CustomLink>wenhao.</CustomLink>
          </Link>
        </StyledLi>
        <RightLinksContainer>
          {navLinks.map((navLink, index) => (
            <StyledLi key={index}>
              <Link href={navLink.link} passHref>
                <RightLink>{navLink.label}.</RightLink>
              </Link>
            </StyledLi>
          ))}
        </RightLinksContainer>
      </StyledUl>
      <hr />
    </StyledNav>
  );
};

export default Navbar;
