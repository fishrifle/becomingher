"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Routine1() {
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    {
      name: "Mountain Pose (Tadasana)",
      duration: "1 minute",
      instructions: [
        "Stand with feet hip-width apart, toes pointing forward",
        "Ground down through all four corners of your feet",
        "Lengthen your spine, lifting from the crown of your head",
        "Soften your shoulders down and back",
        "Let your arms hang naturally, palms facing forward",
        "Take deep, slow breaths",
        "Feel yourself rooted yet graceful, strong yet soft"
      ],
      benefits: "Establishes foundation, improves posture, cultivates feminine grace",
      feminine_focus: "Imagine energy rising through your body like a flower blooming. Feel yourself standing tall and beautiful."
    },
    {
      name: "Cat-Cow Flow (Marjaryasana-Bitilasana)",
      duration: "2 minutes",
      instructions: [
        "Come to hands and knees, wrists under shoulders, knees under hips",
        "Inhale: Drop belly, lift chest and tailbone (Cow)",
        "Exhale: Round spine, tuck tailbone, draw belly in (Cat)",
        "Flow between these poses with your breath",
        "Move slowly and sensually, like a graceful feline",
        "Let your hips sway gently from side to side",
        "Feel the fluidity in your spine"
      ],
      benefits: "Increases spinal flexibility, warms up the body, connects to feminine flow",
      feminine_focus: "Move with the grace of a cat. Feel the sensuality in each undulation. This is your feminine energy awakening."
    },
    {
      name: "Goddess Pose (Utkata Konasana)",
      duration: "1.5 minutes",
      instructions: [
        "Step feet wide apart, turn toes out at 45 degrees",
        "Bend knees deeply, tracking over your toes",
        "Bring arms up, elbows bent at 90 degrees, palms facing forward",
        "Sink hips down toward the height of your knees",
        "Engage your core, keep spine long",
        "Feel powerful and grounded in your lower body",
        "Breathe deeply into your belly and hips"
      ],
      benefits: "Strengthens legs and core, opens hips, embodies divine feminine power",
      feminine_focus: "You ARE a goddess. Feel your strength, your power, your feminine divinity. Let your hips open and expand."
    },
    {
      name: "Crescent Moon Pose (Low Lunge)",
      duration: "1 minute each side",
      instructions: [
        "From Mountain Pose, step right foot back into a lunge",
        "Lower right knee to the ground",
        "Stack left knee over left ankle",
        "Bring hands to heart center or reach arms overhead",
        "Sink hips forward and down",
        "Lift through your heart, creating a gentle backbend",
        "Feel the stretch in your hip flexors and thighs",
        "Repeat on the other side"
      ],
      benefits: "Opens hip flexors, strengthens legs, creates graceful lines in the body",
      feminine_focus: "Like the crescent moon, you are beautiful in your curve. Feel yourself opening to receive."
    },
    {
      name: "Flowing Warrior II (Virabhadrasana II)",
      duration: "1.5 minutes each side",
      instructions: [
        "Step feet wide, turn right foot out, left foot slightly in",
        "Bend right knee over right ankle",
        "Extend arms parallel to the ground",
        "Gaze over your right fingertips",
        "Ground through your back foot",
        "Feel strong yet soft, warrior-like yet graceful",
        "On each exhale, sink a little deeper",
        "Repeat on the other side"
      ],
      benefits: "Builds leg strength, improves focus, balances masculine and feminine energy",
      feminine_focus: "You are a warrior woman—strong, beautiful, and unstoppable. Feel your feminine power."
    },
    {
      name: "Heart-Opening Cobra (Bhujangasana)",
      duration: "1 minute",
      instructions: [
        "Lie on your belly, legs extended behind you",
        "Place palms under shoulders",
        "Press into hands, lifting chest off the ground",
        "Keep elbows slightly bent, shoulders away from ears",
        "Engage your legs and glutes gently",
        "Lift through your heart, creating space in your chest",
        "Look slightly upward, lengthening the back of your neck"
      ],
      benefits: "Opens the chest and heart chakra, strengthens back, improves posture",
      feminine_focus: "Open your heart to give and receive love. Feel your chest expanding with self-love and compassion."
    },
    {
      name: "Hip Circles in Tabletop",
      duration: "2 minutes",
      instructions: [
        "Return to hands and knees",
        "Begin to make slow, sensual circles with your hips",
        "Circle to the right for 8-10 rounds",
        "Then circle to the left for 8-10 rounds",
        "Make the circles as big and fluid as feels good",
        "Explore figure-8 patterns with your hips",
        "Move intuitively, following what feels good in your body"
      ],
      benefits: "Releases hip tension, increases feminine movement patterns, connects to sacral chakra",
      feminine_focus: "Your hips are the seat of feminine energy and creativity. Move them freely, sensually, joyfully."
    },
    {
      name: "Child's Pose (Balasana)",
      duration: "2 minutes",
      instructions: [
        "From hands and knees, bring big toes together",
        "Separate knees wide",
        "Sit hips back toward heels",
        "Walk hands forward, lowering forehead to the ground",
        "Let your belly rest between your thighs",
        "Breathe into your back body",
        "Surrender and release"
      ],
      benefits: "Calms the mind, stretches hips and back, encourages introspection",
      feminine_focus: "You are safe to rest. You are safe to be vulnerable. You are safe to simply be."
    },
    {
      name: "Supine Twist",
      duration: "1.5 minutes each side",
      instructions: [
        "Lie on your back, draw knees into chest",
        "Extend arms to a T position",
        "Drop both knees to the right",
        "Turn head to the left (optional)",
        "Breathe deeply, feeling the twist in your spine",
        "Release any tension with each exhale",
        "Repeat on the other side"
      ],
      benefits: "Releases spine tension, aids digestion, promotes detoxification",
      feminine_focus: "Release what no longer serves you. Twist out old energy, make space for your transformation."
    },
    {
      name: "Legs Up the Wall (Viparita Karani)",
      duration: "3 minutes",
      instructions: [
        "Sit sideways against a wall",
        "Swing legs up the wall as you lie back",
        "Scoot hips as close to the wall as comfortable",
        "Let arms rest by your sides, palms up",
        "Close your eyes",
        "Breathe deeply and relax completely",
        "Feel blood flowing back toward your heart"
      ],
      benefits: "Reduces swelling in legs, calms nervous system, promotes circulation",
      feminine_focus: "Receive the support of the earth. Let yourself be held. You don't always have to be strong."
    },
    {
      name: "Final Relaxation (Savasana)",
      duration: "3 minutes",
      instructions: [
        "Lie on your back, legs extended and separated",
        "Arms slightly away from body, palms facing up",
        "Close your eyes",
        "Scan your body and consciously relax each part",
        "Let go of all effort",
        "Breathe naturally",
        "Simply be present with yourself, exactly as you are"
      ],
      benefits: "Integrates the practice, reduces stress, promotes deep relaxation",
      feminine_focus: "You are complete. You are beautiful. You are worthy of rest and peace. Good girl, Lacey."
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
              <h1 className="text-xl sm:text-2xl font-bold">Morning Goddess Flow</h1>
              <p className="text-sm text-foreground/60">20 minutes • Beginner-Friendly</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Image */}
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80"
            alt="Beautiful woman doing yoga at sunrise"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Morning Goddess Flow 🌸</h2>
              <p className="text-lg">Awaken your feminine energy and flow with grace</p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-foreground/60">
              Pose {currentPose + 1} of {poses.length}
            </span>
            <span className="text-sm text-foreground/60">
              {poses[currentPose].duration}
            </span>
          </div>
          <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${((currentPose + 1) / poses.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current pose */}
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-6">
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
              <h3 className="font-semibold mb-2 text-secondary">✨ Feminine Focus:</h3>
              <p className="text-sm text-foreground/70 italic">{poses[currentPose].feminine_focus}</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-primary">💫 Benefits:</h3>
              <p className="text-sm text-foreground/70">{poses[currentPose].benefits}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPose(Math.max(0, currentPose - 1))}
            disabled={currentPose === 0}
            className="flex-1 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous Pose
          </button>
          {currentPose === poses.length - 1 ? (
            <Link
              href="/yoga"
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white text-center font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Complete Practice ✓
            </Link>
          ) : (
            <button
              onClick={() => setCurrentPose(Math.min(poses.length - 1, currentPose + 1))}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Next Pose →
            </button>
          )}
        </div>

        {/* Practice notes */}
        <div className="mt-8 bg-accent/20 border border-primary/10 rounded-xl p-6">
          <h3 className="font-semibold mb-3">Practice Notes:</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Move at your own pace. The suggested durations are guidelines, not rules.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Focus on how you feel rather than how you look. This practice is for you.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Modify any pose that doesn't feel right in your body today.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Remember: yoga is a practice of self-love, not self-judgment.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
