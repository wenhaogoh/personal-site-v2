import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1em;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Head>
      <title>wenhao.</title>
      <meta name="description" content="Wen Hao's personal site" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Navbar />
    <main>{children}</main>
  </Container>
);

export default Layout;
