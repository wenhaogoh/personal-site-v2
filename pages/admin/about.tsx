import { NextPage } from "next";

import { Title } from "../../frontend/components/Common";
import TagTable from "../../frontend/components/TagTable";
import { useGetTags } from "../../frontend/hooks/tags";

const AdminAbout: NextPage = () => {
  const { tags } = useGetTags();
  return (
    <>
      <Title>tags.</Title>
      {tags && <TagTable tags={tags} />}
    </>
  );
};

export default AdminAbout;
