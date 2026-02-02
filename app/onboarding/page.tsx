"use client";

import { useState, useEffect } from "react";
import { useUser, useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const TRANSITION_STAGES = [
  { value: "pre-hrt", label: "Pre-HRT / Exploring", emoji: "🌱" },
  { value: "just-started", label: "Just Started HRT", emoji: "🌸" },
  { value: "6-months", label: "6+ Months HRT", emoji: "💐" },
  { value: "1-year", label: "1+ Year HRT", emoji: "🌺" },
  { value: "2-years", label: "2+ Years HRT", emoji: "🦋" },
  { value: "not-on-hrt", label: "Not on HRT", emoji: "✨" },
];

const GOALS = [
  { value: "feminization", label: "Feminization", emoji: "🌸" },
  { value: "confidence", label: "Confidence", emoji: "💪" },
  { value: "self-love", label: "Self-Love", emoji: "💕" },
  { value: "voice-training", label: "Voice Training", emoji: "🎤" },
  { value: "body-shaping", label: "Body Shaping", emoji: "🧘‍♀️" },
  { value: "mindfulness", label: "Mindfulness", emoji: "🧘" },
  { value: "community", label: "Community", emoji: "👯‍♀️" },
];

export default function OnboardingPage() {
  const { user, isLoaded } = useUser();
  const { session } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);
  const [saving, setSaving] = useState(false);

  const [preferredName, setPreferredName] = useState("");
  const [transitionStage, setTransitionStage] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  useEffect(() => {
    if (isLoaded && user) {
      setPreferredName(user.firstName || "");
    }
  }, [isLoaded, user]);

  const goTo = (nextStep: number) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setStep(nextStep);
      setVisible(true);
      setAnimating(false);
    }, 300);
  };

  const toggleGoal = (value: string) => {
    setGoals((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleComplete = async () => {
    setSaving(true);
    try {
      await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          preferred_name: preferredName,
          transition_stage: transitionStage,
          goals,
          onboarding_completed: true,
        }),
      });
      // Force Clerk to refresh the session token so middleware sees updated metadata
      await session?.reload();
      // Small delay to ensure the new token propagates
      await new Promise((r) => setTimeout(r, 500));
      window.location.href = "/";
    } catch {
      setSaving(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50/30 via-purple-50/20 to-pink-50/30">
        <div className="text-4xl animate-gentle-pulse">🦋</div>
      </div>
    );
  }

  const stageLabel = TRANSITION_STAGES.find((s) => s.value === transitionStage);
  const selectedGoals = GOALS.filter((g) => goals.includes(g.value));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-pink-50/30 via-purple-50/20 to-pink-50/30">
      {/* Progress dots */}
      <div className="flex gap-2 mb-8">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i <= step
                ? "bg-gradient-to-r from-pink-400 to-purple-400 scale-110"
                : "bg-foreground/20"
            }`}
          />
        ))}
      </div>

      {/* Step content */}
      <div
        className={`w-full max-w-md transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {step === 0 && (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-2">🦋</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome, gorgeous!
            </h1>
            <p className="text-foreground/70 text-lg">
              What should we call you?
            </p>
            <input
              type="text"
              value={preferredName}
              onChange={(e) => setPreferredName(e.target.value)}
              placeholder="Your name"
              className="w-full px-6 py-4 text-xl text-center rounded-2xl border-2 border-pink-300/40 bg-white/50 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300/30 transition-all placeholder:text-foreground/30"
              autoFocus
            />
            <p className="text-sm text-foreground/50">
              This is how we'll address you throughout the app
            </p>
            <button
              onClick={() => goTo(1)}
              disabled={!preferredName.trim()}
              className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-40 disabled:hover:scale-100"
            >
              Continue
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="text-center space-y-6">
            <div className="text-5xl mb-2">💖</div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Where are you in your journey?
            </h2>
            <p className="text-foreground/70">
              This helps us personalize your experience
            </p>
            <div className="grid grid-cols-2 gap-3">
              {TRANSITION_STAGES.map((stage) => (
                <button
                  key={stage.value}
                  onClick={() => setTransitionStage(stage.value)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                    transitionStage === stage.value
                      ? "border-pink-400 bg-pink-100/40 shadow-lg shadow-pink-200/30 scale-[1.02]"
                      : "border-foreground/10 bg-white/30 hover:border-pink-300/50 hover:bg-white/50"
                  }`}
                >
                  <div className="text-2xl mb-1">{stage.emoji}</div>
                  <div className="text-sm font-medium">{stage.label}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => goTo(0)}
                className="flex-1 py-3 rounded-2xl border-2 border-foreground/10 hover:border-pink-300/50 transition-all"
              >
                Back
              </button>
              <button
                onClick={() => goTo(2)}
                disabled={!transitionStage}
                className="flex-1 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-40 disabled:hover:scale-100"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-6">
            <div className="text-5xl mb-2">✨</div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What are you most excited about?
            </h2>
            <p className="text-foreground/70">Pick as many as you want!</p>
            <div className="grid grid-cols-2 gap-3">
              {GOALS.map((goal) => (
                <button
                  key={goal.value}
                  onClick={() => toggleGoal(goal.value)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left relative ${
                    goals.includes(goal.value)
                      ? "border-pink-400 bg-pink-100/40 shadow-lg shadow-pink-200/30 scale-[1.02]"
                      : "border-foreground/10 bg-white/30 hover:border-pink-300/50 hover:bg-white/50"
                  }`}
                >
                  {goals.includes(goal.value) && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="text-2xl mb-1">{goal.emoji}</div>
                  <div className="text-sm font-medium">{goal.label}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => goTo(1)}
                className="flex-1 py-3 rounded-2xl border-2 border-foreground/10 hover:border-pink-300/50 transition-all"
              >
                Back
              </button>
              <button
                onClick={() => goTo(3)}
                disabled={goals.length === 0}
                className="flex-1 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-40 disabled:hover:scale-100"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6 animate-fade-slide-up">
            <div className="text-7xl mb-2">🦋</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome, {preferredName}!
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              You're in the right place. We're so glad you're here, and we're honored
              to be part of your journey.
            </p>

            {stageLabel && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/50 border border-pink-300/30">
                <span>{stageLabel.emoji}</span>
                <span className="text-sm font-medium">{stageLabel.label}</span>
              </div>
            )}

            {selectedGoals.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {selectedGoals.map((g) => (
                  <span
                    key={g.value}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-100/50 border border-purple-300/30 text-sm"
                  >
                    <span>{g.emoji}</span> {g.label}
                  </span>
                ))}
              </div>
            )}

            <p className="text-foreground/60 text-sm italic">
              Everything here is designed with love, just for you.
            </p>

            <button
              onClick={handleComplete}
              disabled={saving}
              className="w-full py-4 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all shadow-xl animate-gentle-pulse disabled:animate-none disabled:opacity-70"
            >
              {saving ? "Setting things up..." : "Let's Begin 💖"}
            </button>

            <button
              onClick={() => goTo(2)}
              disabled={saving}
              className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors"
            >
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
