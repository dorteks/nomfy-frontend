import { removeToken, setToken } from "../../utils";
import { useRouter } from "next/router";
import { AuthService } from "./auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation((input: any) => AuthService.login(input), {
    onSuccess: (data) => {
      setToken(data.token);
    },
  });
};

export const useForgotPasswordEmail = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AuthService.forgotPasswordEmail(input), {
    onSuccess: (res: any) => {
      client.setQueryData(["reset-password"], res?.data);
    },
  });
};

export const useValidateResetPasswordCode = () => {
  const client = useQueryClient();
  return useMutation(
    (input: any) => AuthService.validateResetPasswordCode(input),
    {
      onSuccess: (res: any) => {
        client.setQueryData(["reset-password"], res?.data);
      },
    }
  );
};

export const useResetPassword = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AuthService.resetPassword(input), {
    onSuccess: (res: any) => {
      client.setQueryData(["reset-password"], {});
    },
  });
};

export const useLogout = () => {
  const client = useQueryClient();
  const router = useRouter();

  const logout = () => {
    removeToken();
    client.clear();
    router.push("/auth/login");
  };

  return { logout };
};
