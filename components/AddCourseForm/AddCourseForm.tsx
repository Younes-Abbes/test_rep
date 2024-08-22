"use client";

import React, { useState } from "react";
import CourseNav from "./CourseNav";
import CourseHeader from "./CourseHeader";
import CourseBody from "./CourseBody";

export default function AddCourseForm() {
  const [page, setPage] = useState<string>("Basic Information");

  return (
    <div className="flex flex-col items-center w-[1320px] justify-center gap-1 shadow-md">
      <CourseNav page={page} setPage={setPage}></CourseNav>
      <CourseHeader page={page}></CourseHeader>
      <CourseBody page={page} setPage={setPage}></CourseBody>
    </div>
  );
}
