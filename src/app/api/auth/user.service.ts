import axios from "../axios";

export type GetUserParams = {
  email?: string;
};

export type GetAllUserParams = {
  page?: number;
  query?: string;
  status?: string;
  perpage?: number;
  sort?: "asc" | "desc";
};

const getAuth = async () => {
  const res = await axios.get("/auth");
  return res.data;
};

const getOne = async (params: GetUserParams) => {
  const res = await axios.get("/user", { params });
  return res.data;
};

const getAll = async (params: GetAllUserParams) => {
  const res = await axios.get("/user/all", { params });
  return res.data;
};

export const UserService = {
  getAuth,
  getOne,
  getAll,
};
