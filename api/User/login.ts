"use server";

import { createClient } from "@/utils/supabase/server";
import { getProfile } from "./getCredentials";

export async function login({
  email,
  password,
  rememberMe,
}: {
  email: string;
  password: string;
  rememberMe: boolean;
}) {
  const supabase = createClient();
  const {error: sessionError, data: {session}} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (sessionError) throw new Error(sessionError.message);

  if(rememberMe) {
    console.log("Remember me is not implemented yet");
  }

  const profile = await getProfile();
  return profile;
}

export async function handleLogin(FormData: FormData): Promise<unknown> {
  const { email, password, rememberMe } = {
    email: String(FormData.get("email")),
    password: String(FormData.get("password")),
    rememberMe: Boolean(FormData.get("rememberMe")),
  };

  return login({ email, password, rememberMe });
}
