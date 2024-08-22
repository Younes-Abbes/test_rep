"use client";
import { useProfile } from "@/queries/profileQuery";
import Link from "next/link";
import React from "react";

export default function StudentInformations() {
  const { data: profile } = useProfile();
  console.log("profile", profile);

  return (
    <div className="flex  p-7 items-center gap-10 justify-between w-full">
      <div className="flex gap-5">
        <div>
          <img
            src={profile?.avatar ?? ""}
            alt="avatar"
            className="w-32 rounded-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <span className="text-3xl font-semibold">{profile?.username}</span>
          <p className="text-gray-500 text-wrap">{profile?.tittle}</p>
        </div>
      </div>
      <div>
        <Link
          href="/becomeAnInstructor"
          className="bg-primary-100 text-primary-500 p-3">
          Become an Instructor &rarr;
        </Link>
      </div>
    </div>
  );
}
