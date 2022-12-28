import {
  AddressService,
  GetAllAddressParams,
  GetOneAddressParams,
} from "./address.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAddress = (params: GetAllAddressParams) => {
  return useQuery(["getAll", params], () => {
    const res = AddressService.getAll(params);
    return res;
  });
};

export const useGetOneAddress = (addressId: number) => {
  console.log("addressId:::", addressId);
  return useQuery(["getAddress", addressId], () => {
    const res = AddressService.getOne(addressId);
    return res;
  });
};
