import Head from "next/head";
import Form from "../../components/form";
import Input from "../../components/input";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import { Stack } from "@chakra-ui/react";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const rhf = useForm<FormValues>({ mode: "onChange" });

  const onSubmit = (data: FormValues) => {
    console.log("submit button clicked");
    console.log(data);
  };

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

          <Button w="full" type="submit">
            Login
          </Button>
        </Form>
      </Stack>
    </>
  );
};

export default Login;
