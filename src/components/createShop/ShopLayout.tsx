import Topbar from "../Topbar";
import { Grid, GridItem } from "@chakra-ui/react";
import ShopSideBar from "./ShopSideBar";
import Side from "./side";

type Props = { children: React.ReactNode };

const ShopLayout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"`}
      gridTemplateRows={"60px"}
      gridTemplateColumns={"250px 3fr"}
      h="100%"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="white" area={"header"}>
        <Topbar />
      </GridItem>
      <GridItem pl="2" bg="white" area={"nav"}>
        <ShopSideBar />
      </GridItem>
      <GridItem pl="2" bg="white" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default ShopLayout;
