"use client";

import React, { useState } from "react";
import LastCourse from "./LastCourse";
import CourseForm from "./CourseForm";
import useCourse from "@/hooks/Data/useCourse";

export default function Content() {
  const [courseId, setCourseId] = useState<Number | null>(null);

  const { course: courseData } = useCourse(courseId);

  return (
    <div className="grid grid-cols-2 w-5/6">
      <LastCourse courseData={courseData} />
      <CourseForm courseData={courseData} setter={setCourseId} />
    </div>
  );
}
