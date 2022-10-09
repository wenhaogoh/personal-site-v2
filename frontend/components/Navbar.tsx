import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { ENV } from "../../shared/consts";
import { Button, Link as CustomLink } from "./Common";

type NavLink = {
  label: string;
  link: string;
};

const navLinks: NavLink[] = [
  {
    label: "about",
    link: "/about",
  },
  {
    label: "blog",
    link: "/blog",
  },
  {
    label: "contact",
    link: "/contact",
  },
];

const adminNavLinks: NavLink[] = [
  {
    label: "about",
    link: "/admin/about",
  },
  {
    label: "blog",
    link: "/admin/blog",
  },
  {
    label: "contact",
    link: "/admin/contact",
  },
];

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  z-index: 1;
`;

const LinksContainer = styled.div`
  padding-left: 0;
  padding-top: 1rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
`;

const RightLinksContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 425px) {
  }
`;

const StyledLi = styled.li`
  display: inline;
  margin-left: 1em;
`;

const RightLink = styled(CustomLink)`
  display: inline-block;
`;

const Navbar: React.FC = () => {
  const router = useRouter();
  const isAdmin = router.pathname.startsWith("/admin");
  const links = isAdmin ? adminNavLinks : navLinks;

  const onLogoutHandler = () => {
    deleteCookie(ENV.ACCESS_TOKEN_COOKIE_KEY);
    router.push("/login");
  };

  return (
    <StyledNav>
      <LinksContainer>
        <Link href={isAdmin ? "/admin" : "/"} passHref>
          <CustomLink>{isAdmin ? "admin." : "wenhao."}</CustomLink>
        </Link>
        <RightLinksContainer>
          {links.map((navLink, index) => (
            <StyledLi key={index}>
              <Link href={navLink.link} passHref>
                <RightLink>{navLink.label}.</RightLink>
              </Link>
            </StyledLi>
          ))}
          {isAdmin && (
            <StyledLi>
              <Button onClick={onLogoutHandler}>logout.</Button>
            </StyledLi>
          )}
        </RightLinksContainer>
      </LinksContainer>
      <hr />
    </StyledNav>
  );
};

export default Navbar;
