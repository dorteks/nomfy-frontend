import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import TableBar from "../../components/tables/table-bar";
import CustomerLayout from "../../layouts/customer";
import ProductTable from "../../layouts/tableLayouts/prodcutTable";

const Products = () => {
  return (
    <CustomerLayout>
      <Stack py={5} px={6} mt="2px" w="full">
        <TableBar>Products</TableBar>
        <ProductTable>
          <Stack direction="row"></Stack>
        </ProductTable>
      </Stack>
    </CustomerLayout>
  );
};
export default Products;
