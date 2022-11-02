import { Stack } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const BaseAppBar = ({ children }: Props) => (
  <Stack
    px={8}
    py={8}
    justifyContent="space-between"
    alignItems="center"
    direction="row"
    h="80px"
    as="header"
    borderWidth="1px"
  >
    {children}
  </Stack>
);
export default BaseAppBar;
