import { Grid, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import CustomerLayout from "../../layouts/customer";

const HomePage: NextPage = () => {
  return (
    <>
      <CustomerLayout>
        <>Customer Home Page</>{" "}
      </CustomerLayout>
    </>
  );
};

export default HomePage;
