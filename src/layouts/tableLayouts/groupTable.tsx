import { Stack } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import TableHead from "../../components/tables/tablehead";
import TableData from "../../components/tables/tabledata";

const GroupTable = () => {
  return (
    <>
      <TableHead>
        <Stack direction="row" spacing={10}>
          <h1>ID</h1>
          <h1>Name</h1>
        </Stack>
        <h1>Icon</h1>
        <h1>Actions</h1>
      </TableHead>
      <TableData>
        <Stack direction="row" spacing={10}>
          <h1>1</h1>
          <h1>Grocery</h1>
        </Stack>
        <h1>Icon</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
      <TableData>
        <Stack direction="row" spacing={10}>
          <h1>2</h1>
          <h1>Bakery</h1>
        </Stack>
        <h1>Icon</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
      <TableData>
        <Stack direction="row" spacing={10}>
          <h1>3</h1>
          <h1>Winery</h1>
        </Stack>
        <h1>Icon</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
    </>
  );
};

export default GroupTable;
