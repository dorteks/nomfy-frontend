import { Box, Divider, Input, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../../../components/button";
import ShopCard from "../../../components/createShop/shopCard";
import CustomLayout from "../../../components/CustomLayout";
import Form from "../../../components/form";
import Header from "../../../components/Header";

const EditProduct = () => {
  return (
    <CustomLayout>
      <Header title="Edit Product" subtitle={""} report={""} />
      <Divider />
      <Box bg="white" mr="10px" borderRadius="10px">
        <Form onSubmit={() => {}}>
          Products card to be inserted inside form{" "}
        </Form>
        <ShopCard
          title="Featured Image"
          subtitle="Upload your product image here"
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
        />
        <Divider />
        <ShopCard
          title="Gallery"
          subtitle="Upload your product image gallery here"
          subtitle2="Dimension of the cover image should be 1170 x 435px"
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
        />
        <Divider />
        <ShopCard
          title="Groups & Categories"
          subtitle="Select product group and categories from here"
          input1={<Input placeholder="Group select..." />}
          input2={<Input placeholder="Categories select..." />}
          input3={<Input placeholder="Authors select..." />}
          input4={<Input placeholder="Manufacturers select..." />}
          input5={<Input placeholder="Tags select..." />}
        />
        <Divider />
        <ShopCard
          title="Description"
          subtitle="Select product type from here"
          input1={<Input placeholder="Name" />}
          input2={<Input placeholder="Slug" />}
          input3={<Input placeholder="Unit" />}
          input4={<Textarea placeholder="Description" />}
          input5={<Input placeholder="Status select..." />}
        />
        <ShopCard
          title="Product Type"
          subtitle="Select product group and categories from here"
          input1={<Input placeholder="Product type select..." />}
        />
        <Divider />
        <ShopCard
          title="Simple Product Information"
          subtitle="Edit your simple product description and necessary information from here"
          input1={<Input placeholder="Price" />}
          input2={<Input placeholder="Sale Price" />}
          input3={<Input placeholder="Quantity" />}
          input4={<Input placeholder="SKU*" />}
          input5={<Input placeholder="Width" />}
          input6={<Input placeholder="Height" />}
          input7={<Input placeholder="Length" />}
          input8={<Input placeholder="select checkbox ......." />}
        />
        <Divider />
        <Box bg="white" mb="10px" borderRadius="10px">
          <Link href="/pickbazar/products">
            <Button mr="10px" mt="10px" ml="10px" mb="60px">
              Back
            </Button>
          </Link>
          <Button mt="10px" mb="60px">
            Update Product
          </Button>
        </Box>
      </Box>
    </CustomLayout>
  );
};

export default EditProduct;
