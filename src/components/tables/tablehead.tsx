import { TableContainer, Table, Thead, Th, Tr, Stack } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const TableHead = ({ children }: Props) => {
  return (
    <TableContainer px={2} py={4} mt={4}>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>
              <Stack direction="row" spacing="auto" h="6">
                {children}
              </Stack>
            </Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  );
};

export default TableHead;
