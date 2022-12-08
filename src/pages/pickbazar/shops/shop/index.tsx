import { Box, Grid, GridItem } from "@chakra-ui/react";
import ShopLayout from "../../../../components/createShop/ShopLayout";
import ShopDetails from "../../../../components/displayShop/shopDetails";
import ShopImage from "../../../../components/displayShop/shopImage";
import ShopPaymentInfo from "../../../../components/displayShop/shopPaymentinfo";
import ShopTransactions from "../../../../components/displayShop/shopTransactions";

const Shop = () => {
  return (
    <ShopLayout>
      <Box mt="20px">
        <Grid templateColumns="repeat(2, 1fr)" gap={3} p={1} mr="10px">
          <GridItem w="50%" h="auto" bg="gray.200" borderRadius="10px">
            <ShopDetails />
          </GridItem>
          <GridItem
            w="145%"
            h="600px"
            bg="gray.200"
            ml="-390px"
            borderRadius="10px"
          >
            <ShopImage />
          </GridItem>{" "}
        </Grid>
      </Box>
      <Box mt="20px">
        <Grid templateColumns="repeat(2, 1fr)" gap={3} p={1} mr="10px">
          <GridItem w="100%" h="300px" bg="gray.200" borderRadius="10px">
            <ShopTransactions />
          </GridItem>{" "}
          <GridItem
            w="89%"
            h="300px"
            bg="gray.200"
            ml="20px"
            borderRadius="10px"
          >
            <ShopPaymentInfo />
          </GridItem>{" "}
        </Grid>
      </Box>
    </ShopLayout>
  );
};

export default Shop;
