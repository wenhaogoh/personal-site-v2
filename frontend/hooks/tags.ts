import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { QUERY_KEYS } from "../../shared/consts";
import { UpdateTagMutation } from "../../shared/types";
import { Tags } from "../api";

export const useGetTags = () => {
  const { data: tags, isLoading } = useQuery([QUERY_KEYS.TAGS], Tags.getTags, {
    refetchOnWindowFocus: false,
  });

  return { tags, isLoading };
};

export const useUpdateTags = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateTag,
    isLoading,
    isSuccess,
  } = useMutation(
    (variables: UpdateTagMutation) =>
      toast.promise(Tags.updateTag(variables), {
        pending: "Updating...",
        success: "Update successful!",
        error: "Update failed!",
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.TAGS]);
      },
    }
  );

  return { updateTag, isLoading, isSuccess };
};
