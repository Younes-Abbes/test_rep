import { signup, handleSignUp } from "@/lib/actions/signup";
import { useMutation } from "@tanstack/react-query";

export default function useSignUp() {
  const { mutate, isPending } = useMutation({
    mutationFn: handleSignUp,
  });
  return { mutate, isPending };
}
