import { Box, Divider, Stack, Text } from "@chakra-ui/react";

const ShopPaymentInfo = () => {
  return (
    <Box mt="20px" pl="30px">
      <Stack mb="25px">
        <Text fontSize="14px" fontWeight="hairline">
          Registered Since
        </Text>
        <Text fontSize="14px">June 27, 2021</Text>
      </Stack>

      <Stack>
        <Text fontSize="18px" mb="15px">
          Payment Information
        </Text>
        <Text fontSize="14px" fontWeight="hairline">
          Name:
        </Text>
        <Text fontSize="14px" fontWeight="hairline">
          Email:
        </Text>
        <Text fontSize="14px" fontWeight="hairline">
          Bank:
        </Text>
        <Text fontSize="14px" fontWeight="hairline">
          Account No.:
        </Text>
      </Stack>
    </Box>
  );
};

export default ShopPaymentInfo;
