import { createClient } from "@supabase/supabase-js";

// Server-side client with service role (full access, use only in API routes)
export function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
