import { ShopService } from "./shop.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// sorted
export const useCreateShop = () => {
  const client = useQueryClient();
  return useMutation((input: any) => ShopService.createShop(input), {
    onSuccess: (data) => {
      client.setQueryData(["createshop"], data);
    },
  });
};

export const useUpdateShop = () => {
  const client = useQueryClient();
  return useMutation((input: any) => ShopService.updateShop(input), {
    onSuccess: (data) => {
      client.setQueryData(["updateshop"], data);
    },
  });
};
