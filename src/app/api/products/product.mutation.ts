import { ProductService } from "./product.service";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useCreateProduct = () => {
  const client = useQueryClient();
  return useMutation((input: any) => ProductService.createProduct(input), {
    onSuccess: (data) => {
      client.setQueryData(["product"], data.sku);
    },
  });
};

export const useUpdateProduct = () => {
  const client = useQueryClient();
  return useMutation((input: any) => ProductService.updateProduct(input), {
    onSuccess: (data) => {
      client.setQueryData(["product"], data.sku);
    },
  });
};
