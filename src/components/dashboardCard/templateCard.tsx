import React from "react";
import { Card, CardBody } from "@chakra-ui/card";
import { Stack, Box, Text } from "@chakra-ui/react";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon: React.ReactNode;
  value: React.ReactNode;
};

const TemplateCard = ({ title, subtitle, icon, value }: Props) => {
  return (
    <Box>
      <Card
        w="375px"
        p={5}
        ml="1px"
        backgroundColor="white"
        borderRadius="10px"
      >
        <CardBody>
          <Box
            mb="50px"
            display="flex"
            alignSelf="center"
            justifyContent="space-between"
            alignContent="center"
          >
            <Stack>
              <Text fontSize="18px">{title}</Text>
              <Text fontSize="14px" fontWeight="hairline">
                {subtitle}
              </Text>
            </Stack>
            <Stack
              mr="10px"
              mt="10px"
              alignContent="center"
              bg="white"
              p={2}
              borderColor="gray"
              borderWidth="1px"
              borderRadius="25px"
            >
              {icon}
            </Stack>
          </Box>

          <Stack mt="6" spacing="3">
            <Text color="black.600" fontSize="20px">
              {value}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default TemplateCard;
