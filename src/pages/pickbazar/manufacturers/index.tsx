import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditManufacturers from "./edit";

const Manufacturers = () => {
  return (
    <CustomLayout>
      <Header title="Manufacturers" subtitle="" report={""} />
      <EditManufacturers />
    </CustomLayout>
  );
};

export default Manufacturers;
