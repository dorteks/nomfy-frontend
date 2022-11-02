import { Box, Stack } from "@chakra-ui/react";
import Appbar from "./appbar";
import Body from "./body";
import Content from "./content";
import React from "react";
import Sidebar from "./sidebar";
import Link from "next/link";

type Props = { children: React.ReactNode };

const CustomerLayout = ({ children }: Props) => {
  return (
    <Stack>
      <Box>
        <Content>
          <Appbar />
        </Content>
      </Box>
      <Body>
        <Stack direction="row">
          <Box>
            <Sidebar>
              <h1>Dashboard</h1>
              <Link href="/home/shops">
                <h1>Shops</h1>
              </Link>
              <Link href="/home/my-shops">
                <h1>My Shops</h1>
              </Link>
              <Link href="/home/products">
                <h1>Products</h1>
              </Link>
              <Link href="/home/attributes">
                <h1>Attributes</h1>
              </Link>
              <Link href="/home/groups">
                <h1>Groups</h1>
              </Link>
              <Link href="/home/categories">
                <h1>Categoreis</h1>
              </Link>
              <Link href="/home/tags">
                <h1>Tags</h1>
              </Link>
              <Link href="/home/manufacturers">
                <h1>Manufactures</h1>
              </Link>
              <Link href="/home/authors">
                <h1>Authors</h1>
              </Link>
              <Link href="/home/orders">
                <h1>Orders</h1>
              </Link>
              <Link href="/home/order-status">
                <h1>Order Status</h1>
              </Link>
              <h1>Create Order</h1>
              <h1>Users</h1>
              <h1>Coupons</h1>
              <h1>Taxes</h1>
              <h1>Shippings</h1>
              <h1>Withdrawals</h1>
              <h1>Refunds</h1>
              <h1>Questions</h1>
              <h1>Reviews</h1>
              <h1>Settings</h1>
            </Sidebar>
          </Box>
          <Box>
            {" "}
            <React.Fragment>{children}</React.Fragment>
          </Box>
        </Stack>
      </Body>
    </Stack>
  );
};
export default CustomerLayout;
