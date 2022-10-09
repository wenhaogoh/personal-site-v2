import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { LoginRequestBody } from "../../shared/types";
import { Authentication } from "../api";

export const useLogin = () => {
  const router = useRouter();
  const {
    mutate: login,
    isLoading,
    isSuccess,
  } = useMutation(
    (body: LoginRequestBody) =>
      toast.promise(Authentication.login(body), {
        pending: "Logging in...",
        success: "Welcome home!",
        error: "Login failed!",
      }),
    {
      onSuccess: () => router.push("/admin"),
    }
  );

  return { login, isLoading, isSuccess };
};
