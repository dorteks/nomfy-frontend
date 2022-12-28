import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetAllShopsParams, ShopService } from "./shop.service";

// sorted
export const useGetAllShops = (params: GetAllShopsParams) => {
  return useQuery(["getAllShops", params], () => {
    const res = ShopService.getAll(params);
    return res;
  });
};

// pending
export const useGetOneShop = (shopId: number) => {
  console.log("shopId:::", shopId);
  return useQuery(["getShop", shopId], () => {
    const res = ShopService.getOne(shopId);
    return res;
  });
};
