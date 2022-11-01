import { TableContainer, Table, Tbody, Tr, Td, Stack } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const TableData = ({ children }: Props) => {
  return (
    <TableContainer px={2} py={4} mt={4} overflowY="hidden">
      <Table variant="simple" colorScheme="gray">
        <Tbody>
          <Tr>
            <Td>
              <Stack
                direction="row"
                spacing="auto"
                h="6"
                mt="-7"
                alignSelf="center"
              >
                {children}
              </Stack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
