import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";
import { Switch } from "@chakra-ui/react";

const ManufacturerTable = () => {
  return (
    <>
      <TableHead>
        <h1>ID</h1>
        <h1>Image</h1>
        <h1>Name</h1>
        <h1>Products</h1>
        <h1>Approval Action</h1>
        <h1>Actions</h1>
      </TableHead>
      <TableData>
        <h1>1</h1>
        <h1>Image</h1>
        <h1>Too cool publication</h1>
        <h1>8</h1>
        <h1>
          <Switch colorScheme="teal" size="lg" />
        </h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
      <TableData>
        <h1>2</h1>
        <h1>Image</h1>
        <h1>Jeremy publication</h1>
        <h1>11</h1>
        <h1>
          <Switch colorScheme="teal" size="lg" />
        </h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
      <TableData> {} </TableData>
    </>
  );
};

export default ManufacturerTable;
