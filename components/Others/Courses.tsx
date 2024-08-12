"use client";
import { Tables } from "@/types/supabase";

export function Courses({
  courses,
}: {
  courses: Tables<"courses">[] | null | undefined;
}) {
  return (
    <div className="grid grid-cols-5 gap-[25px] ">
      {courses?.map((course: Tables<"courses">) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
}

export function Course({ course }: { course: Tables<"courses"> }) {
  return (
    <button className="block w-10/12 mx-auto space-y-1 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden rounded-xl">
      <img
        className="w-full object-cover"
        src={course?.image ?? ""}
        alt={"image"}
      />
      <div className="p-2">
        <div className="flex w-full justify-between items-center">
          <h3 className={`px-2 py-1 ${course.colors}`}>{course.label}</h3>
          <span className="text-orange-600">${course.price}</span>
        </div>
        <p className="text-sm text-start mt-2">{course.description}</p>
        <hr className="my-2" />
        <div className="flex w-full justify-between items-center">
          <span>⭐{course.rating}</span>
          <span>{course.students}k students</span>
        </div>
      </div>
    </button>
  );
}
