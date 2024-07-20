"use client";

import useSignUp from "@/hook/useSignUp";

export default function SignUpForm() {
  const { mutate, isPending } = useSignUp();

  if (isPending) return <p>Signing up...</p>;

  return (
    <form
      action={mutate}
      className="flex flex-col items-center p-6 bg-slate-500 rounded-2xl text-white">
      <div className="w-full items-start">
        <FormElement name="username" type="text" />
        <FormElement name="email" type="email" />
        <FormElement name="password" type="password" />
        <FormElement name="confirm" type="password" />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

function FormElement({ name, type }: { name: string; type: string }) {
  return (
    <div className="flex gap-4">
      <label htmlFor={name}>{name}</label>
      <input
        className="bg-inherit border border-red-500 mb-5"
        id={name}
        name={name}
        type={type}
      />
    </div>
  );
}
