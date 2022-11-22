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

// url
const getOne = async (params: GetShopParams) => {
  const res = await axios.get(`/${name}`, { params });
  return res.data;
};

const getAll = async (params: GetAllShopsParams) => {
  const res = await axios.get("/shops", { params });
  return res.data;
};

const createShop = async (input: CreateShopInputType) => {
  const res = await axios.post("/shops/create", input);
  return res.data;
};

// url
const updateShop = async (input: CreateShopInputType) => {
  const res = await axios.put(`/${name}/edit`, input);
  return res.data;
};

// click function to activate or inactivate shops (instead of deleting shops)

export const ShopService = {
  getAll,
  getOne,
  createShop,
  updateShop,
};
