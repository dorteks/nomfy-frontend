import { Input, Select, Textarea } from "@chakra-ui/react";
import Button from "../../../components/button";
import Header from "../../../components/Header";
import Layout from "../../../components/createShop/Layout";
import { Divider } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";
import ShopCard from "../../../components/createShop/shopCard";
import Form from "../../../components/form";
import React from "react";
import { useRouter } from "next/router";
import { useCreateGroup } from "../../../app/api/groups/group.mutation";

const CreateProductGroup = () => {
  const [name, setName] = React.useState("");
  const [icon, setIcon] = React.useState("");

  const mutateValues = {
    name,
    icon,
  };

  // const router = useRouter();

  const { mutate, isSuccess, isError, data, error } = useCreateGroup();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("isSuccess", isSuccess);
    console.log("isError", isError);
    console.log("data -", data);
    console.log(error);

    mutate(mutateValues);
    console.log("mutateValues - ", mutateValues);
  };

  // React.useEffect(() => {
  //   if (!isSuccess) return;
  //   if (isSuccess) router.push("/groups");
  // }, []);

  return (
    <Layout>
      <Header title="Create New Group" subtitle={""} report={""} />
      <Divider />
      <form onSubmit={handleSubmit}>
        ShopCards to be inserted inside form
        <Divider />
        <ShopCard
          title="Description"
          subtitle="Add type-description-help-text"
          input1={
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          }
          input2={
            <Input
              placeholder="Select Icon"
              onChange={(e) => setIcon(e.target.value)}
            />
          }
        />
        <Divider />
        <ShopCard
          title="Select Group Related Settings"
          subtitle="Please make sure you selected the necessary settings"
          input1={
            <Input placeholder="Select layout...... create diff lauouts to select from" />
          }
          input2={
            <Input placeholder="Select Product Card.......... different styles of prodct cards" />
          }
        />
        <Divider />
        <ShopCard
          title="Promotional Sliders"
          subtitle="Upload Promotional Sliders"
          input1={<Input type="file" />}
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
        />
        <Divider />
        <ShopCard
          title="Banner"
          subtitle="Add your banner image with title and description from here. Dimension of the banner should be 1920 x 1080 px for full screen banner and 1500 x 450 px for small banner"
          input1={<Input placeholder="Title" />}
          input2={<Textarea placeholder="Description" />}
        />
        <ShopCard
          input3={<Input type="file" />}
          icon={<FiUploadCloud size="30px" />}
          text1=" Upload an image or drag and drop"
          text2="PNG, JPG"
          title={undefined}
          subtitle={undefined}
        />
        {
          <Button ml="900px" mb="15px">
            Add Banner
          </Button>
        }
        <Divider />
        <Button type="submit" mt="25px" mb="100px" ml="1150px">
          Add Group
        </Button>
      </form>
    </Layout>
  );
};

export default CreateProductGroup;
