import Link from "next/link";
import type { NextPage } from "next";
import Button from "../components/button";
import { Center, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Center h="full">
        <Stack direction="row" spacing={7}>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>

          <Link href="/auth/register">
            <Button>Register</Button>
          </Link>
        </Stack>
      </Center>
    </>
  );
};

export default Home;
