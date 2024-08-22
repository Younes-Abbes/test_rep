"use client";

import View from "@/components/Others/View";
import StudentCard from "@/components/Settings/StudentCard";
import { useState } from "react";

export default function Content() {
  const [page, setPage] = useState("settings");

  return (
    <>
      <StudentCard page={page} setPage={setPage} />
      <View page={page} />
    </>
  );
}
