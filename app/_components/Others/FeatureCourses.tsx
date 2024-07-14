type Course = {
  id: number;
  image: string;
  label: string;
  price_init: number;
  price: number;
  description: string;
  instructor: string;
  instructorPic: string;
  rating: number;
  raters: number;
  students: number;
  level: string;
  hours: number;
};

export default function FeatureCourses() {
  const data: Course[] = [
    {
      id: 1,
      image: "assets/featureCourses/Course Images.png",
      label: "Health & Fitness",
      price_init: 26.0,
      price: 14.0,
      description: "Investing in stocks The complete Course! (13 H ...)",
      instructor: "kevin Gilbert",
      instructorPic: "assets/featureCourses/Photo.png",
      rating: 5.0,
      raters: 357_914,
      students: 265.7,
      level: "beginner",
      hours: 6,
    },
    {
      id: 2,
      image: "assets/featureCourses/Course Images (2).png",
      label: "Personal Development",
      price_init: 26.0,
      price: 14.0,
      description: "Google Analytics certification - Learn how to ...",
      instructor: "kevin Gilbert",
      instructorPic: "assets/featureCourses/Photo.png",
      rating: 5.0,
      raters: 357_914,
      students: 265.7,
      level: "beginner",
      hours: 6,
    },
    {
      id: 3,
      image: "assets/featureCourses/Course Images (1).png",
      label: "Productivity",
      price_init: 26.0,
      price: 14.0,
      description: "Adobe XD for web design: Essential principles",
      instructor: "kevin Gilbert",
      instructorPic: "assets/featureCourses/Photo.png",
      rating: 5.0,
      raters: 357_914,
      students: 265.7,
      level: "beginner",
      hours: 6,
    },
    {
      id: 4,
      image: "assets/featureCourses/Course Images (3).png",
      label: "Music",
      price_init: 26.0,
      price: 14.0,
      description: "The Python Mega Course: Build 10 Real World ...",
      instructor: "kevin Gilbert",
      instructorPic: "assets/featureCourses/Photo.png",
      rating: 5.0,
      raters: 357_914,
      students: 265.7,
      level: "beginner",
      hours: 6,
    },
  ];

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
        {data.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

function Course({ course }: { course: Course }) {
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
