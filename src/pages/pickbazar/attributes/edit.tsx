import { Box, Divider, Input, Stack, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import Button from "../../../components/button";
import ShopCard from "../../../components/createShop/shopCard";
import CustomLayout from "../../../components/CustomLayout";
import Form from "../../../components/form";
import Header from "../../../components/Header";

const EditAttribute = () => {
  return (
    <CustomLayout>
      <Header title="Edit Attribute" subtitle={""} report={""} />
      <Divider />
      <Box bg="white" mr="10px" borderRadius="10px">
        <Form onSubmit={() => {}}>
          Products card to be inserted inside form{" "}
        </Form>

        <ShopCard
          title="Attribute"
          subtitle="Update your attribute name and necessary information from here"
          input1={<Input placeholder="Name - Color" />}
        />
        <Divider />
        <ShopCard
          title="Attribute Values"
          subtitle="Update your attribute value and necessary information from here"
          input1={
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              mb="20px"
            >
              <Input placeholder="Value - Red" mr="30px" />
              <Input placeholder="Meta - #ce1f6a" mr="60px" />
              <Button w="200px"> Remove</Button>
            </Box>
          }
          input2={
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              pb={6}
            >
              <Input placeholder="Value - blue" mr="30px" />
              <Input placeholder="Meta - #344fa1" mr="60px" />
              <Button w="200px">Remove</Button>
            </Box>
          }
          input3={
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
            >
              <Input placeholder="Value - White" mr="30px" />
              <Input placeholder="Meta - #e1e5ea" mr="60px" />
              <Button w="200px">Remove</Button>
            </Box>
          }
        />
        <Button ml="10px" mb="30px">
          Add Value
        </Button>

        <Divider />
        <Box bg="white" mb="10px" borderRadius="10px">
          <Link href="/pickbazar/products">
            <Button mr="10px" mt="10px" ml="10px" mb="60px">
              Back
            </Button>
          </Link>
          <Button mt="10px" mb="60px">
            Update Attribute
          </Button>
        </Box>
      </Box>
    </CustomLayout>
  );
};

export default EditAttribute;
