import Image from "next/image";

type Course = {
  label: string;
  price: string;
  title: string;
  pic: string;
  stars: string;
  students: string;
  colors: string;
  date: string;
};

function RecentlyAddedCourses() {
  function generateDates(): string[] {
    const dates: string[] = [];
    for (let i = 12; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString());
    }
    return dates;
  }
  const dates: string[] = generateDates();
  const courses: Course[] = [
    {
      label: "Design",
      price: "$57",
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      pic: "/assets/BestSellingCourses/Course1.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-rose-100 text-rose-500",
      date: dates[0],
    },
    {
      label: "Developments",
      price: "$57",
      title: "The Complete 2021 Web Development Bootcamp",
      pic: "/assets/BestSellingCourses/Course2.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-pink-100 text-pink-500",
      date: dates[1],
    },
    {
      label: "Business",
      price: "$57",
      title: "Learn Python Programming Masterclass",
      pic: "/assets/BestSellingCourses/Course3.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-green-100 text-green-500",
      date: dates[2],
    },
    {
      label: "Marketing",
      price: "$57",
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      pic: "/assets/BestSellingCourses/Course4.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-pink-100 text-pink-500",
      date: dates[3],
    },
    {
      label: "IT & Software",
      price: "$57",
      title: "Reiki Level I, II and Master/Teacher Program",
      pic: "/assets/BestSellingCourses/Course5.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-rose-100 text-rose-500",
      date: dates[4],
    },
    {
      label: "Music",
      price: "$57",
      title: "The Complete Foundation Stock Trading Course",
      pic: "/assets/BestSellingCourses/Course6.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-orange-100 text-orange-500",
      date: dates[5],
    },
    {
      label: "Marketing",
      price: "$57",
      title: "Beginner to Pro in Excel: Financial Modeling and Valuation",
      pic: "/assets/BestSellingCourses/Course7.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-pink-100 text-pink-500",
      date: dates[6],
    },
    {
      label: "Health & Fitness",
      price: "$57",
      title: "The Python Mega Course: Build 10 Real World Applications",
      pic: "/assets/BestSellingCourses/Course8.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-green-100 text-green-500",
      date: dates[7],
    },
    {
      label: "Design",
      price: "$57",
      title: "Copywriting - Become a Freelance Copywriter, your own boss",
      pic: "/assets/BestSellingCourses/Course9.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-rose-100 text-rose-500",
      date: dates[8],
    },
    {
      label: "Lifestyle",
      price: "$57",
      title: "Google Analytics Certification - Learn How To Pass The Exam",
      pic: "/assets/BestSellingCourses/Course10.png",
      stars: "⭐ 5.0",
      students: "265.7K",
      colors: "bg-orange-100 text-orange-500",
      date: dates[9],
    },
    {
      label: "Design",
      price: "$57",
      title: "The Python Mega Course: Build 10 Real World Applications",
      pic: "/assets/BestSellingCourses/Course11.png",
      stars: "⭐ 5.0",
      students: "245K",
      colors: "bg-orange-100 text-orange-500",
      date: dates[10],
    },
    {
      label: "Developments",
      price: "$57",
      title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
      pic: "/assets/BestSellingCourses/Course12.png",
      stars: "⭐ 5.0",
      students: "250K",
      colors: "bg-orange-100 text-orange-500",
      date: dates[11],
    },
  ];

  const sortedCoursesByDate = [...courses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const Top4NewestCourses: Course[] = sortedCoursesByDate.slice(0, 4);

  return (
    <div className="flex flex-col mt-10 gap-5 w-3/4 m-auto items-center py-5 justify-center">
      <h1 className="text-3xl font-semibold align-middle py-10">
        Recently added courses
      </h1>
      <div className="grid grid-cols-4 w-full">
        {Top4NewestCourses.map((course: Course, index: number) => (
          <Card key={index} course={course} width="w-[80%]" />
        ))}
      </div>
    </div>
  );
}

export default RecentlyAddedCourses;

interface CardProps {
  course: Course;
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
