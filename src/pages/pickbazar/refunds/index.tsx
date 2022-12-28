import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditRefunds from "./edit";

const Refunds = () => {
  return (
    <CustomLayout>
      <Header title="Refunds" subtitle="" report={""} />
      <EditRefunds />
    </CustomLayout>
  );
};

export default Refunds;
