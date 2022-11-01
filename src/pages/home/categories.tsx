import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import CategoryTable from "../../layouts/tableLayouts/catgoryTable";

const Categories = () => {
  return (
    <>
      <CustomerLayout>
        <TableBar> Categories </TableBar>
        <CategoryTable />
      </CustomerLayout>
    </>
  );
};

export default Categories;
