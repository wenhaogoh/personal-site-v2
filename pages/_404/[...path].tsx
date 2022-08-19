import { NextPage } from "next";

const Custom404: NextPage = () => {
  return <></>;
};

export const getServerSideProps = () => {
  return { redirect: { destination: "/", permanent: false } };
};

export default Custom404;
