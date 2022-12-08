import { Box, Divider, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useUpdateProduct } from "../../../app/api/products/product.mutation";
import { useUpdateShop } from "../../../app/api/shops/shop.mutation";
import Button from "../../../components/button";
import Layout from "../../../components/createShop/Layout";
import ShopCard from "../../../components/createShop/shopCard";
import CustomLayout from "../../../components/CustomLayout";
import Form from "../../../components/form";
import Header from "../../../components/Header";

const EditShop = () => {
  const [name, setName] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [phoneNumber, setPhonenumber] = React.useState("");
  const [facebookLink, setFacebookLink] = React.useState("");
  const [instagramLink, setInstagramLink] = React.useState("");
  const [twitterLink, setTwitterLink] = React.useState("");
  const [youtubeLink, setYoutubeLink] = React.useState("");

  const mutateValues = {
    name,
    logo,
    description,
    website,
    phoneNumber,
    facebookLink,
    instagramLink,
    twitterLink,
    youtubeLink,
  };

  const router = useRouter();

  const { mutate, isSuccess, isError, data } = useUpdateShop();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("isSuccess", isSuccess);
    console.log("isError", isError);
    console.log("data -", data);

    mutate(mutateValues);
    console.log("mutateValues - ", mutateValues);

    if (isSuccess) router.push("/shops");

    // upload image to backend
    const fd = new FormData();
    fd.append("image", logo);
    axios.post("products/create", fd).then((res) => console.log(res));
    console.log("image uploaded here");
    console.log(fd.get("image"));
  };

  React.useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) router.push("/shops");
  }, []);

  const handleSelectFile = (e: any) => {
    setLogo(e.target.files[0]);
    console.log("event -", e.target.files[0]);
  };

  return (
    <Layout>
      <Header
        title="Your shop is not activated yet. You can't proceed further operations"
        subtitle={""}
        report={""}
      />
      <Divider />
      <form onSubmit={handleSubmit}>
        <ShopCard
          title="Logo"
          subtitle="Upload your shop logo from here"
          input1={<Input type="file" onChange={handleSelectFile} />}
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
          label1={undefined}
        />
        <Divider />
        <ShopCard
          title="Cover Image"
          subtitle="Upload your shop cover image from here"
          subtitle2="Dimension of the cover image should be 1170 x 435px"
          input1={<Input type="file" onChange={handleSelectFile} />}
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
        />
        <Divider />
        <ShopCard
          title="Basic Info"
          subtitle="Add some basic info about your shop from here"
          input1={
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          }
          textarea={
            <Textarea
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          }
        />
        <Divider />
        <ShopCard
          title="Payment Info"
          subtitle="Add your payment information from here"
          input1={<Input placeholder="Account Holder Name" />}
          input2={<Input placeholder="Account Holder Email" />}
          input3={<Input placeholder="Bank Name" />}
          input4={<Input placeholder="Account Number" />}
        />

        <Divider />
        <ShopCard
          title="Shop Address"
          subtitle="Add your physical shop address from here"
          label1={<>Country</>}
          input1={
            <Input
            // onChange={(e) => setCountry(e.target.value)}
            />
          }
          label2={<>City</>}
          input2={
            <Input
            // onChange={(e) => setCity(e.target.value)}
            />
          }
          label3={<>State</>}
          input3={
            <Input
            // onChange={(e) => setState(e.target.value)}
            />
          }
          label4={<>ZIP</>}
          input4={
            <Input
            // onChange={(e) => setZipCode(e.target.value)}
            />
          }
          label9={<>Street Address</>}
          textarea={
            <Textarea
            // onChange={(e) => setStreetAddress(e.target.value)}
            />
          }
        />

        <Divider />
        <ShopCard
          title="Shop Settings"
          subtitle="Add your shop settings information from here"
          label1={<>Set Locaton from Map</>}
          input1={<Input />}
          label2={<>Contact Number</>}
          input2={<Input onChange={(e) => setPhonenumber(e.target.value)} />}
          label3={<>Website</>}
          input3={<Input onChange={(e) => setWebsite(e.target.value)} />}
          input4={<Button>Add New Social Profile</Button>}
        />
        <Divider />

        <Button type="submit" mt="25px" mb="100px">
          Update
        </Button>
      </form>
    </Layout>
  );
};

export default EditShop;
