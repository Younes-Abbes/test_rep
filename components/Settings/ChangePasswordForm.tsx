import React from "react";

export default function ChangePasswordForm() {
  return (
    <form>
      <FormElement
        label="Current Password"
        name="currentPassword"
        placeholder="Password"
      />

      <FormElement
        label="New Password"
        name="newPassword"
        placeholder="type your new Password"
      />

      <FormElement
        label="Confirm New Password"
        name="confirmNewPassword"
        placeholder="confirm your new Password"
      />

      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
        Change Password
      </button>
    </form>
  );
}

function FormElement({
  label,
  name,
  placeholder = null,
}: {
  label: string;
  name: string;
  placeholder?: string | null;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        type="password"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder={placeholder ?? label}
      />
    </div>
  );
}
