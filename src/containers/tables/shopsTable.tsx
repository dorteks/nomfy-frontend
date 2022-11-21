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

const ShopsTable = () => {
  return (
    <Box>
      <TableContainer borderRadius="10px" mr="10px">
        <Table variant="simple" fontWeight="hairline" textColor="gray.600">
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>Logo</Th>
              <Th>Name</Th>
              <Th>Owner Name</Th>
              <Th>Products</Th>
              <Th>Orders</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={80} padding="16px 12px">
            <Tr>
              <Td>img</Td>
              <Td>Furniture Shop</Td>
              <Td>Store Owner</Td>
              <Td>55</Td>
              <Td>8</Td>

              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      Active
                    </Tab>
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                <CloseIcon mr="30px" boxSize="15px" color="red.500" />
                <ViewIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>img</Td>
              <Td>Clothing Shop</Td>
              <Td>Store Owner</Td>
              <Td>64</Td>
              <Td>4</Td>

              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      Active
                    </Tab>{" "}
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                <CloseIcon mr="30px" boxSize="15px" color="red.500" />
                <ViewIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>img</Td>
              <Td>Bags Shop</Td>
              <Td>Store Owner</Td>
              <Td>15</Td>
              <Td>7</Td>

              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      Active
                    </Tab>{" "}
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                <CloseIcon mr="30px" boxSize="15px" color="red.500" />
                <ViewIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>img</Td>
              <Td>Makeup Shop</Td>
              <Td>Store Owner</Td>
              <Td>81</Td>
              <Td>3</Td>

              <Td>
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList>
                    <Tab fontSize="14px" fontWeight="hairline">
                      Active
                    </Tab>{" "}
                  </TabList>
                </Tabs>
              </Td>
              <Td>
                <CloseIcon mr="30px" boxSize="15px" color="red.500" />
                <ViewIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShopsTable;
