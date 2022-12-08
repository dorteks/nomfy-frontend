import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Link, MenuItem, Stack, Text } from "@chakra-ui/react";
import { Props } from "next/script";
import { GoLocation } from "react-icons/go";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import Button from "../button";

const ShopDetails = () => {
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
            Furniture Shop
          </Text>
          <Text
            p="3px 45px"
            justifyContent="inherit"
            fontSize="15px"
            fontWeight="hairline"
          >
            The furniture shop is the best shop around the city. This is being
            run under the store owner and our aim is to provide quality product
            and hassle free customer service.
          </Text>
        </Stack>
        <Stack mr="25px">
          <Box>
            <Box ml="20px">
              <GoLocation />
            </Box>
            <Text fontSize="15px" fontWeight="hairline" mt="10px" ml="20px">
              588 Finwood Road
            </Text>
            <Text fontSize="15px" fontWeight="hairline" ml="20px">
              {" "}
              East Dover
            </Text>
            <Text fontSize="15px" fontWeight="hairline" ml="20px">
              {" "}
              New Jersey
            </Text>
            <Text fontSize="15px" fontWeight="hairline" ml="20px">
              {" "}
              08753
            </Text>
            <Text fontSize="15px" fontWeight="hairline" mb="10px" ml="20px">
              {" "}
              USA
            </Text>
          </Box>
          <Box>
            <Box ml="20px">
              <BsTelephone />
            </Box>

            <Text fontSize="15px" fontWeight="hairline" mt="10px" ml="20px">
              {" "}
              21342121221
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
