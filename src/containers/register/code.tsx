import { Heading, HStack, PinInput, Stack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useVerifyRUser } from "../../app/api/auth/auth.mutation";
import { useVerifyUser } from "../../app/api/auth/user.mutation";
import Button from "../../components/button";
import PinInputField from "../../components/pin-input";

const Register = () => {
  const router = useRouter();
  const client = useQueryClient();

  const [code, setCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const submitDisabled = code.length !== 6;

  const authEmail = client.getQueryData(["authEmail"]);

  const { mutate: verify, isSuccess, isLoading, isError } = useVerifyRUser();

  const handleSubmit = () => {
    console.log("isSuccess", isSuccess);
    console.log("isError", isError);

    if (submitDisabled) return;
    console.log("code -", code, "authEmail -", authEmail);
    verify({ loginOTP: code, email: authEmail });
  };

  // React.useEffect(() => {
  //   if (!authEmail) router.reload();
  // }, [authEmail, router]);

  // React.useEffect(() => {
  //   if (!isSuccess) return;
  //   router.push("/pickbazar");
  // }, [isSuccess, router]);

  return (
    <Stack alignItems="center" justifyContent="center" mt="100">
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(email)}
      />
      <HStack spacing={4} mt={4} mb={8}>
        <PinInput placeholder="" mask size="lg" onChange={setCode}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <Stack>
        <Button
          w="sm"
          type="submit"
          onClick={handleSubmit}
          disabled={submitDisabled}
        >
          Proceed
        </Button>
      </Stack>
    </Stack>
  );
};
export default Register;
