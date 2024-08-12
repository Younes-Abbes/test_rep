import { featureCourses } from "@/Data/data";
import { FeatureCourse } from "@/types/types";

export default function FeatureCourses() {
  return (
    <div className="flex flex-col bg-gray-100 p-20">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl">Our feature Courses</h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed
          rerum odio illum repellendus facilis aliquam.
        </p>
      </div>
      <div className="grid grid-cols-2 w-full gap-6 ">
        {featureCourses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

function Course({ course }: { course: FeatureCourse }) {
  return (
    <button className="flex gap-4 w-full max-w-xl hover:max-w-full mx-auto hover:shadow-xl transition-all duration-300">
      <img src={course.image} alt="course image" className="rounded-2xl" />
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex justify-between px-1 items-center">
          <p>{course.label}</p>
          <div className="flex gap-1">
            <p>{course.price}$</p>
            <span className="text-gray-400 line-through">
              {course.price_init}$
            </span>
          </div>
        </div>
        <p className="text-start">{course.description}</p>
        <div className="flex justify-between">
          <div className="flex">
            <img src={course.instructorPic} alt="instructor" />{" "}
            <p>{course.instructor}</p>
          </div>
          <div className="flex">
            <p>⭐{course.rating}</p>
            <p>({course.raters})</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-around">
          <div>
            <img src="assets/featureCourses/User.png" alt="user" />
            <p>
              {course.students} <span>students</span>
            </p>
          </div>
          <div>
            <img src="assets/featureCourses/Bar-chart.png" alt="bar chart" />
            <p>{course.level}</p>
          </div>
          <div>
            <img src="assets/featureCourses/Clock.png" alt="clock" />
            <p>
              {course.students} <span>hours</span>
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
