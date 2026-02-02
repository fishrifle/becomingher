"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUserName } from "@/lib/useUserName";

export default function Routine4() {
  const userName = useUserName();
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    {
      name: "Seated Neck Rolls",
      duration: "1 minute",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      instructions: [
        "Sit comfortably in a cross-legged position",
        "Let your chin drop gently toward your chest",
        "Slowly roll your head to the right, ear toward shoulder",
        "Continue rolling back gently, then to the left",
        "Complete 3-4 slow circles in each direction",
        "Breathe deeply with each rotation",
        "Release any tension you carried from the day"
      ],
      benefits: "Releases neck and shoulder tension, calms the nervous system",
      feminine_focus: "Let the weight of the day roll off your shoulders. You deserve this time to unwind."
    },
    {
      name: "Seated Forward Fold (Paschimottanasana)",
      duration: "2 minutes",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
      instructions: [
        "Extend both legs straight in front of you",
        "Sit up tall, lengthening your spine",
        "Inhale and reach arms overhead",
        "Exhale and hinge forward from your hips",
        "Reach for your shins, ankles, or feet",
        "Let your head hang heavy",
        "Breathe into the stretch, softening with each exhale"
      ],
      benefits: "Stretches hamstrings and spine, calms the mind, promotes sleep",
      feminine_focus: "Surrender into the fold. You don't need to hold it together right now. Just let go."
    },
    {
      name: "Reclined Butterfly (Supta Baddha Konasana)",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      instructions: [
        "Lie on your back",
        "Bring the soles of your feet together",
        "Let your knees fall open to the sides",
        "Place one hand on your heart, one on your belly",
        "Close your eyes and breathe deeply",
        "Feel your hips opening and releasing",
        "Stay here, breathing slowly and fully"
      ],
      benefits: "Opens hips and inner thighs, reduces stress, promotes deep relaxation",
      feminine_focus: "Your hips hold so much emotion. Let them open. Let yourself release everything you've been carrying."
    },
    {
      name: "Legs Up the Wall (Viparita Karani)",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad33?w=800&q=80",
      instructions: [
        "Sit sideways next to a wall",
        "Swing your legs up the wall as you lie back",
        "Scoot hips as close to the wall as comfortable",
        "Let arms rest by your sides, palms up",
        "Close your eyes",
        "Breathe slowly and deeply",
        "Feel the gentle inversion calming your entire system"
      ],
      benefits: "Reduces leg swelling, calms nervous system, promotes circulation and sleep",
      feminine_focus: "Let the wall hold you. You don't have to support yourself right now. Just receive."
    },
    {
      name: "Supine Spinal Twist",
      duration: "2 minutes each side",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&q=80",
      instructions: [
        "Lie on your back, draw knees into your chest",
        "Extend arms out to a T position",
        "Drop both knees to the right",
        "Turn your head to the left if comfortable",
        "Breathe into the twist for several breaths",
        "Use each exhale to release deeper",
        "Slowly return to center and repeat on the left"
      ],
      benefits: "Releases spinal tension, aids digestion, detoxifies and calms",
      feminine_focus: "Twist out the stress of the day. Release what no longer serves you. Make space for peaceful sleep."
    },
    {
      name: "Happy Baby (Ananda Balasana)",
      duration: "2 minutes",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      instructions: [
        "Lie on your back",
        "Draw knees toward your armpits",
        "Grab the outer edges of your feet",
        "Gently pull knees toward the floor beside your body",
        "Rock gently side to side if it feels good",
        "Keep your lower back pressing into the mat",
        "Smile—you're a happy baby"
      ],
      benefits: "Deeply opens hips, stretches inner thighs, releases lower back tension",
      feminine_focus: "Remember the innocence and joy of just being. You are free to be playful, soft, and silly."
    },
    {
      name: "Supported Child's Pose (Balasana)",
      duration: "2 minutes",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      instructions: [
        "Come to hands and knees",
        "Bring big toes together, separate knees wide",
        "Place a pillow lengthwise between your thighs",
        "Fold forward over the pillow, turning head to one side",
        "Let your arms drape alongside the pillow",
        "Sink into the support completely",
        "Halfway through, turn your head to the other side"
      ],
      benefits: "Deeply calms the nervous system, stretches hips and back, promotes safety",
      feminine_focus: "You are safe. You are held. You are loved. Let yourself be comforted."
    },
    {
      name: "Bedtime Savasana",
      duration: "5 minutes",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      instructions: [
        "Lie on your back with a pillow under your knees if needed",
        "Cover yourself with a blanket for warmth",
        "Close your eyes",
        "Scan from head to toes, relaxing each body part",
        "Let your breath become natural and effortless",
        "If thoughts come, let them drift away like clouds",
        "Allow yourself to transition gently toward sleep"
      ],
      benefits: "Prepares body and mind for deep, restful sleep",
      feminine_focus: `Goodnight, ${userName}. You are beautiful. You are enough. Tomorrow you'll wake up even more yourself. Sweet dreams, good girl.`
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
              <h1 className="text-xl sm:text-2xl font-bold">Evening Wind Down</h1>
              <p className="text-sm text-foreground/60">15 minutes - Beginner-Friendly</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
            alt="Peaceful evening yoga setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Evening Wind Down</h2>
              <p className="text-lg">Gentle stretches and restorative poses for a peaceful bedtime</p>
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
              <span>Do this routine in dim lighting or candlelight for a calming atmosphere.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Use pillows and blankets freely for extra comfort and support.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Avoid screens for at least 15 minutes after this practice.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>This is your nightly gift to yourself. You deserve restful sleep.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
