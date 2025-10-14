"use client";

import Link from "next/link";
import { useState } from "react";

interface YogaRoutine {
  id: number;
  title: string;
  duration: string;
  level: string;
  focus: string;
  description: string;
  benefits: string[];
}

export default function YogaPage() {
  const [selectedRoutine, setSelectedRoutine] = useState<number | null>(null);

  const routines: YogaRoutine[] = [
    {
      id: 1,
      title: "Morning Goddess Flow",
      duration: "20 minutes",
      level: "Beginner-Friendly",
      focus: "Energy & Feminine Grace",
      description: "Start your day with flowing movements that awaken feminine energy and set a graceful tone for the day ahead.",
      benefits: [
        "Activates feminine energy centers",
        "Improves flexibility and grace",
        "Boosts morning energy",
        "Enhances body awareness"
      ],
    },
    {
      id: 2,
      title: "Hip-Opening Flow",
      duration: "25 minutes",
      level: "All Levels",
      focus: "Hip Flexibility & Feminization",
      description: "Deep hip openers that support the body's natural feminization process and release stored emotions.",
      benefits: [
        "Supports fat redistribution to hips",
        "Releases emotional tension",
        "Increases hip flexibility",
        "Promotes feminine posture"
      ],
    },
    {
      id: 3,
      title: "Curves & Confidence",
      duration: "30 minutes",
      level: "Intermediate",
      focus: "Body Sculpting & Empowerment",
      description: "Strengthen and shape your body while building confidence in your feminine form.",
      benefits: [
        "Tones feminine muscle groups",
        "Builds core strength",
        "Enhances body confidence",
        "Improves posture and alignment"
      ],
    },
    {
      id: 4,
      title: "Evening Wind Down",
      duration: "15 minutes",
      level: "Beginner-Friendly",
      focus: "Relaxation & Self-Love",
      description: "Gentle stretches and restorative poses to help you unwind and practice self-care before bed.",
      benefits: [
        "Reduces stress and anxiety",
        "Promotes better sleep",
        "Encourages self-compassion",
        "Calms the nervous system"
      ],
    },
    {
      id: 5,
      title: "Chakra Alignment Flow",
      duration: "35 minutes",
      level: "All Levels",
      focus: "Energy Balance & Alignment",
      description: "Move through poses that activate and balance all seven chakras, with special attention to sacral and heart energy.",
      benefits: [
        "Balances energy centers",
        "Connects body and spirit",
        "Enhances intuition",
        "Promotes emotional healing"
      ],
    },
    {
      id: 6,
      title: "Gentle Yin Practice",
      duration: "40 minutes",
      level: "All Levels",
      focus: "Deep Stretching & Meditation",
      description: "Long-held, passive poses that work deep into connective tissues and create space for reflection.",
      benefits: [
        "Increases flexibility deeply",
        "Calms the mind",
        "Supports HRT changes",
        "Encourages introspection"
      ],
    },
  ];

  const selectedRoutineData = routines.find(r => r.id === selectedRoutine);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-pink-50/5 to-rose-50/5">
      {/* Header with decorative yoga pattern */}
      <header className="relative bg-gradient-to-r from-rose-100/10 via-pink-100/10 to-rose-100/10 backdrop-blur-sm border-b-2 border-pink-300/20 sticky top-0 z-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-pink-200/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
              🧘‍♀️ Yoga for Transformation ✨
            </h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction with visual background */}
        <div className="relative text-center mb-12 overflow-hidden rounded-3xl border-2 border-pink-300/30 p-8 bg-gradient-to-br from-pink-100/20 via-rose-100/20 to-pink-100/20">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="text-7xl mb-4">🧘‍♀️✨💕</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Your Girly Yoga Journey
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
              These gorgeous yoga routines are designed especially for trans girls like us!
              Support your transition, embrace feminine energy, and feel amazing in your body! 💖
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-pink-200/30 to-rose-200/30 border-2 border-pink-300/40 rounded-2xl p-4">
                <p className="text-sm text-foreground/90 font-semibold">
                  💪 Body Support: <span className="font-normal">Movements that work with HRT changes</span>
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-200/30 to-pink-200/30 border-2 border-pink-300/40 rounded-2xl p-4">
                <p className="text-sm text-foreground/90 font-semibold">
                  ✨ Energy Work: <span className="font-normal">Activate feminine energy</span>
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-200/30 to-rose-200/30 border-2 border-pink-300/40 rounded-2xl p-4">
                <p className="text-sm text-foreground/90 font-semibold">
                  💝 Self-Love: <span className="font-normal">Body acceptance & compassion</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Routines grid with visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {routines.map((routine, index) => (
            <div
              key={routine.id}
              className="group relative overflow-hidden bg-gradient-to-br from-pink-200/20 via-rose-200/20 to-pink-300/20 hover:from-pink-300/30 hover:via-rose-300/30 hover:to-pink-400/30 border-2 border-pink-400/40 hover:border-pink-500/60 rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-300/20 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedRoutine(routine.id)}
            >
              {/* Decorative blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:scale-105 transition-transform">
                    {routine.title}
                  </h3>
                  <span className="text-xs bg-pink-500/80 text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                    {routine.level}
                  </span>
                </div>
                <p className="text-sm text-white/90 drop-shadow-sm mb-4">
                  {routine.description}
                </p>
                <div className="flex items-center justify-between text-sm border-t border-white/20 pt-3">
                  <span className="text-white/80 font-medium">⏱️ {routine.duration}</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition-transform">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-accent/40 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-4">Yoga Tips for Your Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary">🌸 Honor Your Body</h4>
              <p className="text-sm text-foreground/70">
                Your body is changing. Some days you'll feel more flexible, other days less.
                Both are okay. Listen to what your body needs today.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">💫 Embrace Softness</h4>
              <p className="text-sm text-foreground/70">
                Yoga isn't about force. It's about flowing with grace and ease. Let your
                movements be soft, fluid, and feminine.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">🌙 Practice Regularly</h4>
              <p className="text-sm text-foreground/70">
                Even 10 minutes a day can make a difference. Consistency supports both
                your physical transition and emotional well-being.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">💝 Be Patient</h4>
              <p className="text-sm text-foreground/70">
                Progress takes time. Celebrate small victories like touching your toes
                or holding a pose longer than before.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Routine Detail Modal */}
      {selectedRoutine && selectedRoutineData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-background border border-primary/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {selectedRoutineData.title}
                  </h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {selectedRoutineData.level}
                  </span>
                </div>
                <p className="text-foreground/60 mb-2">{selectedRoutineData.focus}</p>
                <p className="text-sm text-foreground/50">⏱️ {selectedRoutineData.duration}</p>
              </div>
              <button
                onClick={() => setSelectedRoutine(null)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-foreground/70 mb-4">{selectedRoutineData.description}</p>
              <h4 className="font-semibold mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {selectedRoutineData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary mt-0.5">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/yoga/routine-${selectedRoutine}`}
              className="block w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-center py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Start Routine
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
