import { Input, Textarea } from "@chakra-ui/react";
import Button from "../../../components/button";
import Header from "../../../components/Header";
import Layout from "../../../components/createShop/Layout";
import { Divider } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";
import ShopCard from "../../../components/createShop/shopCard";
import Form from "../../../components/form";

const CreateShop = () => {
  return (
    <Layout>
      <Header title="Create Shop" subtitle={""} report={""} />
      <Divider />
      <Form onSubmit={() => {}}>ShopCards to be inserted inside form </Form>
      <ShopCard
        title="Logo"
        subtitle="Upload your shop logo from here"
        icon={<FiUploadCloud size="30px" />}
        text1=" Upload an image or drag and drop"
        text2="PNG, JPG"
      />
      <Divider />
      <ShopCard
        title="Cover Image"
        subtitle="Upload your shop cover image from here"
        subtitle2="Dimension of the cover image should be 1170 x 435px"
        icon={<FiUploadCloud size="30px" />}
        text1=" Upload an image or drag and drop"
        text2="PNG, JPG"
      />
      <Divider />
      <ShopCard
        title="Basic Info"
        subtitle="Add some basic info about your shop from here"
        input1={<Input placeholder="Name" />}
        textarea={<Textarea placeholder="Description" />}
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
        input2={<Input placeholder="Contact Number" />}
        input3={<Input placeholder="Website" />}
        input4={<Button>Add New Social Profile</Button>}
      />
      <Divider />
      <Button mt="25px" mb="100px">
        Save
      </Button>
    </Layout>
  );
};

export default CreateShop;
