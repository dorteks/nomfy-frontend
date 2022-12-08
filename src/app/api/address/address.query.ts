import {
  AddressService,
  GetAllAddressParams,
  GetOneAddressParams,
} from "./address.service";
import { useQuery } from "@tanstack/react-query";

export const getAllAddress = (params: GetAllAddressParams) => {
  return useQuery(["getAll", params], () => {
    const res = AddressService.getAll(params);
    return res;
  });
};

export const getOneAddress = (params: GetOneAddressParams) => {
  return useQuery(["getOne", params], () => {
    const res = AddressService.getOne(params);
    return res;
  });
};
