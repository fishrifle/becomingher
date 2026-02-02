"use client";

import { useUser } from "@clerk/nextjs";

export function useUserName() {
  const { user } = useUser();
  return user?.firstName || "beautiful";
}
