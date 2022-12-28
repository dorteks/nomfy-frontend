import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditOrders from "./edit";

const Orders = () => {
  return (
    <CustomLayout>
      <Header title="Orders" subtitle="" report={""} />
      <EditOrders />
    </CustomLayout>
  );
};

export default Orders;
