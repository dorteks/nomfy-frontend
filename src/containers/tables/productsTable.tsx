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
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useGetAllProducts } from "../../app/api/products/product.query";
import axios from "axios";

const ProductsTable = () => {
  const { data, isLoading, error } = useGetAllProducts({});
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error);

  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");

  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:4001/products")
  //     .then((res) => {
  //       setData(res.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading......</h1>;
  // }
  // console.log("fetching data");

  // if (error) {
  //   return <h2>{error}</h2>;
  // }
  // console.log("errror fetching data");

  return (
    <Box>
      {isLoading && <h1>Loading...</h1>}
      <TableContainer borderRadius="10px" mr="10px">
        <Table variant="simple" fontWeight="hairline" textColor="gray.600">
          <TableHead bg="gray.100" h={14}>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Gallery</Th>
              <Th>Unit</Th>
              <Th>Price/Unit</Th>
              <Th>Quantity</Th>
              <Th>Sales Price</Th>
              <Th>SKU*</Th>
              <Th>Actions</Th>
            </Tr>
          </TableHead>
          <TableBody bg="white" h={20} padding="16px 12px">
            {data?.map((product: any) => {
              return (
                <Tr key={product.sku}>
                  <Td>{product.featuredImage.featuredImage}</Td>
                  <Td>{product.description} </Td>
                  <Td>{product.gallery} </Td>
                  <Td>{product.unit} </Td>
                  <Td>{product.price} </Td>
                  <Td>{product.quantity}</Td>
                  <Td>{product.salesPrice}</Td>
                  <Td>
                    <Tabs variant="soft-rounded" colorScheme="green">
                      <TabList>
                        <Tab fontSize="14px" fontWeight="hairline">
                          {product.sku}
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsTable;
