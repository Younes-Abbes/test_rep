"use client";

import { Course, Courses } from "@/components/Others/Courses";
import React from "react";

export default function LastCourse({ courseData }: { courseData: any }) {
  if (!courseData?.id) return <p>there's no course with that id...</p>;
  return <Course course={courseData} />;
}
