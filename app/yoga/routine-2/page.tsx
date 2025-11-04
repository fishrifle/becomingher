"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Routine2() {
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    {
      name: "Butterfly Pose (Baddha Konasana)",
      duration: "2 minutes",
      image: "https://media.istockphoto.com/id/1311849385/photo/woman-practicing-yoga-bound-angle-pose.jpg?s=2048x2048&w=is&k=20&c=8KvqJ5yQ_ZQm5JzJZJ5J5J5J5J5J5J5J5J5J5J5J5J=",
      instructions: [
        "Sit on the floor with legs extended",
        "Bend your knees and bring the soles of your feet together",
        "Draw your heels as close to your pelvis as comfortable",
        "Let your knees fall open to the sides",
        "Hold your feet or ankles with your hands",
        "Sit tall, lengthening through your spine",
        "Gently press your knees toward the floor (don't force)",
        "Breathe deeply into your hips"
      ],
      benefits: "Opens hips and groin, improves flexibility, supports pelvic circulation",
      feminine_focus: "Feel your hips opening like a butterfly's wings. This is where your feminine power resides."
    },
    {
      name: "Low Lunge with Hip Circles",
      duration: "2 minutes each side",
      image: "https://media.istockphoto.com/id/1152625683/photo/woman-practicing-yoga-standing-in-anjaneyasana-pose-horse-rider-exercise.jpg?s=2048x2048&w=is&k=20&c=1U_IP_An1L_Q0V-yiGWrNRkHEHmJpXno9bLcr9wgaas=",
      instructions: [
        "From hands and knees, step right foot forward between hands",
        "Lower left knee to the ground",
        "Keep right knee over ankle",
        "Place hands on right thigh",
        "Begin to make slow circles with your hips",
        "Circle 8-10 times in each direction",
        "Feel the deep stretch in your hip flexors",
        "Repeat on the other side"
      ],
      benefits: "Releases tight hip flexors, increases hip mobility, supports hormone flow",
      feminine_focus: "Your hips hold your creative and sexual energy. Let them move freely and joyfully."
    },
    {
      name: "Pigeon Pose (Eka Pada Rajakapotasana)",
      duration: "3 minutes each side",
      image: "https://media.istockphoto.com/id/1179537891/photo/woman-practicing-yoga-at-home.jpg?s=2048x2048&w=is&k=20&c=LJy5ZqE5vQ8mZ5aQ3yZQqZ5Z5Z5Z5Z5Z5Z5Z5Z5Z5=",
      instructions: [
        "From hands and knees, bring right knee forward behind right wrist",
        "Slide right foot toward left wrist (shin parallel to mat front)",
        "Extend left leg straight back",
        "Square your hips toward the front",
        "Walk hands forward and fold over your front leg",
        "Rest on forearms or extend fully forward",
        "Breathe into any tightness or discomfort",
        "Hold and breathe, then switch sides"
      ],
      benefits: "Deep hip opener, releases stored tension, improves posture",
      feminine_focus: "Pigeon is one of the most powerful hip openers. Breathe through any emotional release that arises."
    },
    {
      name: "Goddess Pose (Utkata Konasana)",
      duration: "2 minutes",
      image: "https://media.istockphoto.com/id/942282226/photo/a-pose-of-the-goddess-the-portrait-of-the-beautiful-young-woman-works-against-a-white-brick.jpg?s=2048x2048&w=is&k=20&c=FoZeoycqOX6O8KGxcNyaZ2UzXjEtlxEFJ1fHJLcTHEo=",
      instructions: [
        "Step feet wide apart, turn toes out at 45 degrees",
        "Bend knees deeply, tracking over your toes",
        "Bring arms up, elbows bent at 90 degrees, palms facing forward",
        "Sink hips down toward the height of your knees",
        "Engage your core, keep spine long",
        "Feel powerful and grounded in your lower body",
        "Pulse up and down slightly to deepen the work"
      ],
      benefits: "Strengthens legs and core, opens hips, embodies divine feminine power",
      feminine_focus: "Channel the goddess within. You are strong, powerful, and radiant."
    },
    {
      name: "Wide-Legged Forward Fold (Prasarita Padottanasana)",
      duration: "2 minutes",
      image: "https://media.istockphoto.com/id/1184649978/photo/woman-practicing-yoga.jpg?s=2048x2048&w=is&k=20&c=VzQ8mZ5aQ3yZQqZ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5=",
      instructions: [
        "Stand with feet wide apart, toes pointing forward",
        "Place hands on hips",
        "Fold forward from your hips, keeping spine long",
        "Place hands on the floor, blocks, or shins",
        "Let your head hang heavy",
        "Press the outer edges of your feet into the floor",
        "Feel the deep stretch in your inner thighs and hamstrings",
        "Breathe into your hips and back"
      ],
      benefits: "Stretches inner thighs and hamstrings, calms the mind, increases hip flexibility",
      feminine_focus: "Surrender and release. Let gravity help you open deeper."
    },
    {
      name: "Happy Baby Pose (Ananda Balasana)",
      duration: "2 minutes",
      image: "https://media.istockphoto.com/id/1145420991/photo/woman-doing-yoga-exercise.jpg?s=2048x2048&w=is&k=20&c=Q8mZ5aQ3yZQqZ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5=",
      instructions: [
        "Lie on your back",
        "Draw your knees into your chest",
        "Grab the outsides of your feet with your hands",
        "Open your knees wider than your torso",
        "Bring your knees toward your armpits",
        "Flex your feet and press them into your hands",
        "Rock gently side to side if it feels good",
        "Keep your head and shoulders on the mat"
      ],
      benefits: "Opens hips and groin, releases lower back tension, playful and joyful",
      feminine_focus: "Be playful like a baby. There's joy and innocence in your practice."
    },
    {
      name: "Frog Pose (Mandukasana)",
      duration: "3 minutes",
      image: "https://media.istockphoto.com/id/1184650018/photo/woman-practicing-yoga.jpg?s=2048x2048&w=is&k=20&c=8mZ5aQ3yZQqZ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5=",
      instructions: [
        "Come to hands and knees",
        "Slowly widen your knees as far as comfortable",
        "Turn your feet out to the sides, inner edges on the floor",
        "Lower to your forearms",
        "Keep your hips directly over your knees",
        "Press your hips back gently",
        "Breathe deeply and hold",
        "Come out slowly and carefully"
      ],
      benefits: "Intense hip opener, stretches inner thighs, supports pelvic health",
      feminine_focus: "This is an intense pose. Honor your body's limits and breathe through the intensity."
    },
    {
      name: "Reclined Goddess Pose (Supta Baddha Konasana)",
      duration: "3 minutes",
      image: "https://media.istockphoto.com/id/1184650128/photo/woman-practicing-yoga.jpg?s=2048x2048&w=is&k=20&c=mZ5aQ3yZQqZ5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5=",
      instructions: [
        "Lie on your back",
        "Bend your knees and bring the soles of your feet together",
        "Let your knees fall open to the sides",
        "Place one hand on your heart, one on your belly",
        "Close your eyes and breathe deeply",
        "Feel your chest and belly rise and fall",
        "Let gravity open your hips",
        "Rest and receive"
      ],
      benefits: "Gentle hip opener, calms nervous system, supports feminine energy flow",
      feminine_focus: "You are safe to open. You are safe to receive. You are worthy of rest."
    },
    {
      name: "Supine Twist",
      duration: "2 minutes each side",
      image: "https://www.doyou.com/wp-content/uploads/2021/01/How-To-Do-Reclined-Spinal-Twist-Pose.jpg",
      instructions: [
        "Lie on your back, draw knees into chest",
        "Extend arms to a T position",
        "Drop both knees to the right",
        "Turn head to the left (optional)",
        "Breathe deeply, feeling the twist in your spine",
        "Release any tension with each exhale",
        "Repeat on the other side"
      ],
      benefits: "Releases spine tension, aids digestion, completes hip opening practice",
      feminine_focus: "Wring out any remaining tension. Make space for your transformation."
    },
    {
      name: "Final Relaxation (Savasana)",
      duration: "5 minutes",
      image: "https://beyogi.b-cdn.net/wp-content/uploads/2017/09/Stillness_Feature.jpg?width=600&quality=70",
      instructions: [
        "Lie on your back, legs extended and separated",
        "Arms slightly away from body, palms facing up",
        "Close your eyes",
        "Scan your body and consciously relax each part",
        "Let go of all effort",
        "Breathe naturally",
        "Feel the effects of your hip-opening practice",
        "Rest in the openness you've created"
      ],
      benefits: "Integrates the practice, reduces stress, promotes deep relaxation",
      feminine_focus: "You've created space in your hips for your feminine energy to flow freely. Rest in this openness."
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
              <h1 className="text-xl sm:text-2xl font-bold">Hip-Opening Flow</h1>
              <p className="text-sm text-foreground/60">25 minutes • All Levels</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Image */}
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
            alt="Woman practicing hip opening yoga"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Hip-Opening Flow</h2>
              <p className="text-lg">Deep hip openers for feminine energy and flexibility</p>
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
          {/* Pose Image or Video */}
          <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6 border border-primary/20" suppressHydrationWarning>
            {poses[currentPose].video ? (
              <iframe
                src={poses[currentPose].video}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={poses[currentPose].name}
              />
            ) : (
              <Image
                src={poses[currentPose].image}
                alt={poses[currentPose].name}
                fill
                className="object-contain bg-accent/10"
              />
            )}
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
              <span>Hip opening can be intense. Honor your body and never force a stretch.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Emotional releases are common during hip work. Allow yourself to feel whatever arises.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Use props (blocks, blankets, pillows) to support your practice.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Breathe deeply and consistently throughout each pose.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
