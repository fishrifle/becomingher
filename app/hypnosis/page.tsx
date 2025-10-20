"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface HypnosisSession {
  id: number;
  title: string;
  duration: string;
  focus: string;
  description: string;
  color: string;
}

export default function HypnosisPage() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null);

  const sessions: HypnosisSession[] = [
    {
      id: 1,
      title: "Awakening Your Authentic Self",
      duration: "30 minutes",
      focus: "Self-discovery & acceptance",
      description: "Begin your journey of self-discovery. This session helps you connect with your true self and embrace who you're becoming.",
      color: "from-pink-300 to-purple-300",
    },
    {
      id: 2,
      title: "Embracing Femininity",
      duration: "30 minutes",
      focus: "Feminine energy & grace",
      description: "Tap into your feminine energy and let it flow naturally through you. Feel graceful, confident, and beautifully authentic.",
      color: "from-purple-300 to-blue-300",
    },
    {
      id: 3,
      title: "Body Harmony & Acceptance",
      duration: "30 minutes",
      focus: "Body positivity & HRT support",
      description: "Celebrate the changes happening in your body. Find peace and excitement in your transformation journey.",
      color: "from-blue-300 to-teal-300",
    },
    {
      id: 4,
      title: "Confidence & Self-Love",
      duration: "30 minutes",
      focus: "Self-esteem & empowerment",
      description: "Build unshakeable confidence. You are worthy, beautiful, and deserving of love—especially your own.",
      color: "from-teal-300 to-green-300",
    },
    {
      id: 5,
      title: "Voice & Presence",
      duration: "30 minutes",
      focus: "Authentic expression",
      description: "Find your authentic voice and presence. Express yourself with confidence and grace in every situation.",
      color: "from-green-300 to-yellow-300",
    },
    {
      id: 6,
      title: "Deep Self-Acceptance",
      duration: "30 minutes",
      focus: "Unconditional self-love",
      description: "Experience profound self-acceptance. You are perfect exactly as you are, and you're becoming even more yourself.",
      color: "from-yellow-300 to-pink-300",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hypnosis Sessions
            </h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Image Introduction */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border-2 border-purple-300/30">
          <div className="relative h-72">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
              alt="Peaceful woman meditating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <div className="text-5xl mb-4">🌙✨</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
                Guided Hypnosis for Transformation
              </h2>
              <p className="text-lg text-white/95 max-w-2xl mx-auto mb-6 drop-shadow-lg">
                These sessions are designed specifically for you, Lacey. Each one
                is crafted to support your journey of becoming your authentic self.
                Find a quiet, comfortable space and allow yourself to relax deeply.
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg px-6 py-3">
                <p className="text-sm text-white/95 drop-shadow">
                  💡 <strong>Tip:</strong> Use headphones for the best experience.
                  Never listen while driving or operating machinery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="group relative bg-accent/30 hover:bg-accent/50 border border-primary/20 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedSession(session.id)}
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${session.color} mb-4 flex items-center justify-center text-2xl`}
              >
                {session.id}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {session.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-3">
                {session.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/50">⏱️ {session.duration}</span>
                <span className="text-primary font-medium">Listen →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected session details */}
        {selectedSession && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-background border border-primary/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {sessions.find((s) => s.id === selectedSession)?.title}
                </h3>
                <button
                  onClick={() => setSelectedSession(null)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <Link
                href={`/hypnosis/session-${selectedSession}`}
                className="block w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-center py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                Begin Session
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
