import axios from "../axios";

export type GetShopParams = {
  name: string;
};

export type GetAllShopsParams = {
  page?: number;
  query?: string;
  status?: string;
  perpage?: number;
  sort?: "asc" | "desc";
};

export type CreateShopInputType = {
  name: string;
  logo: string;
  description: string;
  website: string;
  phoneNumber: number;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  youtubeLink: string;
};

export type UpdateShopInputType = {
  name: string;
  logo: string;
  description: string;
  website: string;
  phoneNumber: number;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  youtubeLink: string;
};

// sorted
const createShop = async (input: CreateShopInputType) => {
  const res = await axios.post("/shops/create", input);
  console.log("create shop input sent to axios", input);
  console.log(res.data);
  return res.data;
};

// in progress
const updateShop = async (input: UpdateShopInputType) => {
  const res = await axios.put(`/shops/edit`, input);
  console.log("update shop input sent to axios", input);
  return res.data;
};

// pending
// url
const getOne = async (params: GetShopParams) => {
  const res = await axios.get(`/shops/${name}`, { params });
  return res.data;
};

const getAll = async (params: GetAllShopsParams) => {
  const res = await axios.get("/shops", { params });
  return res.data;
};

// set up a click function to activate or inactivate shops (instead of deleting shops)

export const ShopService = {
  getAll,
  getOne,
  createShop,
  updateShop,
};
