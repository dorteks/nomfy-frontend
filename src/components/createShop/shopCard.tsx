import React from "react";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Stack, Text } from "@chakra-ui/react";

type Props = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  subtitle2?: React.ReactNode;
  icon?: React.ReactNode;
  text1?: React.ReactNode;
  text2?: React.ReactNode;
  input1?: React.ReactNode;
  input2?: React.ReactNode;
  input3?: React.ReactNode;
  input4?: React.ReactNode;
  input5?: React.ReactNode;
  input6?: React.ReactNode;
  input7?: React.ReactNode;
  input8?: React.ReactNode;
  textarea?: React.ReactNode;
};

const ShopCard = ({
  title,
  subtitle,
  subtitle2,
  icon,
  text1,
  text2,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  textarea,
}: Props) => {
  return (
    <Box>
      <Card
        w="100%"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        p={5}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack p="32px 20px 32px 0px" w="30%">
          <CardBody>
            <Text mb="8px">{title}</Text>
            <Text textColor="gray.500" fontWeight="hairline" fontSize="14px">
              {subtitle}
            </Text>
            <Text textColor="gray.500" fontWeight="hairline" fontSize="14px">
              {subtitle2}
            </Text>
          </CardBody>
        </Stack>
        <Stack
          p="32px"
          w="50%"
          h="100%"
          borderColor="black"
          borderStyle="dashed"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {icon}
          {input1}
          {input2}
          {input3}
          {input4}
          {input5}
          {input6}
          {input7}
          {input8}
          {textarea}
          {<Box />}
          <Text textColor="gray.500" fontWeight="hairline" fontSize="14px">
            {text1}
          </Text>
          <Text textColor="gray.500" fontWeight="hairline" fontSize="14px">
            {text2}
          </Text>
        </Stack>
      </Card>
    </Box>
  );
};

export default ShopCard;
