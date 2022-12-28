import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditCategories from "./edit";

const Categories = () => {
  return (
    <CustomLayout>
      <Header title="Categories" subtitle="" report={""} />
      <EditCategories />
    </CustomLayout>
  );
};

export default Categories;
