import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import AuthorTable from "../../layouts/tableLayouts/authorTable";

const Authors = () => {
  return (
    <>
      <CustomerLayout>
        <TableBar>Authors</TableBar>
        <AuthorTable />
      </CustomerLayout>
    </>
  );
};

export default Authors;
