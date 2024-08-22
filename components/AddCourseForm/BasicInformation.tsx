import { useMutation } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { toast } from "react-toastify";
import Spinner from "../Others/Spinner";
import { handleBasicInformation } from "@/api/forms/addData";

export default function BasicInformation({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: handleBasicInformation,
    onSuccess: () => {
      toast.success("Success");
      setPage("Advanced Information");
    },
    onError: () => toast.error("error"),
  });
  if (isPending) return <Spinner />;

  return (
    <form
      action={mutate}
      className="mx-auto p-6 bg-white shadow-md rounded-lg h-auto flex flex-col w-full gap-6">
      <FormText
        label="Title"
        name="title"
        placeholder="Your course title"
        maxLength={80}
      />
      <FormText
        label="Subtitle"
        name="subtitle"
        placeholder="Your course subtitle"
        maxLength={120}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Course Category"
          name="courseCategory"
          defaultValue="1">
          <FormOption name="select ..." value="1" />
          <FormOption name="select2 ..." value="2" />
          <FormOption name="select3 ..." value="3" />
        </FormSelect>
        <FormSelect
          label="Course Sub-category"
          name="subCourseCategory"
          defaultValue="1">
          <FormOption name="select ..." value="1" />
          <FormOption name="select2 ..." value="2" />
          <FormOption name="select3 ..." value="3" />
        </FormSelect>
      </div>
      <FormText
        label="Course Topic"
        name="topic"
        placeholder="What is primarily taught in your course?"
        maxLength={0}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FormSelect label="Course Language" name="language" defaultValue="1">
          <FormOption name="select ..." value="1" />
          <FormOption name="select2 ..." value="2" />
          <FormOption name="select3 ..." value="3" />
        </FormSelect>
        <FormSelect
          label="Subtitle Language (Optional)"
          name="subLanguage"
          defaultValue="1">
          <FormOption name="select ..." value="1" />
          <FormOption name="select2 ..." value="2" />
          <FormOption name="select3 ..." value="3" />
        </FormSelect>
        <FormSelect label="Course Level" name="level" defaultValue="1">
          <FormOption name="select ..." value="1" />
          <FormOption name="select2 ..." value="2" />
          <FormOption name="select3 ..." value="3" />
        </FormSelect>
        <FormSelect label="Durations" name="duration" defaultValue="1">
          <FormOption name="select ..." value="1" />
          <FormOption name="select2 ..." value="2" />
          <FormOption name="select3 ..." value="3" />
        </FormSelect>
      </div>
      <FormButtons />
    </form>
  );
}

function FormText({
  label,
  name,
  placeholder = "",
  maxLength = 0,
}: {
  label: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <div className="">
      <label className=" block text-sm font-medium text-gray-700 ">
        {label}
      </label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
      />
      {maxLength !== 0 && (
        <div className="text-sm text-gray-500 text-right">{maxLength}</div>
      )}
    </div>
  );
}

function FormSelect({
  children,
  label,
  name,
  defaultValue = "",
}: {
  children: ReactNode;
  label: string;
  name: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        name={name}
        className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
        {children}
      </select>
    </div>
  );
}

function FormOption({ value, name }: { value: string; name: string }) {
  return <option value={value}>{name}</option>;
}

function FormButtons() {
  return (
    <div className="flex justify-between">
      <button
        type="button"
        className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 font-medium py-2 px-4 rounded-md">
        Cancel
      </button>
      <button
        type="submit"
        className="text-white bg-orange-500 hover:bg-orange-600 font-medium py-2 px-4 rounded-md">
        Save & Next
      </button>
    </div>
  );
}
