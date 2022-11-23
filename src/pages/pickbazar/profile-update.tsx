import { Box, Divider, Input, Textarea } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../../components/button";
import Layout from "../../components/createShop/Layout";
import ShopCard from "../../components/createShop/shopCard";
import Form from "../../components/form";
import Header from "../../components/Header";

const ProfileUpdate = () => {
  return (
    <Layout>
      <Header title="Profile Update" subtitle={""} report={""} />
      <Form onSubmit={() => {}}>ShopCards to be inserted inside form </Form>
      <ShopCard
        title="Avatar"
        subtitle="Upload your profile image from here"
        subtitle2="Dimension of the avatar should be 140 x 140px"
        icon={<FiUploadCloud size="30px" />}
        text1=" Upload an image or drag and drop"
        text2="PNG, JPG"
      />
      <Divider />
      <ShopCard
        title="Information"
        subtitle="Add your profile information from here"
        input1={<Input placeholder="Name" />}
        textarea={<Textarea placeholder="Description" />}
        input2={<Input placeholder="Contact Number" />}
      />
      <Button mb="40px" justifyItems="end">
        Save
      </Button>
      <Divider />
      <ShopCard
        title="Password"
        subtitle="Change your password from here"
        input1={<Input placeholder="Old Password" />}
        input2={<Input placeholder="New Password" />}
        input3={<Input placeholder="Confirm Password" />}
      />
      <Button mb="70px">Change Password</Button>
    </Layout>
  );
};

export default ProfileUpdate;
