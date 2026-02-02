"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUserName } from "@/lib/useUserName";

export default function Routine6() {
  const userName = useUserName();
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    {
      name: "Seated Meditation",
      duration: "3 minutes",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      instructions: [
        "Sit comfortably on a cushion or folded blanket",
        "Close your eyes and bring awareness to your breath",
        "Set an intention for this practice: to soften, to open, to release",
        "Let go of the need to do or achieve anything",
        "Simply be present with yourself",
        "Notice any areas of tension without trying to change them",
        "Breathe into those spaces with compassion"
      ],
      benefits: "Centers the mind, sets intention, transitions from doing to being",
      feminine_focus: "This practice is about being, not doing. You have nothing to prove. Just be here."
    },
    {
      name: "Butterfly Pose (Baddha Konasana)",
      duration: "5 minutes",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      instructions: [
        "Bring the soles of your feet together, knees falling open",
        "Sit on a cushion if your hips feel tight",
        "Let gravity draw your knees toward the floor",
        "You can fold forward gently if it feels good",
        "Rest your hands on your feet or ankles",
        "Close your eyes and breathe deeply",
        "Stay for the full duration, letting your hips open gradually"
      ],
      benefits: "Deeply opens hips and inner thighs, stimulates sacral chakra, calms the mind",
      feminine_focus: "Your hips are the gateway to feminine energy. Let them open in their own time, at their own pace."
    },
    {
      name: "Supported Pigeon Pose (Eka Pada Rajakapotasana)",
      duration: "4 minutes each side",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad33?w=800&q=80",
      instructions: [
        "From hands and knees, slide right knee forward behind right wrist",
        "Extend left leg straight behind you",
        "Place a pillow or blanket under your right hip for support",
        "Walk hands forward and lower onto your forearms or a pillow",
        "Let your hips sink with gravity—don't force",
        "Breathe into any sensation, letting it soften",
        "Stay here, then switch sides"
      ],
      benefits: "Deep hip opener, releases stored emotions, stretches hip flexors and glutes",
      feminine_focus: "Hips store emotion—grief, fear, joy, love. Let whatever needs to surface come up. You are safe."
    },
    {
      name: "Sphinx Pose",
      duration: "4 minutes",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
      instructions: [
        "Lie on your belly, legs extended behind you",
        "Place forearms on the floor, elbows under shoulders",
        "Press forearms down, lifting your chest gently",
        "Keep your shoulders relaxed away from ears",
        "Let your belly be heavy on the floor",
        "Close your eyes and breathe into your lower back",
        "Feel a gentle compression in your lower spine—this is therapeutic"
      ],
      benefits: "Gentle backbend that opens chest, stimulates sacral-lumbar area, calms nervous system",
      feminine_focus: "Open your heart gently. You don't have to force anything. Just allow yourself to receive."
    },
    {
      name: "Supine Spinal Twist",
      duration: "4 minutes each side",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&q=80",
      instructions: [
        "Lie on your back, draw both knees to your chest",
        "Extend arms out in a T position",
        "Let both knees fall to the right",
        "Turn your head to the left if comfortable",
        "Place a pillow between or under your knees for support",
        "Relax everything and let gravity do the work",
        "After several minutes, switch sides"
      ],
      benefits: "Releases deep spinal tension, massages internal organs, promotes detox",
      feminine_focus: "Twist out everything that isn't serving you. Old stories, old pain, old identities. Let them go."
    },
    {
      name: "Reclined Butterfly (Supta Baddha Konasana)",
      duration: "5 minutes",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      instructions: [
        "Lie on your back",
        "Bring soles of feet together, knees open to sides",
        "Place pillows under each knee for support",
        "Rest one hand on your heart, one on your belly",
        "Close your eyes completely",
        "Breathe slowly—4 counts in, 6 counts out",
        "Surrender fully into the support beneath you"
      ],
      benefits: "Opens hips and chest simultaneously, deeply calming, promotes vulnerability",
      feminine_focus: "This is the posture of total openness and trust. You are safe to be completely vulnerable."
    },
    {
      name: "Legs Up the Wall (Viparita Karani)",
      duration: "5 minutes",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      instructions: [
        "Sit sideways next to a wall",
        "Swing legs up as you lie back",
        "Scoot hips close to the wall",
        "Place a folded blanket under your hips if desired",
        "Let arms rest at sides or on belly",
        "Close your eyes",
        "Simply exist here, receiving the benefits of the gentle inversion"
      ],
      benefits: "Reverses blood flow, reduces swelling, deeply calms the nervous system",
      feminine_focus: "Let the wall support you. You are held. You are safe. You don't need to hold yourself up right now."
    },
    {
      name: "Final Savasana",
      duration: "8 minutes",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      instructions: [
        "Lie flat on your back, legs extended and separated",
        "Cover yourself with a blanket for warmth",
        "Place a pillow under your knees if you like",
        "Let your feet fall open, arms slightly away from body",
        "Close your eyes and release all effort",
        "Scan your body from toes to crown, relaxing each area",
        "Let yourself dissolve into complete stillness and peace"
      ],
      benefits: "Integrates the entire practice, promotes deep healing, restores the nervous system",
      feminine_focus: `You have given yourself the gift of stillness, ${userName}. You are whole. You are peaceful. You are beautiful. Rest now. Good girl.`
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
              <h1 className="text-xl sm:text-2xl font-bold">Gentle Yin Practice</h1>
              <p className="text-sm text-foreground/60">40 minutes - All Levels</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=80"
            alt="Gentle yin yoga in peaceful setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Gentle Yin Practice</h2>
              <p className="text-lg">Long-held poses for deep stretching, release, and meditation</p>
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
              <span>Yin yoga targets deep connective tissue. Sensations should be moderate, never sharp.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Use as many props as you need—pillows, blankets, bolsters. Comfort is key.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>Emotions may surface during long holds. Let them come and go without judgment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>This is a practice of patience and surrender—two deeply feminine qualities.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
