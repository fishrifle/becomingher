"use client";

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";

export default function PremiumGate({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<"free" | "premium" | "loading">("loading");

  useEffect(() => {
    fetch("/api/subscription")
      .then((res) => res.json())
      .then((data) => setTier(data.tier || "free"))
      .catch(() => setTier("free"));
  }, []);

  if (tier === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (tier === "free") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center p-8 rounded-3xl border-2 border-pink-300/40 bg-gradient-to-br from-pink-100/20 via-purple-100/20 to-pink-100/20">
          <div className="text-6xl mb-4">💎</div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Premium Content
          </h2>
          <p className="text-foreground/70 mb-6">
            This feature is available to Premium members. Upgrade to unlock your full transformation journey.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg"
          >
            View Plans
          </Link>
          <Link
            href="/"
            className="block mt-4 text-sm text-foreground/60 hover:text-pink-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
