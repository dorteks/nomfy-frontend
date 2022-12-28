import { Box, Stack, Text } from "@chakra-ui/react";
import {
  BsBasket3,
  BsBoxSeam,
  BsCashCoin,
  BsCurrencyDollar,
  BsPercent,
} from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useGetProduct } from "../../app/api/products/product.query";

const ShopTransactions = () => {
  // const productId =  {productData.id === parseInt(productId)}

  const { data: productData, isSuccess } = useGetProduct(11);

  console.log("productData", productData);

  if (isSuccess) {
    console.log("isSuccess", isSuccess);
  }

  return (
    <Box>
      <Stack direction="row" mt="20px" mr="60px" spacing={100}>
        <Box ml="20px">
          <Text fontSize="18px">Products</Text>
          <Stack
            direction="row"
            display="flex"
            borderColor="black"
            borderWidth="1px"
            h="75px"
            w="300px"
            mt="15px"
          >
            <Box mt="12px" ml="10px" p="12px 16px">
              <BsBoxSeam size="24px" />
            </Box>

            <Box p="12px 16px">
              <Text fontSize="18px" mb="5px">
                {productData?.quantity}
              </Text>
              <Text fontSize="14px">Total Products</Text>
            </Box>
          </Stack>
          <Stack
            direction="row"
            display="flex"
            borderColor="black"
            borderWidth="1px"
            h="75px"
            w="300px"
            mt="15px"
            mb="100px"
          >
            <Box mt="12px" ml="10px" p="12px 16px">
              <BsBasket3 size="24px" />
            </Box>

            <Box p="12px 16px">
              <Text fontSize="18px" mb="5px">
                8
              </Text>
              <Text fontSize="14px">Total Orders</Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Text>Revenue</Text>
          <Stack
            direction="row"
            display="flex"
            borderColor="black"
            borderWidth="1px"
            h="75px"
            w="300px"
            mt="15px"
          >
            <Box mt="12px" ml="10px" p="12px 16px">
              <BsCashCoin size="24px" />
            </Box>

            <Box p="12px 16px">
              <Text mt="12px" fontSize="14px">
                Gross Sales
              </Text>
            </Box>
          </Stack>
          <Stack
            direction="row"
            display="flex"
            borderColor="black"
            borderWidth="1px"
            h="75px"
            w="300px"
            mt="15px"
            mb="100px"
          >
            <Box mt="12px" ml="10px" p="12px 16px">
              <BsCurrencyDollar size="24px" />
            </Box>

            <Box p="12px 16px">
              <Text mt="12px" fontSize="14px">
                Current Balance
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Text>Others</Text>
          <Stack
            direction="row"
            display="flex"
            borderColor="black"
            borderWidth="1px"
            h="75px"
            w="300px"
            mt="15px"
          >
            <Box mt="12px" ml="10px" p="12px 16px">
              <BsPercent size="24px" />
            </Box>

            <Box p="12px 16px">
              <Text fontSize="18px" mb="5px">
                0 %
              </Text>
              <Text fontSize="14px">Admin Commision Rate</Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ShopTransactions;
