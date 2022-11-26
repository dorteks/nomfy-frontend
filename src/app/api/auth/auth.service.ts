import axios from "../axios";

export type LoginInputType = {
  email: string;
  password: string;
};

export type createUserInputType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type verifyRUserInputType = {
  loginOTP: string;
  email: string;
};

export type verifyUserInputType = {
  otp: string;
  email: string;
  phoneNumber: string;
};

const getAuth = async () => {
  const res = await axios.get("/auth");
  return res.data;
};

const registerUser = async (input: createUserInputType) => {
  const res = await axios.post("/signup", input);
  console.log("input sent to axios", input);
  return res.data;
};

const verifyRUser = async (input: verifyRUserInputType) => {
  const res = await axios.post("/signup/verify", input);
  return res.data;
};

const login = async (input: LoginInputType) => {
  const res = await axios.post("/login", input);
  console.log(input, "login axios input");
  return res.data;
};

const forgotPasswordEmail = async (input: any) => {
  const res = await axios.post("/auth/password/reset/otp", input);
  return res.data;
};

const validateResetPasswordCode = async (input: any) => {
  const res = await axios.post("/auth/password/reset/validate-otp", input);
  return res.data;
};

const resetPassword = async (input: any) => {
  const res = await axios.post("/auth/password/reset", input);
  return res.data;
};

const verifyUser = async (input: verifyUserInputType) => {
  const res = await axios.post("/auth/verify", input);
  return res.data;
};

export const AuthService = {
  login,
  getAuth,
  verifyUser,
  registerUser,
  resetPassword,
  forgotPasswordEmail,
  validateResetPasswordCode,
  verifyRUser,
};
