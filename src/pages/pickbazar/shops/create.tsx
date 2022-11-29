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

  const { mutate, isSuccess, isError, data } = useCreateShop();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("isSuccess", isSuccess);
    console.log("isError", isError);
    console.log("data -", data);

    mutate(mutateValues);
    console.log("mutateValues - ", mutateValues);

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
          input1={<Input placeholder="Country" />}
          input2={<Input placeholder="City" />}
          input3={<Input placeholder="State" />}
          input4={<Input placeholder="Zip" />}
          textarea={<Textarea placeholder="Street Address" />}
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
