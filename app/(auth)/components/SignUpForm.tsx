"use client";

import useSignUp from "@/hooks/credentials/useSignUp";
import Link from "next/link";

export default function SignUpForm() {
  const { mutate, isPending } = useSignUp();

  if (isPending) return <p>Signing up...</p>;

  return (
    <div className="flex flex-col gap-3 bg-secondary-100 items-center">
      <span className="font-semibold text-4xl">Create your account</span>
      <form
        action={mutate}
        className="flex flex-col items-start p-6 rounded-2xl text-white w-10/12">
        <div className="w-full items-start">
          <FormElement
            label="full Name"
            type="text"
            name1="firstName"
            name2="lastName"
            inputs={true}
            placeholder1="First Name..."
            placeholder2="Last Name"
          />
          <FormElement
            label="Username"
            type="text"
            name1="username"
            placeholder1="Username..."
          />
          <FormElement
            label="Email"
            type="email"
            name1="email"
            placeholder1="Email Address"
          />
          <FormElement
            label="Password"
            type="password"
            name1="password"
            placeholder1="Create password"
            inputs={true}
            name2="confirmPassword"
            placeholder2="Confirm password"
          />
        </div>
        <div className="text-sm text-black flex justify-between w-full ">
          <div className="flex gap-3 items-center relative w-full">
            <label className="container ">
              <input type="checkbox" name="termsAndConditions" />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"></path>
              </svg>
            </label>
            <span className="absolute left-10">
              I Agree with all of your{" "}
              <Link className="text-secondary-500" href="/termsAndConditions">
                Terms & Conditions
              </Link>
            </span>
          </div>
          <button
            className="text-secondary-500 bg-secondary-200 p-3 min-w-36 text-center rounded-md font-semibold"
            type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

function FormElement({
  label,
  type,
  name1 = "",
  name2,
  inputs = false,
  placeholder1,
  placeholder2 = "",
}: {
  label: string;
  type: string;
  name1: string;
  name2?: string;
  inputs?: boolean;
  placeholder1: string;
  placeholder2?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <div className="flex gap-4">
        <input
          type={type}
          name={name1}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder1}
        />
        {inputs && (
          <input
            type={type}
            name={name2}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={placeholder2}
          />
        )}
      </div>
    </div>
  );
}
