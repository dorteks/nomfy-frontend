import {
  Table,
  Thead as TableHead,
  Tbody as TableBody,
  Tr,
  Th,
  Td,
  TableContainer,
  Img,
} from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { CiApple } from "react-icons/ci";
import { MdOutlineBakeryDining, MdOutlineChair } from "react-icons/md";
import { GiLargeDress, GiPowder } from "react-icons/gi";
import { BsBook, BsHandbag } from "react-icons/bs";
import Link from "next/link";

const GroupsTable = () => {
  return (
    <Box>
      <TableContainer borderRadius="10px" mr="10px">
        <Table variant="simple" fontWeight="hairline" textColor="gray.600">
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Icon</Th>
              <Th>Actions</Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={80} padding="16px 12px">
            <Tr>
              <Td>1</Td>
              <Td>Grocery</Td>
              <Td>
                <CiApple size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <Link href="groups/edit">
                  <EditIcon boxSize="20px" color="gray.500" />
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Bakery</Td>
              <Td>
                <MdOutlineBakeryDining size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Makeup</Td>
              <Td>
                <GiPowder size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>Bags</Td>
              <Td>
                <BsHandbag size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>Clothing</Td>
              <Td>
                <CiApple size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>Clothing</Td>
              <Td>
                <GiLargeDress size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>Furniture</Td>
              <Td>
                <MdOutlineChair size="30px" />
              </Td>

              <Td>
                {" "}
                <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                <EditIcon boxSize="20px" color="gray.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>Books</Td>
              <Td>
                <BsBook size="30px" />
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

export default GroupsTable;
