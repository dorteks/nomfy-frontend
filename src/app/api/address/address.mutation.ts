import { AddressService } from "./address.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateAddress = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AddressService.createAddress(input), {
    onSuccess: (data) => {
      client.setQueryData(["createAddress"], data.data);
      console.log("data from addresscreatemutation", data);
      console.log("data.data from addresscreateemutation", data.data);
    },
  });
};

export const useUpdateAddress = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AddressService.updateAddress(input), {
    onSuccess: (data) => {
      client.setQueryData(["updateAddress"], data);
      console.log("data from addressupdatemutation", data);
      console.log("data.data from addressupdatemutation", data.data);
    },
  });
};
