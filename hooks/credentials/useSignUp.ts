import { handleSignUp } from "@/lib/actions/credentials/signup";
import { useMutation } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "react-toastify";

export default function useSignUp() {

  const { mutate, isPending } = useMutation({
    mutationFn: handleSignUp,
    onError: (error) => {
      toast.error(error.message);
    }, 
    onSuccess: () => {
      toast.success("Account created successfully");

    },
  });
  return { mutate, isPending };
}
