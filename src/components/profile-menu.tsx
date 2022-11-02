import {
  Avatar,
  AvatarProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

type Props = {} & Pick<AvatarProps, "size" | "ml">;

const ProfileMenu = ({ size = "sm", ml = "auto" }: Props) => (
  <Menu>
    <MenuButton>
      <Avatar size={size} ml={ml} name="A B" />
    </MenuButton>
    <MenuList fontSize={12}>
      <MenuItem>Cusomer</MenuItem>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Sign Out</MenuItem>
    </MenuList>
  </Menu>
);

export default ProfileMenu;
