import { Box } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const Body = (body: Props) => {
  return <Box>{body.children}</Box>;
};

export default Body;
