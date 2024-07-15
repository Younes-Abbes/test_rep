import { supabase } from "./supabase";

export async function getNames() {
  let { data: names, error } = await supabase.from("names").select("*");
  if (error) throw new Error("error has happened !");
  return names;
}
