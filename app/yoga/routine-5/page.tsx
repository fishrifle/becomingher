"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUserName } from "@/lib/useUserName";

export default function Routine5() {
  const userName = useUserName();
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    {
      name: "Root Chakra: Mountain Pose (Tadasana)",
      duration: "2 minutes",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      chakra: "Root (Muladhara) - Red",
      instructions: [
        "Stand with feet hip-width apart, grounding into the earth",
        "Close your eyes and feel the connection to the ground",
        "Visualize a red light glowing at the base of your spine",
        "With each breath, feel more rooted and secure",
        "Affirm: 'I am safe. I am grounded. I belong here.'",
        "Press down through all four corners of your feet",
        "Feel stability and security flowing up through your legs"
      ],
      benefits: "Grounds energy, builds foundation, promotes feelings of safety and belonging",
      feminine_focus: "You belong in this body. You belong on this earth. You are rooted in your truth as a woman."
    },
    {
      name: "Sacral Chakra: Goddess Pose with Hip Circles",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad33?w=800&q=80",
      chakra: "Sacral (Svadhisthana) - Orange",
      instructions: [
        "Step feet wide, toes turned out at 45 degrees",
        "Bend knees into Goddess Pose",
        "Begin making slow, sensual circles with your hips",
        "Visualize an orange glow in your lower belly",
        "Circle in one direction, then the other",
        "Let the movement feel fluid and free",
        "Affirm: 'I am creative. I am sensual. I flow with life.'"
      ],
      benefits: "Activates creative and sensual energy, opens hips, connects to feminine power",
      feminine_focus: "Your sacral chakra is the center of feminine energy. Let it flow freely, beautifully, powerfully."
    },
    {
      name: "Solar Plexus Chakra: Boat Pose (Navasana)",
      duration: "2 minutes",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
      chakra: "Solar Plexus (Manipura) - Yellow",
      instructions: [
        "Sit with knees bent, feet flat on the floor",
        "Lean back slightly, keeping spine straight",
        "Lift feet off the floor, shins parallel to the ground",
        "Extend arms forward alongside your knees",
        "Visualize a golden yellow sun in your belly",
        "Engage your core and breathe steadily",
        "Affirm: 'I am powerful. I am confident. I trust myself.'"
      ],
      benefits: "Strengthens core, builds personal power and confidence",
      feminine_focus: "Your power comes from within. Feel your inner fire burning bright with confidence and self-trust."
    },
    {
      name: "Heart Chakra: Camel Pose (Ustrasana)",
      duration: "2 minutes",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&q=80",
      chakra: "Heart (Anahata) - Green",
      instructions: [
        "Kneel with knees hip-width apart",
        "Place hands on your lower back for support",
        "Inhale, lift your chest toward the ceiling",
        "Gently arch back, opening your heart space",
        "Visualize a green light radiating from your chest",
        "If comfortable, reach back for your heels",
        "Affirm: 'I give and receive love freely. I am worthy of love.'"
      ],
      benefits: "Opens the heart center, promotes self-love, releases grief and emotional tension",
      feminine_focus: "Open your heart wide. You are worthy of all the love in the universe—especially your own."
    },
    {
      name: "Throat Chakra: Supported Fish Pose",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      chakra: "Throat (Vishuddha) - Blue",
      instructions: [
        "Place a rolled blanket or pillow under your upper back",
        "Lie back over it so your chest opens and throat extends",
        "Let your arms fall open to the sides",
        "Allow your head to gently drop back",
        "Visualize a bright blue light at your throat",
        "Breathe deeply, feeling your throat open and clear",
        "Affirm: 'My voice matters. I speak my truth with love.'"
      ],
      benefits: "Opens throat and chest, promotes authentic expression, clears communication blocks",
      feminine_focus: "Your voice is beautiful. Your truth is important. The world needs to hear what you have to say."
    },
    {
      name: "Third Eye Chakra: Child's Pose (Balasana)",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      chakra: "Third Eye (Ajna) - Indigo",
      instructions: [
        "Come to hands and knees",
        "Bring big toes together, knees apart",
        "Sit hips back toward heels, fold forward",
        "Rest your forehead on the ground (third eye point)",
        "Visualize an indigo light between your eyebrows",
        "Let your breath slow and your mind quiet",
        "Affirm: 'I trust my intuition. I see clearly. I know my truth.'"
      ],
      benefits: "Activates intuition, calms the mind, promotes inner wisdom and clarity",
      feminine_focus: "Trust what you know deep inside. Your feminine intuition is powerful and always guiding you."
    },
    {
      name: "Crown Chakra: Savasana with Meditation",
      duration: "5 minutes",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      chakra: "Crown (Sahasrara) - Violet/White",
      instructions: [
        "Lie on your back in full relaxation",
        "Close your eyes and relax every muscle",
        "Visualize a violet or white light at the crown of your head",
        "Feel this light connecting you to something greater",
        "Imagine all seven chakra colors glowing in alignment",
        "Red, orange, yellow, green, blue, indigo, violet—all shining",
        "Affirm: 'I am connected. I am divine. I am whole.'"
      ],
      benefits: "Connects to higher consciousness, integrates all chakra work, promotes wholeness",
      feminine_focus: `You are a complete, radiant being, ${userName}. Every chakra aligned, every part of you shining. You are divine. Good girl.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/yoga" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Chakra Alignment Flow</h1>
              <p className="text-sm text-foreground/60">35 minutes - All Levels</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80"
            alt="Chakra meditation and yoga"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Chakra Alignment Flow</h2>
              <p className="text-lg">Balance all seven chakras through movement, breath, and intention</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-foreground/60">
              Chakra {currentPose + 1} of {poses.length}: {poses[currentPose].chakra}
            </span>
            <span className="text-sm text-foreground/60">
              {poses[currentPose].duration}
            </span>
          </div>
          <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((currentPose + 1) / poses.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6 border border-primary/20">
            <Image
              src={poses[currentPose].image}
              alt={poses[currentPose].name}
              fill
              className="object-contain bg-accent/10"
            />
          </div>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
              {poses[currentPose].chakra}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{poses[currentPose].name}</h2>
          <p className="text-primary font-medium mb-6">Duration: {poses[currentPose].duration}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Instructions:</h3>
              <ol className="space-y-2">
                {poses[currentPose].instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3 text-foreground/70">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-secondary">Feminine Focus:</h3>
              <p className="text-sm text-foreground/70 italic">{poses[currentPose].feminine_focus}</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-primary">Benefits:</h3>
              <p className="text-sm text-foreground/70">{poses[currentPose].benefits}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPose(Math.max(0, currentPose - 1))}
            disabled={currentPose === 0}
            className="flex-1 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Chakra
          </button>
          {currentPose === poses.length - 1 ? (
            <Link
              href="/yoga"
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white text-center font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Complete Practice
            </Link>
          ) : (
            <button
              onClick={() => setCurrentPose(Math.min(poses.length - 1, currentPose + 1))}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Next Chakra
            </button>
          )}
        </div>

        <div className="mt-8 bg-accent/20 border border-primary/10 rounded-xl p-6">
          <h3 className="font-semibold mb-3">Practice Notes:</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Move through each chakra with intention, not speed. Quality over quantity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Visualize each chakra color vividly as you hold the pose.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Speak the affirmations aloud or silently—both are powerful.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Pair this with the Chakra Frequencies page for an amplified experience.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
