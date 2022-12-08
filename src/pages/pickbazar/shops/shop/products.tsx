import ShopLayout from "../../../../components/createShop/ShopLayout";
import Header from "../../../../components/Header";
import Tables from "../../../../containers/tables/productsTable";
import { AddProductButton } from "../../../../components/SearchBox";

const Products = () => {
  return (
    <ShopLayout>
      <Header title="Products" subtitle="" report={<AddProductButton />} />
      <Tables />
    </ShopLayout>
  );
};

export default Products;
