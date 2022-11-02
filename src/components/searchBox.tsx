import { Box, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const SearchBox = () => {
  return (
    <Box justifyContent="end">
      <SearchIcon mr={4} ml={850} />
      <Input
        variant="unstyled"
        placeholder="Type your query and press enter"
        width="xl"
      ></Input>
    </Box>
  );
};

export default SearchBox;
