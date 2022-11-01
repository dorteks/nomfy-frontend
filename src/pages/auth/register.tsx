import Form from "../../containers/register/form";
import Code from "../../containers/register/code";
import { getRegAtom } from "../../app/atom/register.atom";
import { useAtom } from "jotai";
import React from "react";

const Register = () => {
  const [step] = useAtom(getRegAtom);

  if (step === 0) return <Form />;
  if (step === 1) return <Code />;

  return <Form />;
};

export default Register;
