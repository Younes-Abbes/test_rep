import { Top4NewestCourses } from "@/Data/data";
import { RecentCourse } from "@/types/types";

function RecentlyAddedCourses() {
  return (
    <div className="flex flex-col mt-10 gap-5 w-3/4 m-auto items-center py-5 justify-center">
      <h1 className="text-3xl font-semibold align-middle py-10">
        Recently added courses
      </h1>
      <div className="grid grid-cols-4 w-full">
        {Top4NewestCourses.map((course: RecentCourse, index: number) => (
          <Card key={index} course={course} width="w-[80%]" />
        ))}
      </div>
    </div>
  );
}

export default RecentlyAddedCourses;

interface CardProps {
  course: RecentCourse;
  width: string;
}

const Card: React.FC<CardProps> = ({ course, width }) => {
  return (
    <div
      className={`m-auto transition-all duration-700 flex flex-col ${width} gap-3 items-center hover:w-full px-2 border-2 border-gray-200`}>
      <div className="relative w-full h-48">
        <img src={course.pic} alt="Course" className="rounded-lg" />
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <div className={`text-xs px-2 py-1 ${course.colors}`}>
          {course.label}
        </div>
        <h1 className="text-semibold text-customText">{course.price}</h1>
      </div>
      <div className="text-sm font-semibold">{course.title}</div>
      <div className="flex flex-row items-center justify-between w-full border-t-2 py-2 border-gray-200 mt-auto">
        <h1>{course.stars}</h1>
        <h1 className="text-gray-700">
          {course.students} <span className="text-gray-400">Students</span>
        </h1>
      </div>
    </div>
  );
};
