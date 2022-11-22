import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { CloseIcon, DownloadIcon, SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const DownloadReport = () => {
  return (
    <Box display="flex" borderRadius="3px" alignContent="center">
      <Button size="md" h="35px" leftIcon={<DownloadIcon />}>
        Download Report
      </Button>
    </Box>
  );
};

export const DisabledButton = () => {
  return (
    <Box
      display="flex"
      borderRadius="3px"
      alignContent="center"
      justifyContent="center"
      mt="10px"
    >
      <Button
        size="md"
        h="35px"
        leftIcon={<CloseIcon color="red" boxSize="12px" mr="3px" />}
      >
        Disabled
      </Button>
    </Box>
  );
};

export const CreateShopButton = () => {
  return (
    <Link href="/pickbazar/shops/create-shop">
      <Box display="flex" borderRadius="3px" alignContent="center">
        <Button size="md" h="35px" mr="40px">
          Create Shop
        </Button>
      </Box>
    </Link>
  );
};

const SearchBox = () => {
  return (
    <Box display="flex" borderRadius="3px" alignContent="center">
      <Input placeholder="Search" />
      <SearchIcon ml="-35px" mt="11px" />
    </Box>
  );
};

export default SearchBox;