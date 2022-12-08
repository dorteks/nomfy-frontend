import {
  BsBox,
  BsBasket3,
  BsClipboardData,
  BsCollection,
  BsGift,
  BsTag,
  BsHouse,
  BsReceipt,
  BsShop,
  BsTruck,
  BsVectorPen,
} from "react-icons/bs";
import {
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdReviews, MdOutlineGroups } from "react-icons/md";
import { Avatar, Box, IconButton, Text } from "@chakra-ui/react";
import { RiRefund2Line, RiListSettingsLine } from "react-icons/ri";
import { Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import Link from "next/link";

type Props = {
  title: React.ReactNode;
  icon: any;
  selected: any;
  setSelected: any;
  href: string;
};

const ShopSideBar = () => {
  const [isCollapsed, setIsCollapesed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, icon, setSelected, selected, href }: Props) => {
    return (
      <Link href={href}>
        <MenuItem
          active={selected === title}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Text fontSize="17px" fontWeight="hairline">
            {title}
          </Text>
        </MenuItem>
      </Link>
    );
  };

  return (
    <ProSidebarProvider>
      <Menu>
        <Box sx={{}}>
          {/* {!isCollapsed && "Profile here"} */}

          <Box mb="30px" mt="15px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Text fontSize="25px" fontWeight="bold">
                PICKBAZAR
              </Text>
              <IconButton aria-label={""} mr="15px">
                <HamburgerIcon />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Item
              title="Dashboard"
              icon={<HamburgerIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop"
            />

            <Item
              title="Attributes"
              icon={<RiListSettingsLine />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/attributes"
            />

            <Item
              title="Products"
              icon={<BsBox />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/products"
            />

            <Item
              title="Authors"
              icon={<BsVectorPen />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/authors"
            />
            <Item
              title="Manufacturers"
              icon={<HamburgerIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/manufacturers"
            />

            <Item
              title="Orders"
              icon={<BsBasket3 />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/orders"
            />
            <Item
              title="Refunds"
              icon={<RiRefund2Line />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/refunds"
            />
            <Item
              title="Staffs"
              icon={<FiUsers />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/users"
            />

            <Item
              title="Withdrawals"
              icon={<GiTakeMyMoney />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/withdrawals"
            />
            <Item
              title="Reviews"
              icon={<MdReviews />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/reviews"
            />
            <Item
              title="Questions"
              icon={<QuestionOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops/shop/questions"
            />
          </Box>
        </Box>
      </Menu>
    </ProSidebarProvider>
  );
};

export default ShopSideBar;
