import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditOrderStatus from "./edit";

const OrderStatus = () => {
  return (
    <CustomLayout>
      <Header title="Order Status" subtitle="" report={""} />
      <EditOrderStatus />
    </CustomLayout>
  );
};

export default OrderStatus;
