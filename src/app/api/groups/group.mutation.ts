import { GroupService } from "./group.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateGroup = () => {
  const client = useQueryClient();
  return useMutation((input: any) => GroupService.createGroup(input), {
    onSuccess: (data) => {
      client.setQueryData(["createGroup"], data);
    },
  });
};

export const useUpdateGroup = () => {
  const client = useQueryClient();
  return useMutation((input: any) => GroupService.updateGroup(input), {
    onSuccess: (data) => {
      client.setQueryData(["updateGroup"], data);
    },
  });
};
