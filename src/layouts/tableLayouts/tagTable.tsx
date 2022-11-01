import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";

const TagTable = () => {
  return (
    <>
      <TableHead>
        <h1>ID</h1>
        <h1>Name</h1>
        <h1>Slug</h1>
        <h1>Group</h1>
        <h1>Actions</h1>
      </TableHead>
      <TableData>
        <h1>1</h1>
        <h1>First Edition</h1>
        <h1>first-edition</h1>
        <h1>Books</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
      <TableData>
        <h1>2</h1>
        <h1>Second Edition</h1>
        <h1>second-edition</h1>
        <h1>Books</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
      <TableData>{}</TableData>
    </>
  );
};

export default TagTable;
