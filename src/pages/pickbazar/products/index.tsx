import Header from "../../../components/Header";
import Tables from "../../../containers/tables/productsTable";
import CustomLayout from "../../../components/CustomLayout";

const Products = () => {
  return (
    <CustomLayout>
      <Header title="Products" subtitle="" report={""} />
      <Tables />
    </CustomLayout>
  );
};

export default Products;
