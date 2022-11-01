import { Stack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { setRegAtom } from "../../app/atom/register.atom";
import Button from "../../components/button";
import Form from "../../components/form";
import Input from "../../components/input";

const Register = () => {
  const [_, setStep] = useAtom(setRegAtom);
  const rhf = useForm({ mode: "onChange" });

  const onSubmit = () => {
    setStep("nextReg");
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Stack alignItems="center" justifyContent="center" mt={100}>
        <Form onSubmit={rhf.handleSubmit(onSubmit)}>
          <Stack mb={8} spacing={4}>
            <Stack direction="row">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                control={rhf.control}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                control={rhf.control}
              />{" "}
            </Stack>

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
            <Input
              type="role"
              name="role"
              placeholder="Role"
              control={rhf.control}
            />
          </Stack>
          <Button w="full" type="submit">
            Register
          </Button>
        </Form>
      </Stack>
    </>
  );
};

export default Register;
