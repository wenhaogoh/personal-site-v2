import { FC } from "react";
import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Loader: FC = () => {
  return (
    <Container>
      <PacmanLoader />
    </Container>
  );
};

export default Loader;
