import { createClient } from "@supabase/supabase-js";

// For Vite, environment variables must start with `VITE_` in .env
// Then we access them with `import.meta.env.<VARIABLE_NAME>`
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key in your environment variables!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);