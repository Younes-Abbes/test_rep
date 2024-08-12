import { handleUpdateCourse } from "@/lib/actions/Data/updateData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateCourse(id: number | null) {
  const queryClient = useQueryClient();
  const { mutate: update, isPending: waiting } = useMutation({
    mutationFn: handleUpdateCourse,
    onSuccess: () => {
      alert("file updated successfully !");
      queryClient.invalidateQueries({ queryKey:[ "courses",id] });
    },
    onError: () => {
      alert("file update failed !");
    },

  });

  return { update, waiting };}

