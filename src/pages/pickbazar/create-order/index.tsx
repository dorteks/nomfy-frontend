import { Box } from "@chakra-ui/react";
import OrderCard from "../../../components/createOrder/orderCard";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";

const CreateOrders = () => {
  return (
    <CustomLayout>
      <Header title="Create Order" subtitle="" report={""} />
      <OrderCard />
    </CustomLayout>
  );
};

export default CreateOrders;
