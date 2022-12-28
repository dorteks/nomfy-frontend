import {
  Avatar,
  AvatarProps,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

type Props = { boxSize: any } & Pick<AvatarProps, "size" | "ml">;

const ProfileMenu = ({ boxSize = "auto", ml = "auto" }: Props) => (
  <Menu>
    <MenuButton>
      <Avatar boxSize={boxSize} ml={ml} name="P P" />
    </MenuButton>
    <MenuList fontSize={12}>
      <MenuItem>
        <Box justifyContent="space-between">
          <Stack>
            <Text fontSize="15px" fontWeight="bold">
              Customer
            </Text>
            <Text fontSize="13px">customer@demo.com</Text>
          </Stack>
        </Box>
      </MenuItem>

      <Link href="/pickbazar/profile-update">
        <MenuItem h="52px">
          <Text fontSize="14px" fontWeight="bold">
            Full Profile
          </Text>
        </MenuItem>
      </Link>
      <Link href="/">
        <MenuItem h="52px">
          <Text fontSize="14px" fontWeight="bold">
            Sign Out
          </Text>
        </MenuItem>
      </Link>
    </MenuList>
  </Menu>
);

export default ProfileMenu;
