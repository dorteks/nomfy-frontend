import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import { CreateShopButton } from "../../../components/SearchBox";
import ShopsTable from "../../../containers/tables/shopsTable";

const Shops = () => {
  return (
    <CustomLayout>
      <Header title="Shops" subtitle="" report={<CreateShopButton />} />
      <ShopsTable />
    </CustomLayout>
  );
};

export default Shops;
