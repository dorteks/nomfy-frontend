import {
  Avatar,
  AvatarProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

type Props = { boxSize: any } & Pick<AvatarProps, "size" | "ml">;

const ProfileMenu = ({ boxSize = "auto", ml = "auto" }: Props) => (
  <Menu>
    <MenuButton>
      <Avatar boxSize={boxSize} ml={ml} name="P P" />
    </MenuButton>
    <MenuList fontSize={12}>
      <MenuItem>Cusomer</MenuItem>
      <MenuItem>Full Profile</MenuItem>
      <MenuItem>Sign Out</MenuItem>
    </MenuList>
  </Menu>
);

export default ProfileMenu;
