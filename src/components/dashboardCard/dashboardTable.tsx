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

type Props = {
  header1?: React.ReactNode;
  header2?: React.ReactNode;
  header3?: React.ReactNode;
  header4?: React.ReactNode;
  header5?: React.ReactNode;
  header6?: React.ReactNode;
  body1?: React.ReactNode;
  body2?: React.ReactNode;
  body3?: React.ReactNode;
  body4?: React.ReactNode;
  body5?: React.ReactNode;
  body6?: React.ReactNode;
};

const DashboardTable = ({
  header1,
  header2,
  header3,
  header4,
  header5,
  header6,
  body1,
  body2,
  body3,
  body4,
  body5,
  body6,
}: Props) => {
  return (
    <Box>
      <TableContainer borderRadius="10px" mr="10px">
        <Table variant="simple" fontWeight="hairline" textColor="gray.600">
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>{header1}</Th>
              <Th>{header2}</Th>
              <Th>{header3} </Th>
              <Th>{header4} </Th>
              <Th>{header5} </Th>
              <Th>{header6} </Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={80} padding="16px 12px">
            <Tr>
              <Td>{body1}</Td>
              <Td>{body2}</Td>
              <Td>{body3}</Td>
              <Td>{body4}</Td>
              <Td>{body5}</Td>
              <Td>{body6}</Td>
            </Tr>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardTable;
