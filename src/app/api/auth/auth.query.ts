import { AuthService } from "./auth.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAuth = () => {
  return useQuery(["auth"], () => {
    AuthService.getAuth();
  });
};
