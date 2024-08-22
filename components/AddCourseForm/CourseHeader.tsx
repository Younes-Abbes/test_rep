import React from "react";

export default function CourseHeader({ page }: { page: string }) {
  return (
    <header className="flex justify-between w-full px-10 py-3 items-center py-6">
      <h1 className="font-semibold text-2xl">{page}</h1>
      <div className="flex">
        <button className="bg-primary-100 text-primary-500 px-6 h-12">
          Save
        </button>
        <button className=" bg-white text-primary-500 px-6 h-12">
          Save & Preview
        </button>
      </div>
    </header>
  );
}
