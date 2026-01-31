import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getUserSubscriptionTier } from "@/lib/subscription";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ tier: "free" }, { status: 401 });
    }

    const tier = await getUserSubscriptionTier(userId);
    return NextResponse.json({ tier });
  } catch {
    return NextResponse.json({ tier: "free" });
  }
}
