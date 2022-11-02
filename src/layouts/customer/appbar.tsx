import { Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import BaseAppBar from "../../components/appbar";
import ProfileMenu from "../../components/profile-menu";

const Appbar = () => {
  return (
    <>
      <BaseAppBar>
        <Link href="/">
          <h1>PICKBAZAR</h1>
        </Link>
        <Stack direction="row">
          <Button color="gray.900" mr={12}>
            Create Shop
          </Button>
          <ProfileMenu />
        </Stack>
      </BaseAppBar>
    </>
  );
};

export default Appbar;
