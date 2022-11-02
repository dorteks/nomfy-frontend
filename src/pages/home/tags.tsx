import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import TagTable from "../../layouts/tableLayouts/tagTable";

const Tags = () => {
  return (
    <>
      <CustomerLayout>
        <TableBar>Tags</TableBar>
        <TagTable />
      </CustomerLayout>
    </>
  );
};

export default Tags;
