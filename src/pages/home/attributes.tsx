import { Stack } from "@chakra-ui/react";
import BaseAppBar from "../../components/appbar";
import CustomerLayout from "../../layouts/customer";
import AttributeTable from "../../layouts/tableLayouts/attributeTable";

const Attributes = () => {
  return (
    <>
      <CustomerLayout>
        <Stack py={5} px={6} mt="2px" w="full">
          <BaseAppBar>
            <h1>Attributes </h1>
          </BaseAppBar>
          <AttributeTable />
        </Stack>
      </CustomerLayout>
    </>
  );
};

export default Attributes;
