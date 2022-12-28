import {
  Table,
  Thead as TableHead,
  Tbody as TableBody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tab,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, ViewIcon } from "@chakra-ui/icons";
import { useGetAllShops } from "../../app/api/shops/shop.query";
import Link from "next/link";
import { useGetAllProducts } from "../../app/api/products/product.query";

const ShopsTable = () => {
  const { data, isLoading } = useGetAllShops({});
  console.log("data", data);

  const { data: productData } = useGetAllProducts({});
  console.log("productData", productData);

  return (
    <Box>
      <TableContainer borderRadius="10px" mr="10px">
        {isLoading && <h1>Loading...</h1>}
        <Table variant="simple" fontWeight="hairline" textColor="gray.600">
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>Logo</Th>
              <Th>Name</Th>
              <Th>Owner Name</Th>
              <Th>Description</Th>
              <Th>Contact</Th>
              {/* <Th>Products</Th>
              <Th>Orders</Th> */}
              <Th>Website</Th>
              <Th>Actions</Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={20} padding="16px 12px">
            {data?.map((shop: any) => {
              return (
                <Tr key={shop.name}>
                  <Td> {shop.logo} </Td>
                  <Td> {shop.name} </Td>
                  <Td>Store Owner</Td>
                  <Td> {shop.description} </Td>
                  <Td> {shop.phoneNumber} </Td>
                  {/* <Td> 34 </Td>
                  <Td> 8 </Td> */}

                  <Td>
                    <Tabs variant="soft-rounded" colorScheme="green">
                      <TabList>
                        <Tab fontSize="14px" fontWeight="hairline">
                          {shop.website}
                        </Tab>
                      </TabList>
                    </Tabs>
                  </Td>
                  <Td>
                    <CloseIcon mr="30px" boxSize="15px" color="red.500" />
                    {/* <Link href={`shops/${shop.id}`}>
                      <ViewIcon boxSize="20px" color="gray.500" />
                    </Link> */}
                    <Link href={`shops/shop/`}>
                      <ViewIcon boxSize="20px" color="gray.500" />
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShopsTable;
