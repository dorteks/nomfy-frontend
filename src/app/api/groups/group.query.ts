import {
  GetAllGroupsParams,
  GetGroupParams,
  GroupService,
} from "./group.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllGroups = (params: GetAllGroupsParams) => {
  return useQuery(["getAllGroups", params], () => {
    return GroupService.getAll(params);
  });
};

export const useGetOneGroup = (params: GetGroupParams) => {
  return useQuery(["getOneGroup", params], () => {
    return GroupService.getOne(params);
  });
};
