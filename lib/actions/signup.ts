"use server";

import { createClient } from "@/utils/supabase/server";

export async function signup({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });
  if (error) throw new Error(error.message);
}

export const handleSignUp = async (formaData: FormData) => {
  const { username, email, password } = {
    username: String(formaData.get("username")),
    email: String(formaData.get("email")),
    password: String(formaData.get("password")),
  };

  signup({ username, email, password });
};
