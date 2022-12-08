import { Input, Textarea } from "@chakra-ui/react";
import Button from "../../../components/button";
import Header from "../../../components/Header";
import Layout from "../../../components/createShop/Layout";
import { Divider } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";
import ShopCard from "../../../components/createShop/shopCard";
import Form from "../../../components/form";
import React from "react";
import { useCreateShop } from "../../../app/api/shops/shop.mutation";
import { useRouter } from "next/router";
import axios from "axios";
import { useCreateAddress } from "../../../app/api/address/address.mutation";

const CreateShop = () => {
  const [name, setName] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [phoneNumber, setPhonenumber] = React.useState("");
  const [facebookLink, setFacebookLink] = React.useState("");
  const [instagramLink, setInstagramLink] = React.useState("");
  const [twitterLink, setTwitterLink] = React.useState("");
  const [youtubeLink, setYoutubeLink] = React.useState("");

  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [streetAddress, setStreetAddress] = React.useState("");

  const shopValues = {
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

  const addressValues = {
    country,
    state,
    city,
    zipCode,
    streetAddress,
  };

  const router = useRouter();

  const { mutate, isSuccess, isError, data } = useCreateShop();
  const {
    mutate: mutateAddress,
    isSuccess: isSuccessAddress,
    isError: isErrorAddress,
    data: dataAddress,
  } = useCreateAddress();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("isSuccess", isSuccess);
    console.log("isError", isError);
    console.log("data -", data);

    console.log("isSuccess", isSuccessAddress);
    console.log("isError", isErrorAddress);
    console.log("data -", dataAddress);

    mutate(shopValues);
    console.log("shopValues - ", shopValues);

    mutateAddress(addressValues);
    console.log("addressValues - ", addressValues);

    // upload image to backend
    const fd = new FormData();
    fd.append("image", logo);
    // axios.post("shops/create", fd).then((res) => console.log(res));
    console.log("image uploaded here");
    console.log(fd.get("image"));
  };

  React.useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) router.push("/pickbazar/shops");
  }, [isSuccess, router]);

  const handleSelectFile = (e: any) => {
    setLogo(e.target.files[0]);
    console.log("event -", e.target.files[0]);
  };

  return (
    <Layout>
      <Header title="Create Shop" subtitle={""} report={""} />
      <Divider />
      <form onSubmit={handleSubmit}>
        ShopCards to be inserted inside form
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
        {/* <ShopCard
          title="Cover Image"
          subtitle="Upload your shop cover image from here"
          subtitle2="Dimension of the cover image should be 1170 x 435px"
          input1={<Input type="file" onChange={handleSelectFile} />}
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
        /> */}
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
          label1={undefined}
        />
        <Divider />
        <ShopCard
          title="Payment Info"
          subtitle="Add your payment information from here"
          input1={<Input placeholder="Account Holder Name" />}
          input2={<Input placeholder="Account Holder Email" />}
          input3={<Input placeholder="Bank Name" />}
          input4={<Input placeholder="Account Number" />}
          label1={undefined}
        />
        <Divider />
        <ShopCard
          title="Shop Address"
          subtitle="Add your physical shop address from here"
          input1={
            <Input
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
            />
          }
          input2={
            <Input
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          }
          input3={
            <Input
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
            />
          }
          input4={
            <Input
              placeholder="ZipCode"
              onChange={(e) => setZipCode(e.target.value)}
            />
          }
          textarea={
            <Textarea
              placeholder="Street Address"
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          }
          label1={undefined}
        />
        <Divider />
        <ShopCard
          title="Shop Settings"
          subtitle="Add your shop settings information from here"
          input1={<Input placeholder="Set location from map" />}
          input2={
            <Input
              placeholder="Contact Number"
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          }
          input3={
            <Input
              placeholder="Website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          }
          input4={<Button>Add New Social Profile</Button>}
          label1={undefined}
        />
        <Divider />
        <Button type="submit" mt="25px" mb="100px">
          Add Shop
        </Button>
      </form>
    </Layout>
  );
};

export default CreateShop;
