import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import ShopTable from "../../layouts/tableLayouts/shopTable";

const Shops = () => {
  return (
    <>
      <CustomerLayout>
        <TableBar>Shops</TableBar>
        <ShopTable />
      </CustomerLayout>
    </>
  );
};

export default Shops;
