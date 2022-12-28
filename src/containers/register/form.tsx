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
import { useCreateUser } from "../../app/api/auth/auth.mutation";
import { useRouter } from "next/router";

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
};

const Register = () => {
  const [_, setStep] = useAtom(setRegisterStepAtom);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  // const rhf = useForm<any>({
  //   mode: "onChange",
  //   resolver: yupResolver(schema),
  //   defaultValues,
  // });

  const {
    mutate: createUser,
    data,
    isLoading,
    isSuccess,
    isError,
  } = useCreateUser();
  console.log("data-", data);
  console.log("isSuccess", isSuccess);
  console.log("isError", isError);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, role);

    createUser({ firstName, lastName, email, password, role });
  };

  const router = useRouter();

  // React.useEffect(() => {
  //   if (!isSuccess) return;
  //   setStep("next");
  // }, [isSuccess, setStep]);

  React.useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) router.push("/pickbazar/");
  }, [isSuccess, router]);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Stack alignItems="center" justifyContent="center" mt={100}>
        <form onSubmit={onSubmit}>
          <Stack mb={8} spacing={4}>
            <Stack direction="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />{" "}
            </Stack>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              name="role"
              placeholder="role"
              onChange={(e) => setRole(e.target.value)}
            />
          </Stack>
          <Button w="full" type="submit">
            Register
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default Register;
