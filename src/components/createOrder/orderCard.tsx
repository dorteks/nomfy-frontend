import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { useBetween } from "use-between";
import ProductCard, { useSharableState } from "./productCard";
import UpdateItem from "./updateItem";

const OrderCard = () => {
  const price1 = 4.0;
  const price2 = 2.35;

  const { count } = useBetween(useSharableState);

  return (
    <Box>
      <Grid templateColumns="repeat(6, 1fr)" gap={3} p={1} mr="10px">
        <GridItem w="98%" h="10" bg="white">
          <ProductCard
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75"
            price={price1}
            name="Swwet Corn"
            count={count}
            disabled={count === 0}
          />
        </GridItem>
        <GridItem w="98%" h="10" bg="white">
          <ProductCard
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
            price={price2}
            name="Apple"
            count={count}
            disabled={count === 0}
          />
        </GridItem>{" "}
        {/* <GridItem w="98%" h="10" bg="white">
          <ProductCard
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75"
            price="2.50"
            name="Mango"
            count={count}
        
            disabled={count === 0}
          />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <ProductCard
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75"
            price="1.50"
            name="Lime"
            count={count}
       
            disabled={count === 0}
          />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <ProductCard
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75"
            price="3.50"
            name="Pears"
            count={count}
      
            disabled={count === 0}
          />
        </GridItem>{" "}
        <GridItem w="98%" h="10" bg="white">
          <ProductCard
            src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=1920&q=75"
            price="8.00"
            name="Strawberry"
            count={count}
     
            disabled={count === 0}
          />
        </GridItem>{" "} */}
      </Grid>
    </Box>
  );
};

export default OrderCard;
