import Header from "../../../components/Header";
import Tables from "../../../containers/tables/productsTable";
import CustomLayout from "../../../components/CustomLayout";
import { AddProductButton } from "../../../components/SearchBox";

const Products = () => {
  return (
    <CustomLayout>
      <Header title="Products" subtitle="" report={<AddProductButton />} />
      <Tables />
    </CustomLayout>
  );
};

export default Products;
