import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditSettings from "./edit";

const Settings = () => {
  return (
    <CustomLayout>
      <Header title="Settings" subtitle="" report={""} />
      <EditSettings />
    </CustomLayout>
  );
};

export default Settings;
