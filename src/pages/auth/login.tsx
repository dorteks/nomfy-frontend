import Head from "next/head";
import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import { Stack } from "@chakra-ui/react";

const Login = () => {
  const rhf = useForm({ mode: "onChange" });

  const onSubmit = () => {};

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Stack alignItems="center" justifyContent="center" mt={100}>
        <Form onSubmit={rhf.handleSubmit(onSubmit)}>
          <Stack mb={8} spacing={4}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              control={rhf.control}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              control={rhf.control}
            />
          </Stack>

          <Button w="full">Login</Button>
        </Form>
      </Stack>
    </>
  );
};

export default Login;
