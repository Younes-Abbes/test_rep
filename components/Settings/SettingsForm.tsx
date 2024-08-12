"use client";
import { handleAccountUpdate } from "@/lib/actions/Data/updateData";
import { Tables } from "@/types/supabase";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

export default function SettingsForm({
  profile,
}: {
  profile: Tables<"profiles">;
}) {
  const { mutate: update, isPending } = useMutation({
    mutationFn: handleAccountUpdate,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Account updated successfully");
    },
  });

  if (isPending) return <p>Loading...</p>;

  return (
    <form className="flex flex-col md:flex-row gap-6" action={update}>
      <FormImage profile={profile} />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormElement label="firstName" name="First name" type="text" />
          <FormElement label="lastName" name="Last name" type="text" />
        </div>
        <FormElement label="username" name="Username" type="text" />
        <FormElement label="email" name="Email" type="email" />
        <FormElement
          label="title"
          name="Title"
          type="text"
          placeholder="Your title, profession or small biography"
          maxLength={50}
        />
        <FormButton />
      </div>
    </form>
  );
}

function FormElement({
  label,
  name,
  type,
  placeholder = null,
  maxLength = Infinity,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string | null;
  maxLength?: number;
}) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <input
        id={label}
        name={name}
        type={type}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder={placeholder ?? name}
        maxLength={maxLength}
      />
    </div>
  );
}

function FormButton() {
  toast.success("something happened");
  return (
    <div className="mt-6">
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
        Save Changes
      </button>
    </div>
  );
}

function FormImage({ profile }: { profile: Tables<"profiles"> }) {
  return (
    <div className="flex flex-col items-center bg-primary-100 p-5">
      <div className="relative">
        <img
          src={profile.avatar ?? ""}
          alt="Profile Picture"
          className=" object-cover"
        />
        <label
          htmlFor="avatar"
          className="absolute bottom-0 px-4 py-2  text-sm bg-gray-300 transition-all duration-500 hover:bg-opacity-70 bg-opacity-50 w-full">
          <div className="flex gap-2 items-center justify-center">
            <img src="/UploadSimple.png" alt="upload button" className="" />
            <p>Upload Photo</p>
          </div>
        </label>
      </div>
      <input
        id="avatar"
        name="avatar"
        type="file"
        className="hidden"
        required></input>
      <p className="text-xs text-gray-500 mt-2">
        Image size should be under 1MB and image ratio needs to be 1:1
      </p>
    </div>
  );
}
