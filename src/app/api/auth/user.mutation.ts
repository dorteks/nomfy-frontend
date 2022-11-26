import { AuthService, createUserInputType } from "./auth.service";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { setToken } from "../../utils";

export const useCreateUser = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AuthService.registerUser(input), {
    onSuccess: (data) => {
      client.setQueryData(["auth-email"], data.email);
    },
  });
};

export const useVerifyUser = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AuthService.verifyUser(input), {
    onSuccess: (data) => {
      setToken(data.token);
      client.setQueryData(["auth"], data);
      client.setQueryData(["auth-email"], undefined);
    },
  });
};
