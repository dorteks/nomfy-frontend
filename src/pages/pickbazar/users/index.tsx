import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditUsers from "./edit";

const Users = () => {
  return (
    <CustomLayout>
      <Header title="Users" subtitle="" report={""} />
      <EditUsers />
    </CustomLayout>
  );
};

export default Users;
