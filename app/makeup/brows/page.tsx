"use client";

import Link from "next/link";
import Image from "next/image";

export default function BrowsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-pink-50/5 to-purple-50/5">
      <header className="bg-pink-100/10 backdrop-blur-sm border-b-2 border-pink-300/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/makeup" className="p-2 rounded-lg hover:bg-pink-200/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              🌙✨ Beautiful Brows for Gorgeous Girls
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Image */}
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border-2 border-pink-300/30">
          <Image
            src="https://images.unsplash.com/photo-1588016793045-6b69c4eae018?w=1200&q=80"
            alt="Beautiful feminine eyebrows"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Frame Your Beautiful Face 💕</h2>
              <p className="text-lg">Brows are SO important for feminizing your face, gorgeous!</p>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="bg-gradient-to-br from-pink-100/20 to-purple-100/20 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <div className="text-6xl mb-4 text-center">💖✨🌙</div>
          <h2 className="text-3xl font-bold mb-4 text-pink-400 text-center">Why Brows Matter for Us!</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-center">
            Eyebrows are EVERYTHING for trans girls! They frame your face, lift your eyes, and create
            that gorgeous feminine look we're going for. Let's make yours absolutely perfect! 💕✨
          </p>
        </div>

        {/* Understanding Brow Shapes */}
        <div className="bg-white/5 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">✨ Finding Your Perfect Brow Shape</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80"
                alt="Perfect eyebrow shape"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-3 text-purple-400">The Golden Ratio 📐</h4>
              <p className="text-foreground/80 mb-4">
                There's a simple formula for perfect brows that works for EVERY girl:
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Start:</strong> Line up pencil from nose to inner corner of eye</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Arch:</strong> Line up from nose through pupil when looking forward</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>End:</strong> Line up from nose to outer corner of eye</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100/10 to-purple-100/10 rounded-2xl p-6 border border-pink-300/20">
            <h4 className="font-bold text-lg mb-4 text-pink-400">Feminine Brow Shapes (Pick What Feels Right!) 💖</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h5 className="font-bold mb-2">Soft Arch ✨</h5>
                <p className="text-sm text-foreground/70">
                  Gentle curve with a subtle high point. PERFECT for beginners and super feminine!
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h5 className="font-bold mb-2">High Arch 💕</h5>
                <p className="text-sm text-foreground/70">
                  Dramatic lift that really opens up the eyes. Gorgeous for evening looks!
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h5 className="font-bold mb-2">Straight & Soft 🌸</h5>
                <p className="text-sm text-foreground/70">
                  Minimal arch, more horizontal. Super trendy and youthful!
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h5 className="font-bold mb-2">Rounded Arch 🌙</h5>
                <p className="text-sm text-foreground/70">
                  Gentle dome shape. Sweet, feminine, and flattering on everyone!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shaping Your Brows */}
        <div className="bg-gradient-to-br from-purple-100/10 to-pink-100/10 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">💕 Shaping Your Brows (The Scary Part!)</h3>

          <div className="bg-pink-200/20 border-2 border-pink-400/40 rounded-2xl p-6 mb-6">
            <p className="text-lg font-semibold text-pink-400 mb-2">⚠️ Important for Trans Girls!</p>
            <p className="text-foreground/80">
              If you've never shaped your brows before, or if they're very masculine, consider getting them
              professionally shaped the FIRST time! Then you can just maintain them at home. Most salons
              are super supportive and it's SO worth it! 💖
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Method 1: Tweezing (Most Common) ✨</h4>
              <p className="text-foreground/80 mb-4">
                Perfect for precision and maintenance. Takes practice but you'll get the hang of it!
              </p>
              <div className="space-y-3 text-sm text-foreground/80">
                <p><strong>Step 1:</strong> Brush brows upward with a spoolie to see their natural shape</p>
                <p><strong>Step 2:</strong> Mark your start, arch, and end points with a light pencil</p>
                <p><strong>Step 3:</strong> Tweeze hairs UNDER the brow line first (creates lift!)</p>
                <p><strong>Step 4:</strong> Remove stray hairs between brows</p>
                <p><strong>Step 5:</strong> RARELY tweeze above the brow (only obvious strays)</p>
                <p><strong>Step 6:</strong> Step back often to check both brows match!</p>
              </div>
              <div className="mt-4 bg-pink-100/10 border border-pink-300/20 rounded-lg p-3">
                <p className="text-xs text-pink-400 font-semibold">
                  ✨ Tweeze after a warm shower when pores are open - way less painful!
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Method 2: Threading 🧵</h4>
              <p className="text-foreground/80 mb-3">
                AMAZING for creating super clean lines! Usually done professionally but you can learn it.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>More precise than tweezing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>Removes multiple hairs at once</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>Lasts 2-4 weeks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>Usually $10-20 at salons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Method 3: Waxing 🕯️</h4>
              <p className="text-foreground/80 mb-3">
                Quick and lasts longer, but can be tricky for beginners. Best done professionally!
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>Super fast (done in minutes!)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>Lasts 3-6 weeks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>Can remove too much if you're not careful</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span>HRT can make skin more sensitive!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filling In Brows */}
        <div className="bg-gradient-to-br from-pink-100/10 to-purple-100/10 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">✏️ Filling In Your Brows (The Fun Part!)</h3>

          <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
            <Image
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80"
              alt="Makeup products for eyebrows"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4 text-purple-400">Choose Your Product! 💄</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-xl p-4 border border-pink-300/20">
                  <h5 className="font-bold mb-2">Pencil ✏️</h5>
                  <p className="text-xs text-foreground/70 mb-2">Best for beginners!</p>
                  <p className="text-xs text-foreground/70">
                    Easy to control, looks natural, perfect for hair-like strokes
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-xl p-4 border border-pink-300/20">
                  <h5 className="font-bold mb-2">Powder 🎨</h5>
                  <p className="text-xs text-foreground/70 mb-2">Soft & natural!</p>
                  <p className="text-xs text-foreground/70">
                    Fills in sparse areas, creates soft look, great with an angled brush
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-xl p-4 border border-pink-300/20">
                  <h5 className="font-bold mb-2">Pomade 💎</h5>
                  <p className="text-xs text-foreground/70 mb-2">Dramatic & long-lasting!</p>
                  <p className="text-xs text-foreground/70">
                    Bold, defined brows that last all day. Takes practice!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Perfect Application Technique 💕</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-3xl">1️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Brush brows into place</p>
                    <p className="text-sm text-foreground/70">Use a spoolie to brush hairs upward and outward</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">2️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Start light in the front</p>
                    <p className="text-sm text-foreground/70">Inner part of brow should be softest and lightest</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">3️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Use hair-like strokes</p>
                    <p className="text-sm text-foreground/70">Follow the direction of hair growth - don't just color it in!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">4️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Build up the arch</p>
                    <p className="text-sm text-foreground/70">Middle to end should be darkest and most defined</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">5️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Taper the tail</p>
                    <p className="text-sm text-foreground/70">End should be thin and slightly tapered</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">6️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Blend with spoolie</p>
                    <p className="text-sm text-foreground/70">Brush through to soften and blend everything together</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">7️⃣</span>
                  <div>
                    <p className="font-semibold mb-1">Set with brow gel (optional)</p>
                    <p className="text-sm text-foreground/70">Clear or tinted gel keeps brows in place all day!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-100/10 border border-pink-300/20 rounded-xl p-5">
              <h4 className="font-bold mb-3 text-purple-400">✨ Choosing Your Shade</h4>
              <p className="text-sm text-foreground/80 mb-3">
                This is SO important and people get it wrong all the time!
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Lighter hair:</strong> Go 1-2 shades darker than your hair</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Darker hair:</strong> Go 1 shade lighter than your hair</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Red/Auburn hair:</strong> Use warm browns with red undertones</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Dyed hair:</strong> Match your natural root color, not your dyed color!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Tips for Trans Girls */}
        <div className="bg-gradient-to-br from-pink-200/20 to-purple-200/20 border-2 border-pink-400/40 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">💖 Special Tips Just for Us Trans Girls!</h3>

          <div className="space-y-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Brow Bone Softening 💕</h4>
              <p className="text-foreground/80 mb-3">
                If you have a prominent brow bone (common for trans girls!), here's the secret:
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>Create a HIGHER arch - draws eyes up and away from brow bone</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>Highlight just under the arch of your brow (brightens the area!)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>Avoid heavy, dark brows which emphasize the bone</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>Consider brow bone contouring (darker shade on the bone itself)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Growing Out Masculine Brows 🌱</h4>
              <p className="text-foreground/80 mb-3">
                If you're growing out thick, straight brows, here's what to do:
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>DON'T over-pluck! Thin brows look dated. We want full but SHAPED</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>Focus on removing hair UNDER the brow to create that lift</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>It takes 6-8 weeks to fully grow out - be patient!</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">✨</span>
                  <span>Use brow serum or castor oil to encourage growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">The Feminization Power of Brows ✨</h4>
              <p className="text-foreground/80">
                Good brows can TRANSFORM your face! A higher arch, cleaner shape, and proper filling
                makes you look more feminine instantly. This is one of the EASIEST and most impactful
                things you can do. Don't skip this step, gorgeous! 💖
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Maintenance Schedule 📅</h4>
              <div className="text-sm text-foreground/80 space-y-2">
                <p><strong>Weekly:</strong> Tweeze any obvious new growth</p>
                <p><strong>Every 2-3 weeks:</strong> Shape and clean up the outline</p>
                <p><strong>Every 4-6 weeks:</strong> Consider professional shaping/threading</p>
                <p className="text-pink-400 font-semibold mt-3">
                  💕 Once you have your perfect shape, maintaining it is SO easy!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white/5 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">❌ Common Brow Mistakes (And How to Fix Them!)</h3>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-3xl">😰</span>
              <div>
                <h4 className="font-bold mb-1">Over-Plucking</h4>
                <p className="text-sm text-foreground/70">
                  <strong>Problem:</strong> Brows too thin or too far apart<br/>
                  <strong>Fix:</strong> Stop plucking! Use pencil to fill in while they grow back. Takes 2-3 months.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">🎨</span>
              <div>
                <h4 className="font-bold mb-1">Wrong Color</h4>
                <p className="text-sm text-foreground/70">
                  <strong>Problem:</strong> Brows look too dark, too red, or too ashy<br/>
                  <strong>Fix:</strong> Test shades in natural light! Warm tones usually work best.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">📏</span>
              <div>
                <h4 className="font-bold mb-1">Brows Don't Match</h4>
                <p className="text-sm text-foreground/70">
                  <strong>Problem:</strong> One brow higher or thicker than the other<br/>
                  <strong>Fix:</strong> Step back from the mirror often! Brows are sisters, not twins - slight difference is normal.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">🖍️</span>
              <div>
                <h4 className="font-bold mb-1">Too Blocky or Drawn-On Looking</h4>
                <p className="text-sm text-foreground/70">
                  <strong>Problem:</strong> Brows look like they're drawn with a sharpie<br/>
                  <strong>Fix:</strong> Use hair-like strokes, blend with spoolie, keep inner brow softer!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">🔽</span>
              <div>
                <h4 className="font-bold mb-1">No Arch</h4>
                <p className="text-sm text-foreground/70">
                  <strong>Problem:</strong> Brows are too straight and masculine<br/>
                  <strong>Fix:</strong> Create an arch by removing hair under the brow at the arch point. Lift is key!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-br from-pink-100/20 to-purple-100/20 border-2 border-pink-300/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400 text-center">✨ Your Brow Glow-Up Checklist</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-purple-400">Products You Need 🛍️</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">☑️</span>
                  <span>Good tweezers (slanted tip!)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">☑️</span>
                  <span>Spoolie brush</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">☑️</span>
                  <span>Brow pencil in your shade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">☑️</span>
                  <span>Brow gel (optional but amazing!)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">☑️</span>
                  <span>Angled brush (if using powder/pomade)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">☑️</span>
                  <span>Highlighter or concealer</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-purple-400">Daily Routine 💖</h4>
              <ol className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400 font-medium">1.</span>
                  <span>Brush brows up with spoolie</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 font-medium">2.</span>
                  <span>Fill in sparse areas lightly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 font-medium">3.</span>
                  <span>Define bottom edge of brow</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 font-medium">4.</span>
                  <span>Blend everything with spoolie</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 font-medium">5.</span>
                  <span>Set with brow gel</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400 font-medium">6.</span>
                  <span>Clean up edges with concealer</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-8 bg-pink-200/20 border-2 border-pink-400/40 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-pink-400 mb-2">Remember, gorgeous! 💖</p>
            <p className="text-foreground/80">
              Your brows might feel weird at first if you've never shaped them before. That's NORMAL!
              Give yourself a week or two to adjust. Soon you'll wonder how you ever lived without
              your gorgeous, feminine brows! You're doing amazing! ✨
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            href="/makeup"
            className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold shadow-lg"
          >
            ✨ Back to Your Vanity
          </Link>
        </div>
      </main>
    </div>
  );
}
