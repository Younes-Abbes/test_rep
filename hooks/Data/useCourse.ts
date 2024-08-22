import { getCourseById } from "@/api/Data/getData";
import { useQuery } from "@tanstack/react-query";

function useCourse(courseId: Number | null) {
    const { data: courses } = useQuery({
        queryKey: ["courses", courseId],
        queryFn: () => getCourseById(courseId),
        enabled: courseId !== null,
      });

    const course = courses !== null ? courses?.at(0) : null;
      return {course};
}

export default useCourse
