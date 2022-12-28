import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditCoupons from "./edit";

const Coupons = () => {
  return (
    <CustomLayout>
      <Header title="Coupons" subtitle="" report={""} />
      <EditCoupons />
    </CustomLayout>
  );
};

export default Coupons;
