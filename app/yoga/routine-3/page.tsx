"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUserName } from "@/lib/useUserName";

export default function Routine3() {
  const userName = useUserName();
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    {
      name: "Wide-Legged Forward Fold (Prasarita Padottanasana)",
      duration: "1.5 minutes",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      instructions: [
        "Step feet wide apart, about 3-4 feet",
        "Turn toes slightly inward",
        "Inhale, lengthen your spine",
        "Exhale, hinge at the hips and fold forward",
        "Bring hands to the floor or to your shins",
        "Let your head hang heavy, releasing neck tension",
        "Press into the outer edges of your feet"
      ],
      benefits: "Stretches inner thighs and hamstrings, strengthens legs, calms the mind",
      feminine_focus: "Feel the strength in your legs as you surrender into the fold. You are both powerful and graceful."
    },
    {
      name: "Goddess Pose (Utkata Konasana)",
      duration: "1.5 minutes",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      instructions: [
        "Step feet wide, turn toes out at 45 degrees",
        "Bend knees deeply over your toes",
        "Sink hips down to knee height",
        "Bring arms up with elbows bent at 90 degrees",
        "Engage your core and keep spine tall",
        "Breathe deeply into your belly and hips",
        "Hold with fierce feminine power"
      ],
      benefits: "Strengthens legs, glutes, and core, opens hips, builds confidence",
      feminine_focus: "You are a goddess. Feel divine feminine power radiating from your center. Own your strength."
    },
    {
      name: "Chair Pose (Utkatasana)",
      duration: "1 minute",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad33?w=800&q=80",
      instructions: [
        "Stand with feet together or hip-width apart",
        "Bend your knees as if sitting into a chair",
        "Shift weight into your heels",
        "Reach arms overhead, biceps by ears",
        "Draw your belly in and up",
        "Keep knees tracking over toes",
        "Hold and breathe through the fire"
      ],
      benefits: "Strengthens thighs, glutes, and core, builds endurance and mental resilience",
      feminine_focus: "Feel the heat building in your legs. This fire is shaping your body and your confidence."
    },
    {
      name: "Warrior III (Virabhadrasana III)",
      duration: "45 seconds each side",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      instructions: [
        "From standing, shift weight onto your right foot",
        "Hinge forward at the hips as you lift your left leg behind you",
        "Reach arms forward alongside your ears",
        "Create one long line from fingertips to lifted heel",
        "Flex the lifted foot, engage the standing leg",
        "Find a focal point for balance",
        "Repeat on the other side"
      ],
      benefits: "Strengthens legs, core, and back, improves balance and focus",
      feminine_focus: "You are a warrior woman. Balanced, strong, and graceful all at once."
    },
    {
      name: "Bridge Pose (Setu Bandhasana)",
      duration: "1.5 minutes",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&q=80",
      instructions: [
        "Lie on your back, knees bent, feet hip-width apart",
        "Place arms alongside your body, palms down",
        "Press feet into the floor, lift hips toward the ceiling",
        "Roll your shoulders underneath you",
        "Interlace fingers under your back if comfortable",
        "Squeeze your glutes at the top",
        "Hold and breathe, keeping hips lifted"
      ],
      benefits: "Strengthens glutes and hamstrings, opens chest and hip flexors, shapes curves",
      feminine_focus: "Every lift is sculpting your body. Feel your curves being shaped with intention and love."
    },
    {
      name: "Side Plank (Vasisthasana)",
      duration: "45 seconds each side",
      image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&q=80",
      instructions: [
        "Start in a high plank position",
        "Shift weight onto your right hand and outer right foot",
        "Stack left foot on top of right",
        "Extend left arm toward the ceiling",
        "Keep hips lifted, body in one straight line",
        "Engage your obliques and breathe",
        "Modify by dropping the bottom knee if needed"
      ],
      benefits: "Strengthens core, shoulders, and obliques, builds a defined waistline",
      feminine_focus: "You are sculpting your waist with every breath. Feel your body becoming the shape you envision."
    },
    {
      name: "Locust Pose (Salabhasana)",
      duration: "1 minute",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
      instructions: [
        "Lie face down, arms alongside your body",
        "Press the tops of your feet into the floor",
        "Inhale, lift your chest, arms, and legs off the ground",
        "Reach fingertips toward your heels",
        "Squeeze shoulder blades together",
        "Engage your glutes and back muscles",
        "Hold for several breaths, then release"
      ],
      benefits: "Strengthens back, glutes, and hamstrings, improves posture",
      feminine_focus: "A strong back creates beautiful posture. Feel yourself rising with confidence and grace."
    },
    {
      name: "Curtsy Lunge",
      duration: "1 minute each side",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
      instructions: [
        "Stand with feet hip-width apart",
        "Step your right foot behind and to the left of your left foot",
        "Bend both knees like a curtsy",
        "Keep your chest lifted and core engaged",
        "Press through your front heel to return to standing",
        "Repeat 8-10 times, then switch sides",
        "Add arm movements for extra flow"
      ],
      benefits: "Targets glutes, inner thighs, and outer hips for feminine curves",
      feminine_focus: "Each curtsy is a bow to your own beauty. You are sculpting the body you deserve."
    },
    {
      name: "Fire Hydrant Pose",
      duration: "1 minute each side",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      instructions: [
        "Come to hands and knees in tabletop",
        "Keeping knee bent at 90 degrees, lift right knee out to the side",
        "Lift until thigh is parallel to the floor",
        "Hold at the top for a breath",
        "Slowly lower back down",
        "Repeat 10-12 times, then switch sides",
        "Keep core engaged and hips level throughout"
      ],
      benefits: "Strengthens and shapes glutes, opens hips, builds outer hip curves",
      feminine_focus: "Your hips are beautiful. Each movement shapes and strengthens them with love."
    },
    {
      name: "Final Savasana with Body Gratitude",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      instructions: [
        "Lie on your back, legs extended and relaxed",
        "Arms at your sides, palms facing up",
        "Close your eyes and take three deep breaths",
        "Thank your legs for their strength",
        "Thank your core for its stability",
        "Thank your entire body for showing up today",
        "Rest here, feeling proud of what you accomplished"
      ],
      benefits: "Integrates the workout, reduces stress, cultivates body gratitude",
      feminine_focus: `You did it, ${userName}. Your body is strong, beautiful, and becoming more you every single day. Good girl.`
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
              <h1 className="text-xl sm:text-2xl font-bold">Curves & Confidence</h1>
              <p className="text-sm text-foreground/60">30 minutes - Intermediate</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80"
            alt="Woman doing a strength-building yoga pose"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Curves & Confidence</h2>
              <p className="text-lg">Strengthen and shape your body while building unshakeable confidence</p>
            </div>
          </div>
        </div>

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

        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6 border border-primary/20">
            <Image
              src={poses[currentPose].image}
              alt={poses[currentPose].name}
              fill
              className="object-contain bg-accent/10"
            />
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
            Previous Pose
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
              Next Pose
            </button>
          )}
        </div>

        <div className="mt-8 bg-accent/20 border border-primary/10 rounded-xl p-6">
          <h3 className="font-semibold mb-3">Practice Notes:</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>This routine focuses on building strength and shaping feminine curves.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>If a pose feels too intense, reduce the hold time or take a rest.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Consistency matters more than intensity. Show up for yourself regularly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Celebrate your body at every stage of your journey.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
