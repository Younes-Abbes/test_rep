import { Courses } from "@/components/Others/Courses";
import React from "react";
import useCourses from "@/hooks/Data/useCourses";

export default function Content() {
  const { data, isLoading } = useCourses();
  if (isLoading) return <div>fetching data from supabase ...</div>;

  return (
    <div className="max-w-screen-xl">
      <CourseFilter />
      <Courses courses={data} />
    </div>
  );
}

function CourseFilter() {
  return (
    <nav className="w-full p-3">
      <ul className="flex gap-3 w-full justify-around">
        <li className="w-2/12">
          <button className="p-4 bg-orange-700 rounded-full hover:bg-orange-500 transition-all duration-300 w-full">
            Name
          </button>
        </li>
        <li className="w-2/12">
          <button className="p-4 bg-orange-700 rounded-full hover:bg-orange-500 transition-all duration-300 w-full">
            Label
          </button>
        </li>
        <li className="w-2/12">
          <button className="p-4 bg-orange-700 rounded-full hover:bg-orange-500 transition-all duration-300 w-full">
            Price
          </button>
        </li>
        <li className="w-2/12">
          <button className="p-4 bg-orange-700 rounded-full hover:bg-orange-500 transition-all duration-300 w-full">
            Most liked
          </button>
        </li>
        <li className="w-2/12">
          <button className="p-4 bg-orange-700 rounded-full hover:bg-orange-500 transition-all duration-300 w-full">
            Most Viewed
          </button>
        </li>
      </ul>
    </nav>
  );
}
