import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import { AddGroupButton } from "../../../components/SearchBox";
import GroupsTable from "../../../containers/tables/groupsTable";

const Groups = () => {
  return (
    <CustomLayout>
      <Header title="Groups" subtitle="" report={<AddGroupButton />} />
      <GroupsTable />
    </CustomLayout>
  );
};

export default Groups;
