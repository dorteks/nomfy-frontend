import { Stack } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const Sidebar = (sidebar: Props) => {
  return (
    <Stack py={5} px={6} mt="2px">
      {sidebar.children}
    </Stack>
  );
};

export default Sidebar;
