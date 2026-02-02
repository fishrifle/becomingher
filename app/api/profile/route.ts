import { auth, clerkClient } from "@clerk/nextjs/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  return NextResponse.json({ profile: data });
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("user_profiles")
    .upsert(
      {
        user_id: userId,
        preferred_name: body.preferred_name,
        transition_stage: body.transition_stage,
        goals: body.goals,
        onboarding_completed: body.onboarding_completed ?? false,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    )
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // When onboarding completes, update Clerk metadata and firstName
  if (body.onboarding_completed) {
    const client = await clerkClient();
    const updates: { firstName?: string } = {};
    if (body.preferred_name) updates.firstName = body.preferred_name;

    await client.users.updateUser(userId, {
      ...updates,
      publicMetadata: { onboarded: true },
    });
  }

  return NextResponse.json({ profile: data });
}
