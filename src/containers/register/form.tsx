import { Stack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Head from "next/head";
import { setRegisterStepAtom } from "../../app/atom/register.atom";
import Button from "../../components/button";
import Form from "../../components/form";
import Input from "../../components/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useCreateUser } from "../../app/api/auth/user.mutation";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .matches(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9`"~(){}[\]]{1,30}$/gm)
    .required(),

  lastName: yup
    .string()
    .trim()
    .matches(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9`"~(){}[\]]{1,30}$/gm)
    .required(),

  email: yup.string().trim().email().required(),
  password: yup.string().min(8).required(),
  role: yup.string().trim().required(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "",
};

const Register = () => {
  const [_, setStep] = useAtom(setRegisterStepAtom);
  const { mutate: createUser, isLoading, isSuccess } = useCreateUser();
  const rhf = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (values: any) => createUser(values);

  React.useEffect(() => {
    if (!isSuccess) return;
    setStep("next");
  }, [isSuccess, setStep]);

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
            {/* <Input
              type="role"
              name="role"
              placeholder="Role"
              control={rhf.control}
            /> */}
          </Stack>
          <Button
            w="full"
            type="submit"
            loadingText="Loading"
            isLoading={isLoading || isSuccess}
            disabled={!rhf.formState.isValid || isLoading || isSuccess}
          >
            Register
          </Button>
        </Form>
      </Stack>
    </>
  );
};

export default Register;
