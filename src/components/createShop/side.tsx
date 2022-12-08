import React, { useState } from "react";

import { Avatar, Box, IconButton, Text } from "@chakra-ui/react";
import { Menu, ProSidebarProvider } from "react-pro-sidebar";
import { DisabledButton } from "../SearchBox";

const Side = () => {
  return (
    <ProSidebarProvider>
      <Menu>
        <Box sx={{}}>
          <Box mb="70px" mt="15px">
            <Box display="flex" justifyContent="center" alignItems={"center"}>
              <Text fontSize="25px" fontWeight="bold">
                PICKBAZAR
              </Text>
            </Box>
          </Box>

          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                name=""
                boxSize="130px"
                src="/assets/user.png"
                borderRadius="full"
                mb="20px"
              />
            </Box>
            <Box textAlign="center">
              <Text fontSize="20px" fontWeight="bold" mb="10px">
                Ayo Ayo
              </Text>
              <Text fontSize="14px" fontWeight="hairline" mb="5px">
                customer@example.com
              </Text>
              <Text fontSize="14px" fontWeight="hairline">
                19365141641631
              </Text>
              <DisabledButton />
            </Box>
          </Box>
        </Box>
      </Menu>
    </ProSidebarProvider>
  );
};

export default Side;
