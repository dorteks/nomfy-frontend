import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditShippings from "./edit";

const Shippings = () => {
  return (
    <CustomLayout>
      <Header title="Shippings" subtitle="" report={""} />
      <EditShippings />
    </CustomLayout>
  );
};

export default Shippings;
