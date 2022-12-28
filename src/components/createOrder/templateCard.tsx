import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Stack, Box, Image, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { useGetAllProducts } from "../../app/api/products/product.query";

const TemplateCard = () => {
  const Add = 0;
  const price = 1.6;
  const priceDP = price.toFixed(2);

  const [count, setCount] = useState(Add);
  const [amount, setAmount] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    setAmount(amount + price);
    setItem(item + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
    setAmount(amount - price);
    setItem(item - 1);
  };

  return (
    <>
      <Box>
        <Card
          w="260px"
          p={5}
          ml="1px"
          backgroundColor="white"
          borderRadius="10px"
        >
          <CardBody>
            <Image
              src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
              alt="apples"
              borderRadius="lg"
              boxSize="225px"
            />
            <Stack mt="6" spacing="3">
              <Text color="black.600" fontSize="16px">
                $ {priceDP}
              </Text>
              <Text color="gray.400" fontSize="15px" fontWeight="hairline">
                Apple
              </Text>
            </Stack>
          </CardBody>
          <CardFooter
            display="flex"
            alignSelf="center"
            justifyContent="space-between"
            alignContent="center"
          >
            <Box
              mt="10px"
              mr="8px"
              color="gray.400"
              bgColor="gray.200"
              width="200px"
              height="40px"
              borderRadius="5px"
            >
              <Stack direction="row" spacing={12}>
                <Box>
                  <Button onClick={handleSubtract} disabled={count === 0}>
                    <MinusIcon />
                  </Button>
                </Box>
                <Box pt="8px">{count}</Box>
                <Box>
                  <Button onClick={handleAdd}>
                    <AddIcon />
                  </Button>
                </Box>
              </Stack>
            </Box>
          </CardFooter>
        </Card>
      </Box>
      {/* <Box
        width="130px"
        h="110px"
        bgColor="gray.300"
        borderRadius="10px"
        position="fixed"
        mt="50px"
        display="flex"
        justifySelf="end"
        alignSelf="end"
      >
        <Stack direction="column">
          <Stack direction="row" mb="5px" p="10px">
            <BsClipboardCheck />
            <Text>{item} Items</Text>
          </Stack>
          <Box pl="25px">
            <Button>$ {amount}</Button>
          </Box>
        </Stack>
      </Box> */}
    </>
  );
};

export default TemplateCard;
