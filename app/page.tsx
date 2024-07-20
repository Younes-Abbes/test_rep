import { supabase } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const session = await supabase.auth.getSession();
  if (!session.data.session?.user) redirect("/login");
  redirect("/home");
}

export default Page;
