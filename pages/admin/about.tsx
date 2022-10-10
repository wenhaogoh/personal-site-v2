import { NextPage } from "next";
import { PacmanLoader } from "react-spinners";

import { LoaderContainer, Title } from "../../frontend/components/Common";
import TagTable from "../../frontend/components/TagTable";
import { useGetTags } from "../../frontend/hooks/tags";

const AdminAbout: NextPage = () => {
  const { tags, isLoading } = useGetTags();
  return (
    <>
      <Title>tags.</Title>
      {isLoading && (
        <LoaderContainer>
          <PacmanLoader size={"1rem"} />
        </LoaderContainer>
      )}
      {tags && <TagTable tags={tags} />}
    </>
  );
};

export default AdminAbout;
