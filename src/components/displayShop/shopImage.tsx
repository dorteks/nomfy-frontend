import { Box, Button, Divider, Image, Img } from "@chakra-ui/react";
import Link from "next/link";

const ShopImage = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        mr="10px"
        mt="10px"
      >
        <Link href="/pickbazar/shops/shop/edit">
          <Button bgColor="blue.300"> Edit Shop</Button>
        </Link>
      </Box>
      <Divider color="white" />
      <Box bgColor="white" mt="25px" h="450px">
        <Image
          src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F883%2FUntitled-6.jpg&w=1920&q=75"
          h="full"
        />
      </Box>
    </Box>
  );
};

export default ShopImage;
