import { UserService, GetUserParams } from "./user.service";
import { useQuery } from "@tanstack/react-query";

export const GetSingleUserInfo = (params: GetUserParams) => {
  return useQuery(["user", params], () => {
    const res = UserService.getOne(params);
    return res;
  });
};
