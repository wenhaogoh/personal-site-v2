import Head from "next/head";
import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1em;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>wenhao.</title>
        <meta name="description" content="Wen Hao's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
