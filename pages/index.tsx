import type { NextPage } from "next";
import styled from "styled-components";

import { Link, Text } from "../components/Common";

const Links = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const CustomLink = styled(Link)`
  margin: 0 10px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Text>Hi! I&apos;m Wen Hao.</Text>
      <Text>
        Currently, I&apos;m in my final year of pursuing a Computer Science
        degree at National University of Singapore and expect to graduate in May
        2023.
      </Text>
      <Text>
        Most of my experience lies in full-stack web development. I&apos;ve also
        dabbled quite a fair bit in game development, having built several games
        throughout my time in university.
      </Text>
      <Text>
        This website is not just my portfolio, but also also a playground for me
        to experiment with technologies, learn new frameworks and build cool
        stuff! It is powered by NextJS, written in Typescript and deployed on
        Heroku.
      </Text>
      <Links>
        <CustomLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/wenhaogoh"
        >
          github.
        </CustomLink>
        <CustomLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/wenhaogoh/"
        >
          linkedin.
        </CustomLink>
        <CustomLink
          target="_blank"
          rel="noopener noreferrer"
          href="/resume.pdf"
        >
          resume.
        </CustomLink>
      </Links>
    </>
  );
};

export default Home;
