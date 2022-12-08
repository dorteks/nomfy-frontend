import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import ShopLayout from "../../../../components/createShop/ShopLayout";

const Shop = () => {
  return (
    <ShopLayout>
      <h1>Shop</h1>
      <Link href="/edit">
        <Button>Edit Shop</Button>
      </Link>
    </ShopLayout>
  );
};

export default Shop;
