import { FC, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { useTimer } from "react-timer-hook";
import styled from "styled-components";

import { usePublicContext } from "../contexts/PublicContext";

type ContainerProps = {
  isVisible: boolean;
};

const MIN_LOAD_DURATION_IN_SECONDS = 3;
const TRANSITION_DURATION_IN_SECONDS = 1;

const Container = styled.div<ContainerProps>`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${TRANSITION_DURATION_IN_SECONDS}s ease-out;
`;

const PublicPreloader: FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { isLoading } = usePublicContext();
  const { restart } = useTimer({
    expiryTimestamp: new Date(),
    onExpire: () => setIsCompleted(true),
    autoStart: false,
  });
  const { isRunning } = useTimer({
    expiryTimestamp: new Date(
      new Date().getTime() + MIN_LOAD_DURATION_IN_SECONDS * 1000
    ),
    onExpire: () =>
      restart(
        new Date(new Date().getTime() + TRANSITION_DURATION_IN_SECONDS * 1000)
      ),
  });

  return (
    <Container isVisible={!isCompleted}>
      <PacmanLoader
        cssOverride={{
          opacity: isLoading || isRunning ? 1 : 0,
          transition: `opacity ${TRANSITION_DURATION_IN_SECONDS}s ease-out`,
        }}
      />
    </Container>
  );
};

export default PublicPreloader;
