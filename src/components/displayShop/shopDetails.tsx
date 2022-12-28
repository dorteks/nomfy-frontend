import { Avatar, Box, Link, MenuItem, Stack, Text } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import Button from "../button";
import { useParams } from "react-router-dom";
import { useGetOneShop } from "../../app/api/shops/shop.query";

const ShopDetails = (req: any) => {
  const shopId = 8;

  const {
    isSuccess,
    isError,
    isLoading,
    data: shopData,
  } = useGetOneShop(shopId);

  console.log("data", shopData);

  {
    isLoading && <h1>Loading...</h1>;
  }
  if (isError) {
    console.log(isError, "-isError");
  }
  if (isSuccess) {
    console.log("isSuccess:::", isSuccess);
  }

  return (
    <Box mt="40px" display="flex" justifyContent="center" alignItems="center">
      <Stack direction="column">
        <Stack direction="column" alignItems="center">
          <Avatar
            name=""
            boxSize="100px"
            src="/assets/user.png"
            borderRadius="full"
            mb="10px"
          />
          <Text fontSize="25px" fontWeight="bold">
            {shopData?.name}
          </Text>
          <Text
            p="3px 45px"
            justifyContent="inherit"
            fontSize="15px"
            fontWeight="hairline"
          >
            {shopData?.description}
          </Text>
        </Stack>
        <Stack mr="25px">
          <Box>
            <Box ml="20px">
              <GoLocation />
            </Box>
            <Text fontSize="15px" fontWeight="hairline" mt="10px" ml="20px">
              {shopData?.address?.[0].streetAddress}
            </Text>
            <Text fontSize="15px" fontWeight="hairline" ml="20px">
              {shopData?.address?.[0].city}
            </Text>
            <Text fontSize="15px" fontWeight="hairline" ml="20px">
              {shopData?.address?.[0].state}
            </Text>
            <Text fontSize="15px" fontWeight="hairline" ml="20px">
              {shopData?.address?.[0].zipcode}
            </Text>
            <Text fontSize="15px" fontWeight="hairline" mb="10px" ml="20px">
              {shopData?.address?.[0].country}
            </Text>
          </Box>
          <Box>
            <Box ml="20px">
              <BsTelephone />
            </Box>

            <Text fontSize="15px" fontWeight="hairline" mt="10px" ml="20px">
              {" "}
              {shopData?.phoneNumber}
            </Text>
            <Stack alignItems="center" mt="10px" mb="25px">
              <Button>Visit Shop</Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShopDetails;
