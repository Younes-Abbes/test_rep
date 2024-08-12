"use client";

import View from "@/components/Others/View";
import StudentCard from "@/components/Settings/StudentCard";
import { Tables } from "@/types/supabase";
import { useState } from "react";

export default function Content({ profile }: { profile: Tables<"profiles"> }) {
  const [page, setPage] = useState("settings");

  return (
    <>
      <StudentCard page={page} setPage={setPage} profile={profile} />
      <View page={page} profile={profile} />
    </>
  );
}
