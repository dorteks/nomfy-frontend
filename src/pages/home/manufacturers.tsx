import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import ManufacturerTable from "../../layouts/tableLayouts/manufacturerTable";

const Manufacturers = () => {
  return (
    <>
      <CustomerLayout>
        <TableBar>Manufacturers</TableBar>
        <ManufacturerTable />
      </CustomerLayout>
    </>
  );
};

export default Manufacturers;
