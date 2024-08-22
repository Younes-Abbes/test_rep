import { getCourses } from "@/api/Data/getData";
import { useQuery } from "@tanstack/react-query";

function useCourses() {
    const { data, isLoading } = useQuery({
        queryKey: ["courses"],
        queryFn: () => getCourses(),
      });
      return { data, isLoading };
}

export default useCourses
