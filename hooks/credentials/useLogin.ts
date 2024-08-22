import { handleLogin } from "@/api/User/login";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: handleLogin,
    onSuccess: () => {
      toast("success");
      redirect('/home')

   },
    onError: (error) => {
      toast(error.message);
    },
  });
  return { mutate, isPending };
}
