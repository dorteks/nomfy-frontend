import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";

const CategoryTable = () => {
  return (
    <>
      <TableHead>
        <Stack direction="row" spacing={20}>
          <h1></h1>
          <h1>ID</h1>
          <h1>Name</h1>
        </Stack>
        <h1>Details</h1>
        <h1>Image</h1>
        <Stack direction="row" spacing={40}>
          <h1>Icon</h1>
          <h1>Slug</h1>
          <h1>Group</h1>
        </Stack>
        <h1>Actions</h1>
      </TableHead>
      <TableData>
        <Stack direction="row" spacing={20}>
          <h1></h1>
          <h1>1</h1>
          <h1>Fruits and Vegetables</h1>
        </Stack>
        <h1></h1>
        <h1></h1>
        <Stack direction="row" spacing={40}>
          <h1>Icon</h1>
          <h1>fruits-vegetables</h1>
          <h1>Grocery</h1>
        </Stack>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>{" "}
      </TableData>
      <TableData>
        <Stack direction="row" spacing={20}>
          <h1></h1>
          <h1>1</h1>
          <h1>Fruits and Vegetables</h1>
        </Stack>
        <h1></h1>
        <h1></h1>
        <Stack direction="row" spacing={40}>
          <h1>Icon</h1>
          <h1>fruits-vegetables</h1>
          <h1>Grocery</h1>
        </Stack>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>{" "}
      </TableData>
    </>
  );
};

export default CategoryTable;
