import {
  AddressService,
  GetAllAddressParams,
  GetOneAddressParams,
} from "./address.service";
import { useQuery } from "@tanstack/react-query";

export const GetAllAddress = (params: GetAllAddressParams) => {
  return useQuery(["getAll", params], () => {
    const res = AddressService.getAll(params);
    return res;
  });
};

export const GetOneAddress = (params: GetOneAddressParams) => {
  return useQuery(["getOne", params], () => {
    const res = AddressService.getOne(params);
    return res;
  });
};
