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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Link from "next/link";

const ProductsTable = () => {
  return (
    <Box>
      <TableContainer borderRadius="10px" mr="10px">
        <Table variant="simple" fontWeight="hairline" textColor="gray.600">
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Group</Th>
              <Th>Shop</Th>
              <Th>Product Type</Th>
              <Th>Price/Unit</Th>
              <Th>Quantity</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={80} padding="16px 12px">
            <Tr>
              <Td>url</Td>
              <Td>Brussels Sprout</Td>
              <Td>Grocery</Td>
              <Td>Grocery Shop</Td>
              <Td>simple</Td>
              <Td>$5.00</Td>
              <Td>18</Td>
              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      publish
                    </Tab>{" "}
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <Link href="products/edit">
                  <EditIcon boxSize="20px" color="gray.500" />
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>url</Td>
              <Td>Mixed Vegetable Platter</Td>
              <Td>Grocery</Td>
              <Td>Grocery Shop</Td>
              <Td>simple</Td>
              <Td>$5.00</Td>
              <Td>100</Td>
              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      publish
                    </Tab>{" "}
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>url</Td>
              <Td>Mixed Vegetable Platter</Td>
              <Td>Grocery</Td>
              <Td>Grocery Shop</Td>
              <Td>simple</Td>
              <Td>$5.00</Td>
              <Td>100</Td>
              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      publish
                    </Tab>{" "}
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>url</Td>
              <Td>Mixed Vegetable Platter</Td>
              <Td>Grocery</Td>
              <Td>Grocery Shop</Td>
              <Td>simple</Td>
              <Td>$5.00</Td>
              <Td>100</Td>
              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      publish
                    </Tab>
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsTable;
