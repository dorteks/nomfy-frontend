import { Heading, HStack, PinInput, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Button from "../../components/button";
import PinInputField from "../../components/pin-input";

const Register = () => {
  const [code, setCode] = React.useState("");
  const submitDisabled = code.length !== 6;

  return (
    <Stack alignItems="center" justifyContent="center" mt="100">
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
        <Link href="/cusomter/dashboard">
          <Button w="sm" type="submit" disabled={submitDisabled}>
            Proceed
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
export default Register;
