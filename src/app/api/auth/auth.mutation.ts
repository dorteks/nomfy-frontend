import { removeToken, setToken } from "../../utils";
import { useRouter } from "next/router";
import { AuthService } from "./auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation((input: { email: string; password: string }) => {
    console.log("input sent to useLogin-axios ", input);
    return AuthService.login(input);
  });
};

export const useCreateUser = () => {
  const client = useQueryClient();
  return useMutation((input: any) => AuthService.registerUser(input), {
    onSuccess: (data) => {
      client.setQueryData(["auth-email"], data.email);
    },
  });
};

export const useVerifyRUser = () => {
  const client = useQueryClient();
  return useMutation(
    (input: { email: any; loginOTP: string }) => {
      console.log("input for verifyRUser", input);
      return AuthService.verifyRUser(input);
    },

    {
      onSuccess: (data) => {
        console.log("data from verify register user", data);
        setToken(data.token);
        client.setQueryData(["auth"], data);
        client.setQueryData(["auth-email"], undefined);
      },
    }
  );
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
