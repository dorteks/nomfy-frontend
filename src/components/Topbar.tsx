import React from "react";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { BellIcon, MoonIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import ProfileMenu from "./Profile-Menu";

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="60px"
    >
      <Box display="flex" borderRadius="3px" alignContent="center">
        <Input placeholder="Search" />
        <SearchIcon ml="-35px" mt="11px" />
      </Box>
      <Box display="flex" borderRadius="3px" alignContent="center" mr="10px">
        <Box mr="5px" p={2}>
          <IconButton aria-label={""} ml="5px" borderRadius="50%">
            <MoonIcon />
          </IconButton>
          <IconButton aria-label={""} ml="5px" borderRadius="50%">
            <BellIcon />
          </IconButton>
          <IconButton aria-label={""} ml="5px" borderRadius="50%">
            <SettingsIcon />
          </IconButton>
        </Box>
        <ProfileMenu ml="5px" boxSize="45px" />
      </Box>
    </Box>
  );
};

export default Topbar;
