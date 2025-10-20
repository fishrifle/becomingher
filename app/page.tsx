"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    {
      name: "Hypnosis",
      href: "/hypnosis",
      icon: "🌙",
      description: "Guided hypnosis sessions",
      bgClass: "from-indigo-300/30 via-purple-300/30 to-pink-300/30"
    },
    {
      name: "Yoga",
      href: "/yoga",
      icon: "🧘‍♀️",
      description: "Yoga practices & routines",
      bgClass: "from-pink-300/30 via-rose-300/30 to-pink-300/30"
    },
    {
      name: "Makeup Guide",
      href: "/makeup",
      icon: "💄",
      description: "Step-by-step makeup tutorials",
      bgClass: "from-fuchsia-300/30 via-pink-300/30 to-rose-300/30"
    },
    {
      name: "Weekly Injection",
      href: "/injection",
      icon: "💉",
      description: "Hormone injection routine",
      bgClass: "from-purple-300/30 via-pink-300/30 to-purple-300/30"
    },
    {
      name: "Journal",
      href: "/journal",
      icon: "📝",
      description: "Track feelings & progress",
      bgClass: "from-rose-300/30 via-pink-300/30 to-fuchsia-300/30"
    },
    {
      name: "Photos",
      href: "/photos",
      icon: "📸",
      description: "Your journey in pictures",
      bgClass: "from-pink-300/30 via-purple-300/30 to-fuchsia-300/30"
    },
    {
      name: "Chakra Frequencies",
      href: "/chakra",
      icon: "🎵",
      description: "Healing sound frequencies",
      bgClass: "from-violet-300/30 via-purple-300/30 to-pink-300/30"
    },
    {
      name: "Mother AI",
      href: "/mother",
      icon: "💝",
      description: "Your AI support companion",
      bgClass: "from-pink-300/30 via-rose-300/30 to-pink-400/30"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-pink-50/5 to-purple-50/5">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-100/10 via-purple-100/10 to-pink-100/10 backdrop-blur-sm border-b-2 border-pink-300/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
              ✨ Becoming Her 💖
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="/pricing"
                className="hidden sm:block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                ✨ Go Premium
              </Link>
              <Link
                href="/sign-in"
                className="hidden sm:block px-4 py-2 rounded-lg border-2 border-pink-400 text-pink-500 font-semibold hover:bg-pink-50/10 transition-all"
              >
                Sign In
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="sm:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-accent/50 backdrop-blur-sm border-b border-primary/20">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="block px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="mr-2">{section.icon}</span>
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero section with image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border-2 border-pink-300/30">
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600&q=80"
              alt="Beautiful woman in feminine clothes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <div className="text-6xl mb-6">💕✨🌸</div>
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
                Welcome, Beautiful! 💖
              </h2>
              <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg">
                Your gorgeous girly space to blossom, grow, and embrace the amazing woman you are!
                Made with love especially for trans girls like us on our HRT journey! 🎀✨
              </p>
            </div>
          </div>
        </div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="group relative overflow-hidden rounded-3xl border-2 border-pink-400/40 hover:border-pink-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-300/20 hover:scale-105"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.bgClass} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              {/* Sparkle overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="text-5xl sm:text-6xl mb-4 drop-shadow-lg">{section.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white drop-shadow-md group-hover:scale-105 transition-transform">
                  {section.name}
                </h3>
                <p className="text-white/90 drop-shadow-sm group-hover:text-white transition-colors">
                  {section.description}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-white drop-shadow-md"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100/10 via-purple-100/10 to-pink-100/10 border-t-2 border-pink-300/20 py-6 sm:py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
          <p className="text-sm sm:text-base">
            Made with SO much love for your beautiful transformation journey 💕✨🌸
          </p>
          <p className="text-xs sm:text-sm mt-2 text-pink-400">
            You're doing amazing, gorgeous! Keep being you! 💖
          </p>
        </div>
      </footer>
    </div>
  );
}
