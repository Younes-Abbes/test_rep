"use server";

import { createClient } from "@/utils/supabase/server";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
}

export async function handleLogin(FormData: FormData): Promise<unknown> {
  const { email, password } = {
    email: String(FormData.get("email")),
    password: String(FormData.get("password")),
  };

  return login({ email, password });
}
