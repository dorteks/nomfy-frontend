import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Stack, Box, Image, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { useBetween } from "use-between";

type Props = {
  price: number;
  name: string;
  src: string;
  count: number;

  disabled: boolean;
};

export const useSharableState = () => {
  const Add = 0;
  const [count, setCount] = useState(Add);
  const [item, setItem] = useState(0);
  const [amount, setAmount] = useState(0);
  console.log(count, ">>>>>newcount");

  const price = 4.0;

  const handleSubtract = () => {
    setCount(count - 1);
    setItem(item - 1);
    setAmount(amount - price);
  };
  const handleAdd = () => {
    setCount(count + 1);
    setItem(item + 1);
    setAmount(amount + price);
  };

  return {
    count,
    item,
    amount,
    setItem,
    handleAdd,
    handleSubtract,
  };
};

const ProductCard = ({ price, name, src, disabled, count }: Props) => {
  const { handleAdd, handleSubtract } = useBetween(useSharableState);

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
            <Image src={src} alt={name} borderRadius="lg" boxSize="225px" />
            <Stack mt="6" spacing="3">
              <Text color="black.600" fontSize="16px">
                $ {price}
              </Text>
              <Text color="gray.400" fontSize="15px" fontWeight="hairline">
                {name}
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
                  <Button onClick={handleSubtract} disabled={disabled}>
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
    </>
  );
};

export default ProductCard;
