type Course = {
  id: number;
  image: string;
  label: string;
  price: number;
  description: string;
  rating: number;
  students: number;
  colors: string;
};

function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      image: "/assets/BestSellingCourses/Course1.png",
      label: "Design",
      price: 57,
      description: "Machine Learning A-Z: Hands-on Python & R In Data ...",
      rating: 5.0,
      students: 265.7,
      colors: "bg-rose-100 text-rose-500",
    },
    {
      id: 2,
      image: "/assets/BestSellingCourses/Course2.png",
      label: "Developments",
      price: 57,
      description: "The complete 2021 Web Development Bootcamp.",
      rating: 5.0,
      students: 265.7,
      colors: "bg-pink-100 text-pink-500",
    },
    {
      id: 3,
      image: "/assets/BestSellingCourses/Course3.png",
      label: "Business",
      price: 57,
      description: "Learn Python programming Masterclass",
      rating: 5.0,
      students: 265.7,
      colors: "bg-green-100 text-green-500",
    },
    {
      id: 4,
      image: "/assets/BestSellingCourses/Course4.png",
      label: "Marketing",
      price: 57,
      description: "The complete digital marketing Course - 12 courses in 1",
      rating: 5.0,
      students: 265.7,
      colors: "bg-pink-100 text-pink-500",
    },
    {
      id: 5,
      image: "/assets/BestSellingCourses/Course5.png",
      label: "IT & Software",
      price: 57,
      description: "Reiki level I, II and Master/Teacher program",
      rating: 5.0,
      students: 265.7,
      colors: "bg-rose-100 text-rose-500",
    },
    {
      id: 6,
      image: "/assets/BestSellingCourses/Course6.png",
      label: "Music",
      price: 57,
      description: "The complete foundation stock trading course",
      rating: 5.0,
      students: 265.7,
      colors: "bg-orange-100 text-orange-500",
    },
    {
      id: 7,
      image: "/assets/BestSellingCourses/Course7.png",
      label: "Marketing",
      price: 57,
      description:
        "Beginner to pro in Excel: financial modeling and valuati...",
      rating: 5.0,
      students: 265.7,
      colors: "bg-pink-100 text-pink-500",
    },
    {
      id: 8,
      image: "/assets/BestSellingCourses/Course8.png",
      label: "Health & Fitness",
      price: 57,
      description: "The python mega Course: Build 10 real world applications",
      rating: 5.0,
      students: 265.7,
      colors: "bg-green-100 text-green-500",
    },
    {
      id: 9,
      image: "/assets/BestSellingCourses/Course9.png",
      label: "Design",
      price: 57,
      description: "Copywriting - Become a freelance Copywriter your ow...",
      rating: 5.0,
      students: 265.7,
      colors: "bg-rose-100 text-rose-500",
    },
    {
      id: 10,
      image: "/assets/BestSellingCourses/Course10.png",
      label: "Lifestyle",
      price: 57,
      description:
        "Google Analytics Certification - Learn how to pass the exam.",
      rating: 5.0,
      students: 265.7,
      colors: "bg-orange-100 text-orange-500",
    },
  ];

  return (
    <div className="flex w-screen flex-col items-center gap-5 bg-gray-100 pb-20 pt-10">
      <h1 className="text-3xl">Best selling Courses</h1>
      <div className="grid grid-cols-5  gap-7">
        {courses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

export default Courses;

function Course({ course }: { course: Course }) {
  return (
    <button className="block w-10/12 h-[20rem] mx-auto space-y-1 rounded-xl transition-all duration-300 hover:w-full hover:h-full hover:shadow-xl">
      <img className="rounded-xl" src={course.image} alt="img" />
      <div className="flex w-full justify-between gap-2">
        <h3 className={`bg-gray-200 px-1 ${course.colors}`}>{course.label}</h3>
        <span className="text-orange-600">${course.price}</span>
      </div>
      <p className="max-w-60 pl-2 text-start">{course.description}</p>
      <hr />
      <div className="flex w-full justify-between px-1">
        <span>⭐{course.rating}</span>
        <span>{course.students}k students</span>
      </div>
    </button>
  );
}
