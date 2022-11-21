import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import AttributesTable from "../../../containers/tables/attributesTable";

const Attributes = () => {
  return (
    <CustomLayout>
      <Header title="Attributes" subtitle="" report={""} />
      <AttributesTable />
    </CustomLayout>
  );
};

export default Attributes;
