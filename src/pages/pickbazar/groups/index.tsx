import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import GroupsTable from "../../../containers/tables/groupsTable";

const Groups = () => {
  return (
    <CustomLayout>
      <Header title="Groups" subtitle="" report={""} />
      <GroupsTable />
    </CustomLayout>
  );
};

export default Groups;
