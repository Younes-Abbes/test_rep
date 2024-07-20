"use server";
import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return user;
}
