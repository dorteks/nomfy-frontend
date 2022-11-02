import { Grid } from "@chakra-ui/react";
import React from "react";

type Props = { children: React.ReactNode };

const Body = (body: Props) => {
  return <Grid>{body.children}</Grid>;
};
export default Body;
