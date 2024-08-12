"use client";

import { HexColorPicker } from "react-colorful";
import { useAddCourse } from "@/hooks/Data/useAddCourse";
import { useUpdateCourse } from "@/hooks/Data/useUpdateCourse";
import { Tables } from "@/types/supabase";
import { useState } from "react";

export default function CourseForm({
  setter,
  courseData,
}: {
  setter: React.Dispatch<React.SetStateAction<Number | null>>;
  courseData: Tables<"courses"> | null;
}) {
  const [color, setColor] = useState<string>("");
  const exists = courseData?.id ? true : false;

  const { update, waiting } = useUpdateCourse(courseData?.id ?? null);
  const { add, isPending } = useAddCourse();

  if (isPending || waiting) return <p>loading...</p>;

  return (
    <form className="grid grid-cols-2 p-7 bg-slate-300 space-y-5">
      <label>id :</label>
      <input
        type="number"
        defaultValue={courseData?.id}
        name="id"
        onChange={(e) => {
          setter(Number(e.target.value));
        }}
      />
      <label>date created :</label>
      <input
        type="date"
        name="created_at"
        disabled={true}
        defaultValue={courseData?.created_at?.slice(0, 10)}
      />
      <label>image :</label>
      <input type="file" name="image" />
      <label>label :</label>
      <input type="text" name="label" defaultValue={courseData?.label ?? ""} />
      <label>description</label>
      <input
        type="text"
        name="description"
        defaultValue={courseData?.description ?? ""}
      />
      <label>price :</label>
      <input type="number" name="price" defaultValue={courseData?.price ?? 0} />
      <label>rating :</label>
      <input
        type="number"
        name="rating"
        defaultValue={courseData?.rating ?? 0}
      />
      <label>students :</label>
      <input
        type="number"
        name="students"
        defaultValue={courseData?.students ?? ""}
      />
      <label>colors :</label>
      <HexColorPicker color={color} onChange={setColor} />
      <button
        type="submit"
        disabled={exists}
        formAction={add}
        className="bg-orange-300 disabled:bg-inherit p-3 transition-all duration-300">
        Add
      </button>
      <button
        type="submit"
        disabled={!exists}
        formAction={update}
        className="bg-orange-300 disabled:bg-inherit p-3 transition-all duration-300">
        Update
      </button>
    </form>
  );
}
