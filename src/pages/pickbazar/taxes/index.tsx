import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditTaxes from "./edit";

const Taxes = () => {
  return (
    <CustomLayout>
      <Header title="Taxes" subtitle="" report={""} />
      <EditTaxes />
    </CustomLayout>
  );
};

export default Taxes;
