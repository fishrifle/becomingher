"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

type UserProfile = {
  preferred_name: string;
  transition_stage: string;
  goals: string[];
  onboarding_completed: boolean;
};

export function useUserProfile() {
  const { user, isLoaded } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded || !user) return;
    fetch("/api/profile")
      .then((r) => r.json())
      .then((d) => setProfile(d.profile))
      .finally(() => setLoading(false));
  }, [isLoaded, user]);

  return { profile, loading };
}
