import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";

const AttributeTable = () => {
  return (
    <>
      <TableHead>
        <Stack direction="row" spacing={490}>
          <Stack direction="row" spacing={20}>
            <h1>ID</h1>
            <h1>Name</h1>
          </Stack>
          <Stack direction="row" spacing={40}>
            <h1>Shop</h1>
            <h1>Values</h1>
          </Stack>
          <h1>Actions</h1>
        </Stack>
      </TableHead>
      <TableData>
        <Stack direction="row" spacing={455}>
          <Stack direction="row" spacing={20} mr="auto">
            <h1>3</h1>
            <h1>Color</h1>
          </Stack>
          <Stack direction="row" spacing={100}>
            <h1>Clothing Shop</h1>
            <h1>Red, Blue, White</h1>
          </Stack>
          <h1>
            <DeleteIcon mr={8} />
            <EditIcon />
          </h1>
        </Stack>
      </TableData>
      <TableData>
        <Stack direction="row" spacing={455}>
          <Stack direction="row" spacing={20}>
            <h1>4</h1>
            <h1>Size</h1>
          </Stack>
          <Stack direction="row" spacing={100}>
            <h1>Clothing Shop</h1>
            <h1>S, M, L, XL</h1>
          </Stack>
          <h1>
            <DeleteIcon mr={8} />
            <EditIcon />
          </h1>
        </Stack>
      </TableData>
    </>
  );
};

export default AttributeTable;
