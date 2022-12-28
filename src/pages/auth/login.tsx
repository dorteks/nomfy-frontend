// import Head from "next/head";
// import Form from "../../components/form";
// import Input from "../../components/input";
// import Button from "../../components/button";
// import { useForm } from "react-hook-form";
// import { Stack } from "@chakra-ui/react";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import React from "react";
// import { useRouter } from "next/router";
// import { auth } from "../../app/utils/firebase";
// import { useLogin } from "../../app/api/auth/auth.mutation";

// const schema = yup.object().shape({
//   email: yup.string().trim().email().required(),
//   password: yup.string().min(8).required(),
// });

// const defaultValues = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const [error, setError] = React.useState(false);

//   const router = useRouter();
//   const rhf = useForm<any>({
//     mode: "onChange",
//     defaultValues,
//     resolver: yupResolver(schema),
//   });
//   const { mutate: login, isLoading, isSuccess, data } = useLogin();

//   const onSubmit = async (values: any) => {
//     try {
//       await login(values);
//     } catch (error: any) {
//       throw new Error(error);
//     }
//   };

//   React.useEffect(() => {
//     if (!isSuccess) return;
//     if (data.role) router.push("/pickbazar");
//   }, [isSuccess, data, router]);

//   return (
//     <>
//       <Head>
//         <title>Login</title>
//       </Head>
//       <Stack alignItems="center" justifyContent="center" mt={100}>
//         <Form onSubmit={rhf.handleSubmit(onSubmit)}>
//           <Stack mb={8} spacing={4}>
//             <Input
//               type="email"
//               name="email"
//               placeholder="Email"
//               control={rhf.control}
//             />
//             <Input
//               type="password"
//               name="password"
//               placeholder="Password"
//               control={rhf.control}
//             />
//           </Stack>
//           {error && <span>Wrong email or password!</span>}

//           <Button
//             w="full"
//             type="submit"
//             loadingText="Loading"
//             isLoading={isLoading || isSuccess}
//           >
//             Login
//           </Button>
//         </Form>
//       </Stack>
//     </>
//   );
// };

// export default Login;

import React from "react";
import { useRouter } from "next/router";
import { Box, Stack } from "@chakra-ui/react";
import { useLogin } from "../../app/api/auth/auth.mutation";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const { mutate, data, isSuccess, isLoading, isError } = useLogin();
  // console.log(a);
  console.log("data -", data);
  console.log("success -", isSuccess);
  console.log("error -", isError);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, password);

    mutate({ email, password });
  };

  React.useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) router.push("/pickbazar/");
  }, [isSuccess, router]);

  // avaialable users
  // obiJ@gmail.com     obi123
  // oluJ@gmail.com     olu123
  // adeJ@gmail.com     ade123

  // React.useEffect(() => {
  //   if (!isSuccess) return;
  //   if (data.role === "CUSTOMER") router.push("/${customername}/dashboard");
  //   if (data.role === "VENDOR") router.push("/${vendorname}/dashboard");
  //   if (data.role === "ADMIN") router.push("/admin/dashboard");
  // }, [isSuccess, data?.role, router]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      mt="150px"
      ml="350px"
      p="2px"
      backgroundColor="yellow.100"
      h="523px"
      w="420px"
    >
      <Stack alignItems="center" justifyContent="center" mt="40px">
        <form onSubmit={handleSubmit}>
          <Stack mb={8} spacing={4}>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>

          <Button alignItems="center" type="submit">
            Login
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default Login;
