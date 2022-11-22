import { useQuery } from "@tanstack/react-query";
import { GetAllShopsParams, GetShopParams, ShopService } from "./shop.service";

export const useGetAllShops = (params: GetAllShopsParams) => {
  return useQuery(["getAllShops", params], () => {
    ShopService.getAll(params);
  });
};

export const useGetOneShop = (params: GetShopParams) => {
  return useQuery(["getShop", params], () => {
    ShopService.getOne(params);
  });
};
