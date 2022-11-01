import { Box } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const Content = (content: Props) => {
  return <Box>{content.children}</Box>;
};
export default Content;
