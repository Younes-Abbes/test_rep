import { Tables } from "@/types/supabase";
import React from "react";
import SettingsForm from "./SettingsForm";
import ChangePasswordForm from "./ChangePasswordForm";

export default function SettingsView() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* this is the settings form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col items-center min-h-44">
        <h2 className="text-2xl font-semibold mb-4 w-full">Account settings</h2>
        <SettingsForm />
      </div>
      {/* this is the password form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Change password</h2>
        <ChangePasswordForm />
      </div>
    </div>
  );
}
