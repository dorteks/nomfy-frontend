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
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { CiApple } from "react-icons/ci";
import { MdOutlineBakeryDining, MdOutlineChair } from "react-icons/md";
import { GiLargeDress, GiPowder } from "react-icons/gi";
import { BsBook, BsHandbag } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { useGetAllGroups } from "../../app/api/groups/group.query";

const GroupsTable = () => {
  // const { data, isError, isLoading, isSuccess, error } = useGetAllGroups({});
  // console.log("data", data);
  // console.log("isError", isError);
  // console.log("isSuccess", isSuccess);
  // console.log(error);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:4001/groups")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    console.log("fetching data");
    return <h1>Loading......</h1>;
  }

  if (error) {
    console.log("errror fetching data ----", error);
    return <h2>{error}</h2>;
  }

  return (
    <Box>
      {isLoading && <h1>Loading...</h1>}
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
          <TableBody bg="white" h={20} padding="16px 12px">
            {data?.map((group: any) => {
              return (
                <Tr key={group.name}>
                  <Td>{group.id} </Td>
                  <Td>{group.name}</Td>
                  <Td>{group.icon}</Td>
                  <Td>
                    {" "}
                    <DeleteIcon mr="20px" boxSize="20px" color="red.500" />
                    <Link href="groups/edit">
                      <EditIcon boxSize="20px" color="gray.500" />
                    </Link>
                  </Td>
                </Tr>
              );
            })}

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
            {/* <Tr>
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
            </Tr>  */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GroupsTable;
