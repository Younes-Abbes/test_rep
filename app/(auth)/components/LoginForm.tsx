"use client";

import { useLogin } from "@/hooks/credentials/useLogin";
import { QueryProvider } from "@/Contexts/useQueryProvider";

export default function LoginForm() {
  return (
    <QueryProvider>
      <Form />
    </QueryProvider>
  );
}

function Form() {
  const { mutate, isPending } = useLogin();

  if (isPending) return <p>Logging in...</p>;

  return (
    <form
      action={mutate}
      className="flex flex-col items-start p-6 w-[65%] rounded-2xl ">
      <label htmlFor="email">Email:</label>
      <input
        className="bg-inherit border border-red-500 mb-5 w-full p-2"
        id="email"
        name="email"
        type="email"
        placeholder="Username or email adress..."
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        className="bg-inherit border border-red-500 mb-5 w-full p-2"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <label>remember me </label>
      <input type="checkbox" name="rememberMe" />

      <button type="submit">Login</button>
    </form>
  );
}
