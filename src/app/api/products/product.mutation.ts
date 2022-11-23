import { ProductService } from "./product.service";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useCreateProduct = () => {
  const client = useQueryClient();
};
