import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({ onSubmit, children }: Props) => (
  <Box w="full" maxW="sm">
    <form onSubmit={onSubmit}>{children} </form>
  </Box>
);

export default Form;
