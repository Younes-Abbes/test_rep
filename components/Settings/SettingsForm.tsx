"use client";

import { handleAccountUpdate } from "@/api/forms/updateData";
import { useProfile } from "@/queries/profileQuery";
import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Others/Spinner";

export default function SettingsForm() {
  const queryClient = useQueryClient();
  const { data: profile } = useProfile();
  const { mutate: update, isPending } = useMutation({
    mutationFn: handleAccountUpdate,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Account updated successfully");
    },
  });
  if (isPending) return <Spinner />;

  return (
    <form className="flex flex-col md:flex-row gap-6" action={update}>
      <FormImage profile={profile} />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormElement
            label="firstName"
            name="First name"
            type="text"
            defaultValue={profile?.first_name ?? ""}
          />
          <FormElement
            label="lastName"
            name="Last name"
            type="text"
            defaultValue={profile?.last_name ?? ""}
          />
        </div>
        <FormElement
          label="username"
          name="Username"
          type="text"
          defaultValue={profile?.username ?? ""}
        />
        <FormElement
          label="email"
          name="Email"
          type="email"
          defaultValue={profile?.email ?? ""}
        />
        <FormElement
          label="phoneNumber"
          name="phoneNumber"
          type="number"
          defaultValue={profile?.phone_number ?? 0}
        />
        <FormElement
          label="title"
          name="title"
          type="text"
          placeholder="Your title, profession or small biography"
          maxLength={50}
          defaultValue={profile?.tittle ?? ""}
        />
        <div className="mt-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Save Changes
          </button>
        </div>
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
  defaultValue = "",
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string | null;
  maxLength?: number;
  defaultValue?: string | number;
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
        name={label}
        type={type}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder={placeholder ?? name}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
    </div>
  );
}

function FormImage({
  profile,
}: {
  profile: Tables<"profiles"> | null | undefined;
}) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center  p-5">
      <div className="relative w-60 h-w-60">
        <img
          src={imageSrc ?? profile?.avatar ?? ""}
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
        className="w-0 h-0"
        onChange={handleImageChange}
      />
      <p className="text-xs text-gray-500 mt-2">
        Image size should be under 1MB and image ratio needs to be 1:1
      </p>
    </div>
  );
}
