import { handleAddCourse } from "@/lib/actions/Data/addData";
import { useMutation } from "@tanstack/react-query";

export function useAddCourse() {
   const { mutate: add, isPending } = useMutation({
    mutationFn: handleAddCourse,
    onSuccess: () => {
      alert("file uploaded successfully !");
    },
    onError: () => {
      alert("file upload failed !");
    },    
  }); 

  return { add, isPending };
}

