import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditWithdrawals from "./edit";

const Withdrawals = () => {
  return (
    <CustomLayout>
      <Header title="Withdrawals" subtitle="" report={""} />
      <EditWithdrawals />
    </CustomLayout>
  );
};

export default Withdrawals;
