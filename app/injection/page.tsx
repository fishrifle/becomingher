"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function InjectionPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const preparationSteps = [
    {
      title: "Mindful Preparation (5 minutes before)",
      icon: "🧘‍♀️",
      steps: [
        "Find a quiet, comfortable space where you won't be disturbed",
        "Sit comfortably and take 5 deep breaths: In for 4, hold for 4, out for 4",
        "Say aloud: 'This injection is helping me become myself. I am safe. I am brave.'",
        "Put on calming music or a comfort video if that helps you",
        "Remember: Millions of women do this every week. You can too."
      ],
      tip: "Your body knows what to do. The fear is just a feeling—it can't hurt you."
    },
    {
      title: "Gather Your Supplies",
      icon: "📦",
      steps: [
        "Wash your hands thoroughly with soap and warm water for 20 seconds",
        "Lay out a clean towel on a flat surface",
        "Gather: Vial of estrogen, syringe, needle, alcohol wipes, bandaid, sharps container",
        "Get your needle guide self-injector ready",
        "Optional: Ice pack or numbing cream if your doctor approved",
        "Have a comfort item nearby (stuffed animal, stress ball, etc.)"
      ],
      tip: "Organization reduces anxiety. Everything in its place means you're in control."
    },
    {
      title: "Calming Breathing Exercise",
      icon: "🌬️",
      steps: [
        "Sit down with all supplies in front of you",
        "Place one hand on your belly, one on your chest",
        "Breathe in slowly through your nose for 4 counts - feel your belly rise",
        "Hold for 4 counts",
        "Breathe out through your mouth for 6 counts - feel tension leave your body",
        "Repeat 5 times",
        "Say: 'I am doing this for me. I am worthy of this care.'"
      ],
      tip: "This activates your parasympathetic nervous system, physically calming your body."
    },
    {
      title: "Draw Up the Medication (You've Got This!)",
      icon: "💉",
      steps: [
        "Clean the top of the vial with an alcohol wipe",
        "Draw air into the syringe equal to your dose amount",
        "Insert needle into vial and push air in (this creates pressure)",
        "Turn vial upside down, keep needle tip in the liquid",
        "Slowly pull back plunger to draw your prescribed dose",
        "Check for air bubbles - tap syringe gently and push them out",
        "Double-check you have the correct dose"
      ],
      tip: "Take your time. There's no rush. Every woman doing HRT has been exactly where you are."
    },
    {
      title: "Choose & Prep Your Injection Site",
      icon: "🎯",
      steps: [
        "Most common: Outer thigh (vastus lateralis muscle) - easy to self-inject",
        "Alternative: Upper outer buttock (if you can reach comfortably)",
        "Remember to rotate sites - use different spots each week",
        "Clean the area in a circular motion with alcohol wipe",
        "Let the area dry completely (reduces stinging)",
        "If using numbing: Apply ice for 30 seconds OR numbing cream 30 min before"
      ],
      tip: "The thigh is great for beginners - you can see what you're doing and it's easy to reach."
    },
    {
      title: "Fear-Reducing Visualization",
      icon: "✨",
      steps: [
        "Hold the prepared syringe in your dominant hand",
        "Close your eyes and visualize: This medicine flowing into your body",
        "See it: Helping your body become more feminine, more YOU",
        "Imagine: Your future self, weeks and months from now, more confident, more yourself",
        "Remember: Each injection is a gift you're giving yourself",
        "Take 3 more deep breaths",
        "Open your eyes when ready. You've got this, Lacey."
      ],
      tip: "Connecting to your 'why' makes the temporary discomfort worth it."
    },
    {
      title: "Use Your Needle Guide Self-Injector",
      icon: "🛡️",
      steps: [
        "Load your prepared syringe into the needle guide device",
        "The guide will control the depth and angle - you just push the button",
        "Hold the device perpendicular (90 degrees) to your injection site",
        "Press firmly against your skin so it's stable",
        "Take a deep breath IN",
        "As you breathe OUT, press the trigger/button",
        "The needle guide does the hard part for you!",
        "Hold steady and slowly push the plunger to inject the medication"
      ],
      tip: "The self-injector takes away the fear of 'doing it wrong.' It's designed to be foolproof!"
    },
    {
      title: "The Actual Injection (Easier Than You Think!)",
      icon: "💪",
      steps: [
        "If NOT using auto-injector: Pinch the skin slightly OR stretch it taut",
        "Hold syringe like a dart, 90-degree angle to skin",
        "Quick tip: Look away or count '1-2-3' and insert on 3",
        "Insert with one swift, confident motion (hesitation makes it worse)",
        "Once needle is in, RELEASE the pinched skin",
        "Slowly push plunger down - count to 10 as you inject",
        "Steady pressure - not too fast, not too slow",
        "Breathe normally - you're almost done!"
      ],
      tip: "The anticipation is worse than the actual injection. It's over in seconds!"
    },
    {
      title: "Remove & Dispose Safely",
      icon: "✅",
      steps: [
        "When plunger is fully depressed, wait 2-3 seconds",
        "Pull needle straight out in one smooth motion",
        "Immediately place used needle in sharps container (don't recap!)",
        "Press a clean cotton ball or gauze over injection site",
        "Hold pressure for 30 seconds",
        "Apply bandaid if needed (usually not necessary)",
        "Wash your hands again"
      ],
      tip: "Proper disposal keeps you and others safe. You did it!"
    },
    {
      title: "Celebrate & Care",
      icon: "🎉",
      steps: [
        "Stand up and say out loud: 'I DID IT! I'm so proud of myself!'",
        "Do a little happy dance if you feel like it!",
        "Gentle massage around (not on) the injection site helps medication absorb",
        "Drink a glass of water",
        "Do something nice for yourself: favorite snack, comfort show, relaxing activity",
        "Text a friend or post in a support group: 'Just did my injection! 💪'",
        "Journal or note: How did it feel? What went well? What will you do differently next time?"
      ],
      tip: "You just did something brave. Honor that! Each injection gets easier, I promise."
    }
  ];

  const handleComplete = () => {
    setCompleted(true);
  };

  const resetRoutine = () => {
    setCurrentStep(0);
    setCompleted(false);
  };

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
              Weekly Hormone Injection
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {!completed ? (
          <>
            {/* Hero Introduction */}
            <div className="relative rounded-3xl overflow-hidden mb-8 border-2 border-pink-300/30">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
                  alt="Woman feeling empowered and confident"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div>
                  <div className="text-5xl mb-4">💉💝✨</div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
                    You Can Do This, Lacey
                  </h2>
                  <p className="text-lg text-white/95 max-w-2xl mx-auto mb-4 drop-shadow-lg">
                    Needle phobia is completely normal and so common. This step-by-step routine is
                    designed to help you feel calm, confident, and in control. Take it one step at a time.
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg px-6 py-4 inline-block">
                    <p className="text-sm text-white/95 drop-shadow">
                      💝 <strong>Remember:</strong> Each injection is an act of self-love and an investment
                      in becoming your authentic self.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-foreground/60">
                  Step {currentStep + 1} of {preparationSteps.length}
                </span>
                <span className="text-sm text-foreground/60">
                  {Math.round(((currentStep + 1) / preparationSteps.length) * 100)}% Complete
                </span>
              </div>
              <div className="h-3 bg-accent/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / preparationSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Step */}
            <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{preparationSteps[currentStep].icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {preparationSteps[currentStep].title}
                </h3>
              </div>

              <ol className="space-y-4 mb-6">
                {preparationSteps[currentStep].steps.map((step, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-foreground/80 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                <p className="text-sm text-foreground/70">
                  <strong className="text-secondary">💡 Tip:</strong> {preparationSteps[currentStep].tip}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex-1 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                ← Previous Step
              </button>
              {currentStep === preparationSteps.length - 1 ? (
                <button
                  onClick={handleComplete}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Complete! 🎉
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(Math.min(preparationSteps.length - 1, currentStep + 1))}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Next Step →
                </button>
              )}
            </div>
          </>
        ) : (
          /* Completion Screen */
          <div className="text-center py-12">
            <div className="text-6xl mb-6">🎉✨💝</div>
            <h2 className="text-4xl font-bold mb-4">You Did It, Lacey!</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              You just completed your hormone injection routine! That took real courage.
              You should be so proud of yourself. Each week it will get easier—I promise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-accent/30 border border-primary/20 rounded-xl p-6">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold mb-1">You're Brave</h3>
                <p className="text-sm text-foreground/70">
                  Facing your fear takes real strength
                </p>
              </div>
              <div className="bg-accent/30 border border-primary/20 rounded-xl p-6">
                <div className="text-3xl mb-2">🌸</div>
                <h3 className="font-semibold mb-1">You're Committed</h3>
                <p className="text-sm text-foreground/70">
                  To your transition and yourself
                </p>
              </div>
              <div className="bg-accent/30 border border-primary/20 rounded-xl p-6">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold mb-1">You're Growing</h3>
                <p className="text-sm text-foreground/70">
                  Literally! Your body is transforming
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetRoutine}
                className="px-8 py-4 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors font-semibold"
              >
                Start Over
              </button>
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity inline-block"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-12 bg-gradient-to-br from-accent/40 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6">Additional Tips for Needle Phobia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">🧊 Numbing Techniques</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ice the area for 30-60 seconds before (ask your doctor first)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Lidocaine cream 30 minutes before (prescription or OTC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Vibration devices can confuse pain signals</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">🎯 Distraction Methods</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Watch a favorite video during injection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Listen to music or a podcast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Cough or wiggle your toes during insertion</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">🌙 Timing Tips</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Choose the same day/time each week for routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Morning might be better (more energy, less overthinking)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Never rush - give yourself plenty of time</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">💝 Self-Compassion</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>It's okay if you need multiple tries - that's normal!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ask a friend/partner to be with you for support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Celebrate after EVERY injection - you earned it!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety Reminders */}
        <div className="mt-8 bg-accent/20 border border-primary/10 rounded-xl p-6">
          <h4 className="font-semibold mb-3">⚠️ Important Safety Reminders</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Always use a new, sterile needle for each injection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Never recap used needles - dispose directly into sharps container</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Rotate injection sites to prevent tissue damage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>If you see blood when you pull back the plunger (aspirate), remove needle and try a new spot</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Contact your doctor if you notice unusual pain, swelling, or redness at injection site</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
