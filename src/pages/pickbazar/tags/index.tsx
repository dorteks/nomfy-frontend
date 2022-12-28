import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditTags from "./edit";

const Tags = () => {
  return (
    <CustomLayout>
      <Header title="Tags" subtitle="" report={""} />
      <EditTags />
    </CustomLayout>
  );
};

export default Tags;
