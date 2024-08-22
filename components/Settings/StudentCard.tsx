import React, { Dispatch, SetStateAction } from "react";
import StudentInformations from "./StudentInformations";
import StudentOptions from "./StudentOptions";
import { Tables } from "@/types/supabase";

export default function StudentCard({
  page,
  setPage,
}: {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-8/12">
      <StudentInformations />
      <hr />
      <StudentOptions page={page} setPage={setPage} />
    </div>
  );
}
