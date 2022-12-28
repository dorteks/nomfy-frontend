import { Box, Stack } from "@chakra-ui/react";
import OrderCard from "../../../components/createOrder/orderCard";
import { BsClipboardCheck } from "react-icons/bs";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import { Text } from "@chakra-ui/react";
import Button from "../../../components/button";
import UpdateItem from "../../../components/createOrder/updateItem";

const CreateOrders = () => {
  return (
    <CustomLayout>
      <Header title="Create Order" subtitle="" report={""} />
      <OrderCard />
      <UpdateItem />
    </CustomLayout>
  );
};

export default CreateOrders;
