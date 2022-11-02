import TableData from "../../components/tables/tabledata";
import TableHead from "../../components/tables/tablehead";
import { CheckIcon, SmallCloseIcon, ViewIcon } from "@chakra-ui/icons";

const ShopTable = () => {
  return (
    <>
      <TableHead>
        <h1>Logo</h1>
        <h1>Name</h1>
        <h1>Owner Name</h1>
        <h1>Products</h1>
        <h1>Orders</h1>
        <h1>Status</h1>
        <h1>Actions</h1>
      </TableHead>
      <TableData>
        <h1>Logo</h1>
        <h1>Furniture Shop</h1>
        <h1>Store Owner</h1>
        <h1>55</h1>
        <h1>8</h1>
        <h1>inactive</h1>
        <h1>
          <CheckIcon mr={8} />
          <ViewIcon />
        </h1>
      </TableData>
      <TableData>
        <h1>Logo</h1>
        <h1>Clothing Shop</h1>
        <h1>Store Owner</h1>
        <h1>64</h1>
        <h1>4</h1>
        <h1>inactive</h1>
        <h1>
          <SmallCloseIcon mr={8} />
          <ViewIcon />
        </h1>
      </TableData>
      <TableData>
        <h1>Logo</h1>
        <h1>Bags Shop</h1>
        <h1>Store Owner</h1>
        <h1>15</h1>
        <h1>7</h1>
        <h1>active</h1>
        <h1>
          <CheckIcon mr={8} />
          <ViewIcon />
        </h1>
      </TableData>
    </>
  );
};

export default ShopTable;
