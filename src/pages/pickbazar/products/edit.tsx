import { Box, Divider, Input, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useUpdateProduct } from "../../../app/api/products/product.mutation";
import Button from "../../../components/button";
import ShopCard from "../../../components/createShop/shopCard";
import CustomLayout from "../../../components/CustomLayout";
import Form from "../../../components/form";
import Header from "../../../components/Header";

const EditProduct = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [featuredImage, setFeaturedImage] = React.useState("");
  const [gallery, serGallery] = React.useState("");
  const [unit, setUnit] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [salesPrice, setSalesPrice] = React.useState("");
  const [sku, setSKU] = React.useState("");

  const mutateValues = {
    name,
    description,
    featuredImage,
    gallery,
    unit,
    price,
    quantity,
    salesPrice,
    sku,
  };

  // data is undefined??
  const { mutate, isSuccess, isError, data } = useUpdateProduct();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("isSuccess", isSuccess);
    console.log("isError", isError);
    console.log("data", data);

    mutate(mutateValues);
  };

  const handleSelectFile = (event: any) => {
    setFeaturedImage(event.target.files[0]);
    console.log("event-", event.target.files[0]);
  };

  return (
    <CustomLayout>
      <Header title="Edit Product" subtitle={""} report={""} />
      <Divider />
      <Box bg="white" mr="10px" borderRadius="10px">
        <form onSubmit={handleSubmit}>
          Products card to be inserted inside form{" "}
          <ShopCard
            title="Featured Image"
            subtitle="Upload your product image here"
            input1={<Input type="file" onChange={handleSelectFile} />}
            icon={<FiUploadCloud size="30px" />}
            text1=" Upload an image or drag and drop"
            text2="PNG, JPG"
          />
          <Divider />
          <ShopCard
            title="Gallery"
            subtitle="Upload your product image gallery here"
            subtitle2="Dimension of the cover image should be 1170 x 435px"
            input1={<Input type="file" onChange={handleSelectFile} />}
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
            input1={
              <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            }
            input2={<Input placeholder="Slug" />}
            input3={
              <Input
                placeholder="Unit"
                onChange={(e) => setUnit(e.target.value)}
              />
            }
            input4={
              <Textarea
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            }
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
            input1={
              <Input
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            }
            input2={
              <Input
                placeholder="Sale Price"
                onChange={(e) => setSalesPrice(e.target.value)}
              />
            }
            input3={
              <Input
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            }
            input4={
              <Input
                placeholder="SKU*"
                onChange={(e) => setSKU(e.target.value)}
              />
            }
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
            <Button type="submit" mt="10px" mb="60px">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </CustomLayout>
  );
};

export default EditProduct;
