import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = { title: React.ReactNode; subtitle: string; report: any };

const Header = ({ title, subtitle, report }: Props) => {
  return (
    <Box
      mr="10px"
      mt="10px"
      mb="50px"
      p={5}
      h="120px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      borderColor="#D6E4E5"
      borderWidth="1px"
      borderRadius="10px"
    >
      <Box>
        <Text px={3} py={3} fontWeight="bold" fontSize="28px">
          {title}
        </Text>
        <Text fontSize="12px">{subtitle}</Text>
      </Box>
      <Box>{report}</Box>
    </Box>
  );
};

export default Header;
