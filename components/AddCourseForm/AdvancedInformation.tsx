"use client";

import { Dispatch, SetStateAction, useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function AdvancedInformation() {
  const [teach, setTeach] = useState<number>(0);
  const [audience, setAudience] = useState<number>(0);
  const [requirements, setRequirements] = useState<number>(0);

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg overflow-scroll max-h-[70vh] w-full">
      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6  ">
          <FormFile
            header="Course Thumbnail"
            icon="/assets/AddCourseForm/AdvancedInformations/Icon.png"
            name="thumbnail"
            text="Upload your course Thumbnail here. Important guidelines: 1200x800
            pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png"
          />
          <FormFile
            text="Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos."
            name="trailer"
            header="Course Trailer"
            icon="/assets/AddCourseForm/AdvancedInformations/secondIcon.png"
          />
        </div>
        <RichTextEditor />
        <FormList
          setter={setTeach}
          number={teach}
          placeholder="What will you teach in this course"
          header="What will you teach in this course"
          max={8}
        />
        <FormList
          setter={setAudience}
          number={audience}
          placeholder="Target Audience"
          header="Target Audience"
          max={8}
        />
        <FormList
          setter={setRequirements}
          number={requirements}
          placeholder="What is your course requirements..."
          header="Course requirements"
          max={8}
        />
        <FormButtons />
      </form>
    </div>
  );
}

function FormFile({
  header,
  icon,
  name,
  text,
}: {
  header: string;
  icon: string;
  name: string;
  text: string;
}) {
  const [img, setImg] = useState<string>(icon);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-700 mb-2">{header}</h2>
      <div className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer flex items-center gap-6 h-48">
        <img src={img} alt="pic" className="w-52 h-36" />

        <div className="flex flex-col  gap-5">
          <p className="text-gray-500 text-start">{text}</p>
          <div className="bg-primary-500 flex flex-row justify-center items-center w-1/2 text-primary-100">
            <label htmlFor={name} className="px-4 py-2 rounded-md text-center ">
              Upload Image
            </label>
            <img src="/UploadSimple.png" className="" alt="upload" />
            <input
              type="file"
              id={name}
              name={name}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FormList({
  setter,
  number,
  placeholder,
  header,
  max,
}: {
  setter: Dispatch<SetStateAction<number>>;
  number: number;
  placeholder: string;
  header: string;
  max: number;
}) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        {header} ({number}/{max})
      </label>
      {Array.from({ length: number }).map((_, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="w-10 text-gray-500 text-center">{index + 1}</div>
          <input
            type="text"
            placeholder={placeholder}
            className="flex-grow p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ))}
      <button
        type="button"
        className="text-orange-500"
        onClick={() => setter((a) => (a == max ? a : a + 1))}>
        + Add new
      </button>
    </div>
  );
}

function FormButtons() {
  return (
    <div className="flex justify-between">
      <button
        type="button"
        className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 font-medium py-2 px-4 rounded-md">
        Previous
      </button>
      <button
        type="submit"
        className="text-white bg-orange-500 hover:bg-orange-600 font-medium py-2 px-4 rounded-md">
        Save & Next
      </button>
    </div>
  );
}
