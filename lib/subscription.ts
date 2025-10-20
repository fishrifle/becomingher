// Premium content gating utilities

export type SubscriptionTier = "free" | "premium";

// Features available for each tier
export const FEATURES = {
  free: {
    hrtTracking: "basic",
    makeupTutorials: 3,
    yogaSessions: "basics",
    journalAccess: true,
    photos: 10,
    aiCompanion: false,
    hypnosis: 0,
    chakraFrequencies: false,
    prioritySupport: false,
  },
  premium: {
    hrtTracking: "advanced",
    makeupTutorials: "unlimited",
    yogaSessions: "full",
    journalAccess: true,
    photos: "unlimited",
    aiCompanion: true,
    hypnosis: "all",
    chakraFrequencies: true,
    prioritySupport: true,
  },
};

// Check if user has access to a feature
export function hasAccess(
  userTier: SubscriptionTier,
  feature: keyof typeof FEATURES.premium
): boolean {
  if (userTier === "premium") return true;

  const freeFeature = FEATURES.free[feature];
  return freeFeature !== false && freeFeature !== 0;
}

// Check if content is premium
export function isPremiumContent(contentType: string): boolean {
  const premiumContent = [
    "mother", // AI companion
    "hypnosis/session-4",
    "hypnosis/session-5",
    "hypnosis/session-6",
    "chakra",
    "yoga/advanced",
    "makeup/evening-glam",
    "makeup/facial-feminization",
  ];

  return premiumContent.some((premium) => contentType.includes(premium));
}

// Get user's subscription tier (mock for now - replace with database lookup)
export async function getUserSubscriptionTier(userId: string): Promise<SubscriptionTier> {
  // TODO: Replace with actual database lookup
  // For now, return "free" - you'll implement database storage later
  return "free";
}
