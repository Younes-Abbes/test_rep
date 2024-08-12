"use server";

import { supabase } from "@/utils/supabase/server";
import { headers } from "next/headers";

export async function signup(
  {
  username,
  email,
  password,
  first_name, 
  last_name,
}: {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) {
  const origin = headers().get("origin");

  const { data: {user: NEW}, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,      
    },
  });
  if (error) throw new Error(error.message);

  const {data : {publicUrl : image}} = await supabase.storage.from('images').getPublicUrl('default.jpg');

  const { error: profileError } = await supabase.from("profiles").insert([{ id: NEW?.id, first_name, last_name, username,phone_number: null, email: NEW?.email, avatar: image }]);
  if (profileError) throw new Error(`profile could not be created: ${profileError.message}`);
}

export const handleSignUp = async (formaData: FormData) => {
  const termsAndConditions = Boolean(formaData.get("termsAndConditions"));
  if (!termsAndConditions) {
    throw new Error("Please agree to the terms and conditions");
  }

  const { first_name, last_name,username, email, password, password2 } = {
    first_name: String(formaData.get("firstName")),
    last_name: String(formaData.get("lastName")),
    username: String(formaData.get("username")),
    email: String(formaData.get("email")),
    password: String(formaData.get("password")),
    password2: String(formaData.get("confirmPassword")),
  };

  if (password !== password2) {
    throw new Error("Passwords do not match");
  }

  

  signup({ first_name, last_name, username, email, password });
};
  