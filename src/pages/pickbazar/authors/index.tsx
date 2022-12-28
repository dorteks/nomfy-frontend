import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditAuthors from "./edit";

const Authors = () => {
  return (
    <CustomLayout>
      <Header title="Authors" subtitle="" report={""} />
      <EditAuthors />
    </CustomLayout>
  );
};

export default Authors;
