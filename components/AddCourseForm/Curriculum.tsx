"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCorners,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
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
      id: 11,
      name: "section 1",
      lectures: [
        { id: 1, name: "lecture 1" },
        { id: 2, name: "lecture 2" },
      ],
    },
    {
      id: 22,
      name: "section 2",
      lectures: [
        { id: 3, name: "lecture 11" },
        { id: 4, name: "lecture 22" },
      ],
    },
    {
      id: 33,
      name: "section 3",
      lectures: [
        { id: 5, name: "lecture 111" },
        { id: 6, name: "lecture 222" },
      ],
    },
  ]);

  const [activeId, setActiveId] = useState<number | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as number);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeSection = sections.findIndex(
      (section) => section.id === active.id
    ); // if active gives a number if not gives -1
    const overSection = sections.findIndex((section) => section.id === over.id); // if over gives a number if not gives -1
    const sectionOfActiveLecture = sections.findIndex((section) =>
      section.lectures.some((lecture) => lecture.id === active.id)
    ); // if over gives a number if not gives -1
    const sectionOfOverLecture = sections.findIndex((section) =>
      section.lectures.some((lecture) => lecture.id === over.id)
    ); // if over gives a number if not gives -1
    console.log(
      "activeSection",
      activeSection,
      "\noverSection",
      overSection,
      "\nsectionOfActiveLecture",
      sectionOfActiveLecture,
      "\nsectionOfOverLecture",
      sectionOfOverLecture
    );

    if (activeSection !== -1 && overSection !== -1) {
      const updatedSections = arrayMove(sections, activeSection, overSection);
      setSections(updatedSections);
      return;
    }

    if (
      sectionOfActiveLecture !== -1 &&
      sectionOfOverLecture === sectionOfActiveLecture
    ) {
      const activeLecture = sections[sectionOfActiveLecture].lectures.findIndex(
        (lecture) => lecture.id === active.id
      );
      const overLecture = sections[sectionOfOverLecture].lectures.findIndex(
        (lecture) => lecture.id === over.id
      );
      const currentSection = sections[sectionOfActiveLecture];
      const updatedLectures = arrayMove(
        currentSection.lectures,
        activeLecture,
        overLecture
      );
      const updatedSections = [...sections];
      updatedSections[sectionOfActiveLecture].lectures = updatedLectures;
      setSections(updatedSections);
    } else if (
      sectionOfActiveLecture !== -1 &&
      sectionOfOverLecture !== -1 &&
      sectionOfOverLecture !== sectionOfActiveLecture
    ) {
      const activeLecture = sections[sectionOfActiveLecture].lectures.find(
        (lecture) => lecture.id === active.id
      );

      if (activeLecture) {
        const updatedSections = [...sections];

        updatedSections[sectionOfActiveLecture].lectures = updatedSections[
          sectionOfActiveLecture
        ].lectures.filter((lecture) => lecture.id !== active.id);

        const overSectionIndex = sections.findIndex((section) =>
          section.lectures.some((lecture) => lecture.id === over.id)
        );

        const overLectureIndex = sections[overSectionIndex].lectures.findIndex(
          (lecture) => lecture.id === over.id
        );

        updatedSections[overSectionIndex].lectures.splice(
          overLectureIndex,
          0,
          activeLecture
        );

        setSections(updatedSections);
      }
    } else {
      const activeSectionIndex = sections.findIndex((section) =>
        section.lectures.some((lecture) => lecture.id === active.id)
      );
      const activeLecture = sections[activeSectionIndex].lectures.find(
        (lecture) => lecture.id === active.id
      );

      if (activeLecture) {
        const updatedSections = [...sections];
        const updatedActiveLectures = updatedSections[
          activeSectionIndex
        ].lectures.filter((lecture) => lecture.id !== active.id);
        updatedSections[overSection].lectures.push(activeLecture);
        updatedSections[activeSectionIndex].lectures = updatedActiveLectures;
        setSections(updatedSections);
      }
    }
  };

  const activeLecture = activeId
    ? sections
        .flatMap((section) => section.lectures)
        .find((lecture) => lecture.id === activeId)
    : null;

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
      <SortableContext items={sections} strategy={verticalListSortingStrategy}>
        <div className="w-full">
          <div className="p-6 flex flex-col gap-3">
            {sections.map((section, index) => (
              <SortableSection
                key={section.id}
                number={index + 1}
                section={section}
              />
            ))}
          </div>
        </div>
      </SortableContext>

      <DragOverlay>
        {activeLecture ? (
          <div className="flex justify-between p-3 bg-white shadow-lg">
            <div className="flex gap-2 items-center w-1/2">
              <img src="/Menu.png" alt="menu" />
              <h3>{activeLecture.name}</h3>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableSection({
  number,
  section,
}: {
  number: number;
  section: Section;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="bg-gray-100 p-6 flex flex-col gap-3"
      style={style}
      ref={setNodeRef}>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/Menu.png" alt="menu" {...listeners} {...attributes} />
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

      <SortableContext
        items={section.lectures}
        strategy={verticalListSortingStrategy}>
        {section.lectures.map((lecture) => (
          <SortableLecture key={lecture.id} lecture={lecture} />
        ))}
      </SortableContext>
    </div>
  );
}

function SortableLecture({ lecture }: { lecture: Lecture }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: lecture.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="flex justify-between p-3 bg-white"
      style={style}
      ref={setNodeRef}>
      <div className="flex gap-2 items-center w-1/2">
        <img src="/Menu.png" alt="menu" {...attributes} {...listeners} />
        <h3>{lecture.name}</h3>
      </div>

      <div className="flex gap-3">
        <select
          defaultValue={0}
          name="content"
          id="content"
          className="bg-primary-100 text-primary-500 p-3 px-5 text-center outline-none">
          <option value="0" disabled hidden>
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
