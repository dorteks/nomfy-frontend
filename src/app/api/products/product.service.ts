import axios from "../axios";

export type GetProductParams = {
  name: string;
};

export type GetAllProductsParams = {
  page?: number;
  query?: string;
  status?: string;
  perpage?: number;
  sort?: "asc" | "desc";
  sku?: string;
};

export type CreateProductInputType = {
  description: string;
  featuredImage: string;
  gallery: string;
  unit: number;
  price: number;
  quantity: number;
  salesPrice: string;
  sku: string;
};

// url
const getOne = async (params: GetProductParams) => {
  const res = await axios.get("`/products/${name}`", { params });
  return res.data;
};

const getAll = async (params: GetAllProductsParams) => {
  const res = await axios.get("/products", { params });
  return res.data;
};

const createProduct = async (input: CreateProductInputType) => {
  const res = await axios.post("/products/create", input);
  console.log("input sent to axios", input);
  return res.data;
};
// url
const updateProduct = async (input: CreateProductInputType) => {
  // const res = await axios.put(`/products/${name}/edit`, input);
  const res = await axios.put(`/products/edit`, input);
  return res.data;
};

// url
const deleteProduct = async (params: GetProductParams) => {
  const res = await axios.delete(`/products/${name}`);
  return res.data;
};

export const ProductService = {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
  getOne,
};
