import { Stack } from "@chakra-ui/react";
import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import GroupTable from "../../layouts/tableLayouts/groupTable";

const Group = () => {
  return (
    <CustomerLayout>
      <Stack py={5} px={6} mt="2px" w="full">
        <TableBar>Groups</TableBar>
        <GroupTable>{}</GroupTable>
      </Stack>
    </CustomerLayout>
  );
};

export default Group;
