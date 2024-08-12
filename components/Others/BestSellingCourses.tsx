"use client";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/lib/actions/Data/getData";
import { Courses } from "./Courses";

export function BestSellingCourses() {
  const { data } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  });

  return (
    <div className="flex w-screen flex-col items-center gap-5 bg-gray-100 pb-20 pt-10">
      <h1 className="text-3xl">Best selling Courses</h1>
      <Courses courses={data} />
    </div>
  );
}
