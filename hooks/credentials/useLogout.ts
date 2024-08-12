import { signOut } from "@/lib/actions/credentials/logout";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

  function useLogout() {
    const {mutate, isPending, } = useMutation({mutationFn: signOut, onSuccess: () => redirect("/login"), retry: 0});
    return {mutate, isPending};
  }
  
  export default useLogout
  

