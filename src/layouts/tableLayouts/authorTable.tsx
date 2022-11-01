import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";
import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";

const AuthorTable = () => {
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
        <h1>James N. Almeida</h1>
        <h1>5</h1>
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
        <h1>Earnestine N. Pace</h1>
        <h1>6</h1>
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

export default AuthorTable;
