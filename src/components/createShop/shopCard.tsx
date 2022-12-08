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
  label1?: React.ReactNode;
  input1?: React.ReactNode;
  label2?: React.ReactNode;
  input2?: React.ReactNode;
  label3?: React.ReactNode;
  input3?: React.ReactNode;
  label4?: React.ReactNode;
  input4?: React.ReactNode;
  label5?: React.ReactNode;
  input5?: React.ReactNode;
  label6?: React.ReactNode;
  input6?: React.ReactNode;
  label7?: React.ReactNode;
  input7?: React.ReactNode;
  label8?: React.ReactNode;
  input8?: React.ReactNode;
  label9?: React.ReactNode;
  textarea?: React.ReactNode;
};

const ShopCard = ({
  title,
  subtitle,
  subtitle2,
  icon,
  text1,
  text2,
  label1,
  input1,
  label2,
  input2,
  label3,
  input3,
  label4,
  input4,
  label5,
  input5,
  label6,
  input6,
  label7,
  input7,
  label8,
  input8,
  label9,
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
          // display="flex"
          // justifyContent="center"
          // alignItems="center"
        >
          <Stack display="flex" justifyContent="center" alignItems="center">
            {icon}
          </Stack>

          <Text>{label1}</Text>

          {input1}
          <Text>{label2}</Text>

          {input2}
          <Text>{label3}</Text>
          {input3}
          <Text>{label4}</Text>
          {input4}
          <Text>{label5}</Text>
          {input5}
          <Text>{label6}</Text>
          {input6}
          <Text>{label7}</Text>
          {input7}
          <Text>{label8}</Text>
          {input8}
          <Text>{label9}</Text>
          {textarea}
          {<Box />}
          <Stack display="flex" justifyContent="center" alignItems="center">
            <Text textColor="gray.500" fontWeight="hairline" fontSize="14px">
              {text1}
            </Text>
            <Text textColor="gray.500" fontWeight="hairline" fontSize="14px">
              {text2}
            </Text>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default ShopCard;
