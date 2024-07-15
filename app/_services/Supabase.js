// supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kujrlnbxuqauimhsnikq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1anJsbmJ4dXFhdWltaHNuaWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NzMzODYsImV4cCI6MjAzNjU0OTM4Nn0.-WP0_Zh5HlFIZl4TexaQ0JHYPRH_0z7CJNp1N0aqepA";

export const supabase = createClient(supabaseUrl, supabaseKey);
