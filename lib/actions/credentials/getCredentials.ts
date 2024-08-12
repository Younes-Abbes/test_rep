"use server";
import { Tables } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();
  const { data: {user}, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return user;
}

export async function getProfile(): Promise<Tables<'profiles'> | null> {
  const supabase = createClient();
  const {data: {user}, error} = await supabase.auth.getUser();
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();
    if (profileError) {throw new Error(profileError.message);};
  return profile as Tables<'profiles'>;
}

