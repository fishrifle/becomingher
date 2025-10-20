"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface GuideSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  transSpecific: boolean;
  bgClass: string;
}

export default function MakeupPage() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const guides: GuideSection[] = [
    {
      id: "basics",
      title: "Essential Basics",
      icon: "✨",
      description: "Start here! Learn the fundamental products and techniques every beginner needs.",
      transSpecific: true,
      bgClass: "from-pink-300/30 via-fuchsia-300/30 to-pink-300/30"
    },
    {
      id: "facial-feminization",
      title: "Facial Feminization Techniques",
      icon: "💄",
      description: "Contouring and highlighting techniques designed specifically for creating feminine facial features.",
      transSpecific: true,
      bgClass: "from-fuchsia-300/30 via-pink-300/30 to-rose-300/30"
    },
    {
      id: "eye-makeup",
      title: "Eye Makeup Mastery",
      icon: "👁️",
      description: "Create stunning eye looks from natural to dramatic. Includes eyeliner, eyeshadow, and lash tips.",
      transSpecific: false,
      bgClass: "from-purple-300/30 via-pink-300/30 to-fuchsia-300/30"
    },
    {
      id: "brows",
      title: "Beautiful Brows",
      icon: "🌙",
      description: "Shape, fill, and perfect your eyebrows to frame your face beautifully.",
      transSpecific: true,
      bgClass: "from-pink-300/30 via-purple-300/30 to-pink-300/30"
    },
    {
      id: "lips",
      title: "Lip Perfection",
      icon: "💋",
      description: "From subtle nudes to bold reds, learn to create the perfect lip look for any occasion.",
      transSpecific: true,
      bgClass: "from-rose-300/30 via-pink-300/30 to-fuchsia-300/30"
    },
    {
      id: "coverage",
      title: "Beard Cover & Coverage",
      icon: "🎨",
      description: "Specialized techniques for covering beard shadow and achieving flawless skin.",
      transSpecific: true,
      bgClass: "from-pink-300/30 via-rose-300/30 to-pink-400/30"
    },
    {
      id: "everyday-look",
      title: "Natural Everyday Look",
      icon: "🌸",
      description: "A fresh, natural makeup routine perfect for daily wear.",
      transSpecific: false,
      bgClass: "from-pink-200/30 via-rose-200/30 to-pink-300/30"
    },
    {
      id: "evening-glam",
      title: "Evening Glamour",
      icon: "✨",
      description: "Turn up the drama for special occasions and nights out.",
      transSpecific: false,
      bgClass: "from-fuchsia-300/30 via-purple-300/30 to-pink-400/30"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Makeup Guide
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Vanity Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border-2 border-pink-300/30">
          <div className="relative h-80">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80"
              alt="Beautiful makeup vanity with cosmetics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <div className="text-6xl mb-4">💅✨💄</div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
                Your Girly Makeup Vanity 💖
              </h2>
              <p className="text-lg text-white/95 max-w-2xl mx-auto mb-6 drop-shadow-lg">
                Welcome to your gorgeous makeup space, beautiful! 🎀 These guides are specially made
                for trans girls like us, with all the tips and tricks to help you feel absolutely stunning!
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl px-8 py-4">
                <p className="text-sm text-white/95 drop-shadow">
                  💕 <strong>Remember, gorgeous:</strong> Makeup is pure self-expression and FUN!
                  You're a beautiful girl with or without it! ✨
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Girly Vanity-Style Cards with Beautiful Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/makeup/${guide.id}`}
              className="group relative overflow-hidden rounded-3xl border-2 border-pink-400/40 hover:border-pink-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-300/20 hover:scale-105"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${guide.bgClass} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              {/* Sparkle decorative blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-fuchsia-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {guide.transSpecific && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs bg-pink-500/80 text-white px-3 py-1.5 rounded-full font-bold shadow-lg">
                      💕 Just for Us!
                    </span>
                  </div>
                )}
                <div className="text-6xl mb-4 drop-shadow-lg">{guide.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md group-hover:scale-105 transition-transform">
                  {guide.title}
                </h3>
                <p className="text-sm text-white/90 drop-shadow-sm mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center text-white font-bold text-sm">
                  Let's Go! ✨
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent/40 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6">General Tips & Advice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">🛍️ Start Small</h4>
                <p className="text-sm text-foreground/70">
                  You don't need every product! Start with basics: foundation, concealer, mascara,
                  and a lip color. Build your collection gradually.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">🌈 Find Your Shades</h4>
                <p className="text-sm text-foreground/70">
                  Get matched at a makeup counter (Sephora, Ulta, MAC). Staff are usually supportive
                  and can help you find your perfect foundation shade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">📱 Watch & Learn</h4>
                <p className="text-sm text-foreground/70">
                  YouTube and TikTok have amazing trans makeup artists. Search for "trans makeup
                  tutorial" to find techniques specific to your needs.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">💪 Practice Makes Perfect</h4>
                <p className="text-sm text-foreground/70">
                  Don't get discouraged if it looks different than expected at first. Makeup is a
                  skill that improves with practice!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">🧼 Skincare First</h4>
                <p className="text-sm text-foreground/70">
                  Good makeup starts with good skin. Cleanse, moisturize, and use primer before
                  applying makeup. HRT often makes skin drier, so hydrate!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">✨ Less is More</h4>
                <p className="text-sm text-foreground/70">
                  You can always add more, but it's hard to remove. Start with light application
                  and build up gradually.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-accent/30 border border-primary/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Recommended Product Starter Kit</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Face</h4>
              <ul className="space-y-1 text-foreground/70">
                <li>• Primer</li>
                <li>• Color corrector (orange/peach)</li>
                <li>• Full-coverage foundation</li>
                <li>• Concealer</li>
                <li>• Setting powder</li>
              </ul>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Eyes</h4>
              <ul className="space-y-1 text-foreground/70">
                <li>• Brow pencil/powder</li>
                <li>• Neutral eyeshadow palette</li>
                <li>• Eyeliner (pencil or gel)</li>
                <li>• Mascara</li>
              </ul>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Cheeks & Lips</h4>
              <ul className="space-y-1 text-foreground/70">
                <li>• Blush</li>
                <li>• Bronzer</li>
                <li>• Highlighter</li>
                <li>• Lip liner</li>
                <li>• Lipstick or gloss</li>
              </ul>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Tools</h4>
              <ul className="space-y-1 text-foreground/70">
                <li>• Beauty sponge</li>
                <li>• Foundation brush</li>
                <li>• Eyeshadow brushes</li>
                <li>• Setting spray</li>
                <li>• Makeup remover</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
