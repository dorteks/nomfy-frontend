import React from "react";
import theme from "../theme/chakraTheme";
import { ChakraProvider } from "@chakra-ui/react";

type Props = { children: React.ReactNode };

const AppProviders = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProviders;
