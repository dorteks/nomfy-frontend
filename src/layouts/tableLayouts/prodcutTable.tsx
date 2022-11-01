import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Img,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";

type Props = { children: React.ReactNode };

const ProductTable = (props: Props) => {
  return (
    //     <Tbody>
    //       <Tr>
    //         <Td>Image Url</Td>
    //         <Td>Apples</Td>
    //         <Td>Grocery</Td>
    //         <Td>Grocery Shop</Td>
    //         <Td>Simple</Td>
    //         <Td isNumeric>2.00</Td>
    //         <Td isNumeric>18</Td>
    //         <Td>publish</Td>
    //         <Td>
    //           <Img />
    //           <Img />
    //         </Td>
    //       </Tr>
    //       <Tr>
    //         <Td>Image Url</Td>
    //         <Td>Apples</Td>
    //         <Td>Grocery</Td>
    //         <Td>Grocery Shop</Td>
    //         <Td>Simple</Td>
    //         <Td isNumeric>2.00</Td>
    //         <Td isNumeric>18</Td>
    //         <Td>publish</Td>
    //         <Td>
    //           <Img />
    //           <Img />
    //         </Td>
    //       </Tr>
    //       <Tr>
    //         <Td>Image Url</Td>
    //         <Td>Apples</Td>
    //         <Td>Grocery</Td>
    //         <Td>Grocery Shop</Td>
    //         <Td>Simple</Td>
    //         <Td isNumeric>2.00</Td>
    //         <Td isNumeric>18</Td>
    //         <Td>publish</Td>
    //         <Td>
    //           <Img />
    //           <Img />
    //         </Td>
    //       </Tr>
    //     </Tbody>
    //   </Table>
    // </TableContainer>
    <>
      <TableHead>
        <h1>Image</h1>
        <h1>Name</h1>
        <h1>Group</h1>
        <h1>Shop</h1>
        <h1>Product Type</h1>
        <h1>Price/Unit</h1>
        <h1>Quantity</h1>
        <h1>Status</h1>
        <h1>Actions</h1>
      </TableHead>

      <TableData>
        <h1>image</h1>
        <h1>Apples</h1>
        <h1>Grocery</h1>
        <h1>Grocery Shop</h1>
        <h1>Simple</h1>
        <h1>$ 2.00</h1>
        <h1>18</h1>
        <h1>published</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>

      <TableData>
        <h1>image</h1>
        <h1>Apples</h1>
        <h1>Grocery</h1>
        <h1>Grocery Shop</h1>
        <h1>Simple</h1>
        <h1>$ 2.00</h1>
        <h1>18</h1>
        <h1>published</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>

      <TableData>
        <h1>image</h1>
        <h1>Apples</h1>
        <h1>Grocery</h1>
        <h1>Grocery Shop</h1>
        <h1>Simple</h1>
        <h1>$ 2.00</h1>
        <h1>18</h1>
        <h1>published</h1>
        <h1>
          <DeleteIcon mr={8} />
          <EditIcon />
        </h1>
      </TableData>
    </>
  );
};

export default ProductTable;
