import { async } from "@firebase/util";
import axios from "axios";

export type createGroupInputType = {
  name: string;
  icon: string;
};

export type updateGroupInputType = {
  name: string;
  icon: string;
};

export type GetGroupParams = {
  name: string;
};

export type GetAllGroupsParams = {
  page?: number;
  query?: string;
  status?: string;
  perpage?: number;
  sort?: "asc" | "desc";
};

const createGroup = async (input: createGroupInputType) => {
  const res = await axios.post("/groups/create", input);
  console.log("input to axios createGroup", input);
  return res.data;
};

const updateGroup = async (input: updateGroupInputType) => {
  const res = await axios.post("/groups/update", input);
  console.log("input sent to axios uppdate group", input);
  return res.data;
};

const getAll = async (params: GetAllGroupsParams) => {
  const res = await axios.get("/groups", { params });
  console.log("params to get all groups", params);
  return res.data;
};

const getOne = async (params: GetGroupParams) => {
  const res = await axios.get("/groups/groupname", { params });
  console.log("params to get one group", params);
  return res.data;
};

export const GroupService = {
  getOne,
  getAll,
  createGroup,
  updateGroup,
};
