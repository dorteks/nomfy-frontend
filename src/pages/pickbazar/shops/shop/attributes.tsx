import ShopLayout from "../../../../components/createShop/ShopLayout";
import Header from "../../../../components/Header";
import AttributesTable from "../../../../containers/tables/attributesTable";

const Attributes = () => {
  return (
    <ShopLayout>
      <Header title="Attributes" subtitle="" report={""} />
      <AttributesTable />
    </ShopLayout>
  );
};

export default Attributes;
