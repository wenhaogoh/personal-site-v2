import { useMutation } from "@tanstack/react-query";

import { Authentication } from "../fetch";

export const useLogin = (onSuccess: () => void) => {
  const {
    mutate: login,
    isLoading,
    isSuccess,
  } = useMutation(Authentication.login, {
    onSuccess,
  });

  return { login, isLoading, isSuccess };
};
