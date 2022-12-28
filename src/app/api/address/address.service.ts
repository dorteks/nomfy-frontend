import { ParsedUrlQueryInput } from "querystring";
import axios from "../axios";

export type GetOneAddressParams = {
  zipcode: string;
};

export type GetAllAddressParams = {
  page?: number;
  query?: string;
  status?: string;
  perpage?: number;
  sort?: "asc" | "desc";
};

export type CreateAddressInputType = {
  country: string;
  state: string;
  city: string;
  zipCode: number;
  streetAddress: string;
};

export type UpdateAddressInputType = {
  country: string;
  state: string;
  city: string;
  zipCode: string;
  streetAddress: string;
};

const createAddress = async (input: CreateAddressInputType) => {
  const res = await axios.post("/address/create", input);
  return res.data;
};

const updateAddress = async (input: UpdateAddressInputType) => {
  const res = await axios.post("/address/update", input);
  return res.data;
};

const getAll = async (params: GetAllAddressParams) => {
  const res = await axios.get("/address", { params });
  return res.data;
};

const getOne = async (addressId: number) => {
  const res = await axios.get(`/address/${addressId}`);
  return res.data;
};

export const AddressService = {
  getAll,
  getOne,
  createAddress,
  updateAddress,
};
