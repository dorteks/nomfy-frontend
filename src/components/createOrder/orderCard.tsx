import TemplateCard from "./templateCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const OrderCard = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(6, 1fr)" gap={3} p={1} mr="10px">
        <GridItem w="98%" h="10" bg="white">
          <TemplateCard />
        </GridItem>
        <GridItem w="98%" h="10" bg="white">
          <TemplateCard />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <TemplateCard />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <TemplateCard />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <TemplateCard />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <TemplateCard />
        </GridItem>{" "}
      </Grid>
    </Box>
  );
};

export default OrderCard;
