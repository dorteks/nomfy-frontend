import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

type Props = { children: React.ReactNode };

const CustomLayout = ({ children }: Props) => {
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
        <Sidebar />
      </GridItem>
      <GridItem pl="2" bg="#EEEEEE" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default CustomLayout;
