"use client";

import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type Lecture = {
  id: number;
  name: string;
};
type Section = {
  name: string;
  id: number;
  lectures: Lecture[];
};

export default function Curriculum() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      name: "section 1",
      lectures: [
        { id: 1, name: "lecture 1" },
        { id: 2, name: "lecture 2" },
      ],
    },

    {
      id: 2,
      name: "section 2",
      lectures: [
        { id: 1, name: "lecture 11" },
        { id: 2, name: "lecture 22" },
      ],
    },
  ]);

  const [lectures, setLectures] = useState<Lecture[]>([
    { id: 1, name: "lecture 1" },
    { id: 2, name: "lecture 2" },
    { id: 3, name: "lecture 3" },
  ]);

  return (
    <div className="w-full">
      <div className=" p-6 flex flex-col gap-3">
        {sections.map((section, index) => {
          return (
            <Section key={index} number={index + 1} section={section}>
              {section.lectures?.map((lecture) => {
                return <Lecture key={lecture?.id} lecture={lecture} />;
              })}
            </Section>
          );
        })}
      </div>
    </div>
  );
}

function Section({
  children,
  number,
  section,
}: {
  children: React.ReactNode;
  number: number;
  section: Section;
}) {
  return (
    <div className="bg-gray-100 p-6 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/Menu.png" alt="menu" />
          <p>Section 0{number}:</p>
          <p>{section.name}</p>
        </div>
        <div className="flex gap-3">
          <button>
            <img src="/assets/AddCourseForm/Curriculum/Plus.png" alt="plus" />
          </button>
          <button>
            <img
              src="/assets/AddCourseForm/Curriculum/PencilLine.png"
              alt="pencil"
            />
          </button>
          <button>
            <img src="/assets/AddCourseForm/Curriculum/Trash.png" alt="trash" />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

function Lecture({ lecture }: { lecture: Lecture }) {
  return (
    <div className="flex justify-between p-3 bg-white">
      <div className="flex gap-2 items-center w-1/2">
        <img src="/Menu.png" alt="menu" />
        <h3>{lecture?.name}</h3>
      </div>

      <div className="flex gap-3">
        <select
          name="content"
          id="content"
          className="bg-primary-100 text-primary-500 p-3 px-5 text-center outline-none">
          <option value="0" disabled selected hidden>
            Contents
          </option>
          <option value="1">option 1</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
        </select>
        <button>
          <img src="/assets/AddCourseForm/Curriculum/Plus.png" alt="plus" />
        </button>
        <button>
          <img src="/assets/AddCourseForm/Curriculum/Trash.png" alt="trash" />
        </button>
      </div>
    </div>
  );
}
