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

const Sidebar = () => {
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

          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                name=""
                boxSize="100px"
                src="/assets/user.png"
                borderRadius="full"
                mb="10px"
              />
            </Box>
            <Box textAlign="center">
              <Text fontSize="20px" fontWeight="bold">
                Ayo Ayo
              </Text>
              <Text fontSize="14px">Dorteks</Text>
            </Box>
          </Box>

          <Box>
            <Item
              title="Dashboard"
              icon={<HamburgerIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar"
            />
            <Item
              title="Shops"
              icon={<BsHouse />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shops"
            />

            <Item
              title="My Shops"
              icon={<BsShop />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/my-shops"
            />
            <Item
              title="Products"
              icon={<BsBox />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/products"
            />
            <Item
              title="Attributes"
              icon={<RiListSettingsLine />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/attributes"
            />
            <Item
              title="Groups"
              icon={<MdOutlineGroups />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/groups"
            />
            <Item
              title="Categories"
              icon={<BsCollection />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/categories"
            />
            <Item
              title="Tags"
              icon={<BsTag />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/tags"
            />
            <Item
              title="Manufacturers"
              icon={<HamburgerIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/manufacturers"
            />
            <Item
              title="Authors"
              icon={<BsVectorPen />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/authors"
            />
            <Item
              title="Orders"
              icon={<BsBasket3 />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/orders"
            />
            <Item
              title="Order Status"
              icon={<BsClipboardData />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/order-status"
            />
            <Item
              title="Create Order"
              icon={<EditIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/create-order"
            />
            <Item
              title="Users"
              icon={<FiUsers />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/users"
            />
            <Item
              title="Coupons"
              icon={<BsGift />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/coupons"
            />
            <Item
              title="Taxes"
              icon={<BsReceipt />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/taxes"
            />
            <Item
              title="Shippings"
              icon={<BsTruck />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/shippings"
            />
            <Item
              title="Withdrawals"
              icon={<GiTakeMyMoney />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/withdrawals"
            />
            <Item
              title="Refunds"
              icon={<RiRefund2Line />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/refunds"
            />
            <Item
              title="Questions"
              icon={<QuestionOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/questions"
            />
            <Item
              title="Reviews"
              icon={<MdReviews />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/reviews"
            />
            <Item
              title="Settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
              href="/pickbazar/settings"
            />
          </Box>
        </Box>
      </Menu>
    </ProSidebarProvider>
  );
};

export default Sidebar;
