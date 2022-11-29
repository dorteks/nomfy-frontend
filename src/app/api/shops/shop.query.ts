import { useQuery } from "@tanstack/react-query";
import { GetAllShopsParams, GetShopParams, ShopService } from "./shop.service";

// sorted
export const useGetAllShops = (params: GetAllShopsParams) => {
  return useQuery(["getAllShops", params], () => {
    const res = ShopService.getAll(params);
    return res;
  });
};

// pending
export const useGetOneShop = (params: GetShopParams) => {
  return useQuery(["getShop", params], () => {
    const res = ShopService.getOne(params);
    return res;
  });
};
