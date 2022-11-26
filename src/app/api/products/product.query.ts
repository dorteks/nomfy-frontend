import {
  ProductService,
  GetProductParams,
  GetAllProductsParams,
} from "./product.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProduct = (params: GetProductParams) => {
  return useQuery(["getProducts", params], () => {
    ProductService.getOne(params);
  });
};

export const useGetAllProducts = (
  params: GetAllProductsParams,
  onSuccess: any,
  onError: any
) => {
  return useQuery(["getAllProducts", params], () => {
    ProductService.getAll(params),
      {
        onSuccess: onSuccess,
        onError: onError,
      };
  });
};
