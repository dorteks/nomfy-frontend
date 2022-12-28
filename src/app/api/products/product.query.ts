import { ProductService, GetAllProductsParams } from "./product.service";
import { useQuery } from "@tanstack/react-query";

// sorted
export const useGetAllProducts = (params: GetAllProductsParams) => {
  return useQuery(["getAllProducts", params], () => {
    const res = ProductService.getAll(params);
    return res;
  });
};

// not sorted
export const useGetProduct = (productId: number) => {
  console.log("productId:::", productId);
  return useQuery(["getProduct", productId], () => {
    const res = ProductService.getOne(productId);
    return res;
  });
};
