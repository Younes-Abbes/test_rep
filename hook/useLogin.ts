import { handleLogin } from "@/lib/actions/login";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: handleLogin,
    onSuccess: () => {
      alert("success");
    },
    onError: (error) => {
      alert(error.message);
    },
  });
  return { mutate, isPending };
}
