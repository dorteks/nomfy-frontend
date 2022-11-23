import {
  Table,
  Thead as TableHead,
  Tbody as TableBody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Link from "next/link";

const AttributesTable = () => {
  return (
    <Box>
      <TableContainer borderRadius="10px" mr="10px">
        <Table
          variant="simple"
          fontWeight="hairline"
          textColor="gray.600"
          p={5}
          bg="white"
        >
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Shop</Th>
              <Th>Values</Th>
              <Th>Actions</Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={80} padding="16px 12px">
            <Tr>
              <Td>3</Td>
              <Td>Color</Td>
              <Td>Clothing Shop</Td>
              <Td>Red, Blue, White</Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <Link href="attributes/edit">
                  <EditIcon boxSize="20px" color="gray.500" />
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>size</Td>
              <Td>Clothing Shop</Td>
              <Td>S, M, L, XL</Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>Language</Td>
              <Td>Books Shop</Td>
              <Td>English, Arabic, Spanish, Fench, Hindi, Hebrew</Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>Book Type</Td>
              <Td>Books Shop</Td>
              <Td>Hardcover Book, Picture Book, Paperback Book, PDF Book</Td>

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

export default AttributesTable;
