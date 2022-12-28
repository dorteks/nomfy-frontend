import { Stack, Button, Text, Box } from "@chakra-ui/react";
import { BsClipboardCheck } from "react-icons/bs";
import { useBetween } from "use-between";
import { useSharableState } from "./productCard";

const UpdateItem = () => {
  const { item, amount } = useBetween(useSharableState);

  return (
    <Box
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
          <Text> {item} Items</Text>
        </Stack>
        <Box pl="25px">
          <Button>$ {amount}</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default UpdateItem;
