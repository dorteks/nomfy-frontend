import axios from "../axios";

export type GetProductParams = {
  sku: string;
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

export type DeleteProductParams = {
  sku: string;
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

export type UpdateProductInputType = {
  description: string;
  featuredImage: string;
  gallery: string;
  unit: number;
  price: number;
  quantity: number;
  salesPrice: string;
  sku: string;
};

// sorted endpoints
const getAll = async (params: GetAllProductsParams) => {
  const res = await axios.get("/products", { params });
  return res.data;
};

const createProduct = async (input: CreateProductInputType) => {
  const res = await axios.post(`/products/create`, input);
  console.log("input sent to axios", input);
  return res.data;
};

const updateProduct = async (input: UpdateProductInputType) => {
  const res = await axios.post(`/products/edit`, input);
  console.log("input sent to axios", input);
  return res.data;
};

// not sorted
const getOne = async (params: GetProductParams) => {
  const res = await axios.get("`/products/${name}`", { params });
  return res.data;
};

const deleteProduct = async (params: DeleteProductParams) => {
  const res = await axios.delete(`/products/delete/`, { params });
  return res.data;
};

export const ProductService = {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
  getOne,
};
