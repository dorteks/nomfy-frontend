import {
  ProductService,
  GetProductParams,
  GetAllProductsParams,
  DeleteProductParams,
} from "./product.service";
import { useQuery } from "@tanstack/react-query";

// sorted
export const useGetAllProducts = (params: GetAllProductsParams) => {
  return useQuery(["getAllProducts", params], () => {
    const res = ProductService.getAll(params);
    return res;
  });
};

// not sorted
export const useGetProduct = (params: GetProductParams) => {
  return useQuery(["getProducts", params], () => {
    ProductService.getOne(params);
  });
};

// export const useDeleteProduct = (params: DeleteProductParams) => {
//   return useQuery(["deleteProduct", params], () =>
//     ProductService.deleteProduct(params)
//   );
// };
