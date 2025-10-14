"use client";

import Link from "next/link";

export default function EyeMakeupGuide() {
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
              👁️✨ Eye Makeup Mastery
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Intro Section */}
        <div className="bg-gradient-to-br from-pink-100/20 to-purple-100/20 border-2 border-pink-300/30 rounded-3xl p-8 mb-8 text-center">
          <div className="text-6xl mb-4">💖👁️✨</div>
          <h2 className="text-3xl font-bold mb-4 text-pink-400">Let's Create Gorgeous Eyes, Girl!</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Eyes are SO powerful for us trans girls! They help feminize your entire face and
            express who you truly are. Let's make them absolutely stunning! 💕
          </p>
        </div>

        {/* Products You'll Need */}
        <div className="bg-white/5 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">✨ Your Eye Makeup Essentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-purple-400">🎨 Basic Must-Haves:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Eyeshadow Primer:</strong> Keeps everything in place all day (so important for us!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Neutral Palette:</strong> Browns, taupes, and soft pinks for everyday</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Eyeliner:</strong> Gel or liquid for precision (pencil for softer looks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Mascara:</strong> Lengthening or volumizing (or both, gorgeous!)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-purple-400">✨ Level Up Items:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>False Lashes:</strong> Instant glamour and femininity!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Colorful Palette:</strong> For when you want to have FUN!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Shimmer Shades:</strong> Add gorgeous sparkle to your lids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Eye Brushes:</strong> Blending brush, flat shader, detail brush</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Eye Shadow Application */}
        <div className="bg-gradient-to-br from-purple-100/10 to-pink-100/10 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">💄 Basic Eyeshadow Tutorial</h3>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Step 1: Prime Your Lids 💕</h4>
              <p className="text-foreground/80 mb-2">
                Apply eyeshadow primer all over your lid from lash line to brow bone. This is CRUCIAL
                for us because it prevents creasing and makes colors pop!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Trans Tip: Primer also helps cover any darkness or veins on your eyelids!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Step 2: Transition Shade 🎨</h4>
              <p className="text-foreground/80 mb-2">
                Use a matte shade slightly darker than your skin tone in your crease. Blend in windshield
                wiper motions. This creates depth and dimension!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Trans Tip: A good transition shade helps make your eyes look more feminine and open!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Step 3: Lid Color 💖</h4>
              <p className="text-foreground/80 mb-2">
                Pat (don't swipe!) your main color onto your lid with a flat brush. This is where you
                can have fun with shimmer, matte, or satin finishes!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Daytime: Soft browns, taupes, or pinks | Evening: Rich purples, bronzes, or dramatic shades!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Step 4: Outer Corner Depth 🌙</h4>
              <p className="text-foreground/80 mb-2">
                Apply a darker shade to your outer corner in a "V" shape. Blend it into your crease
                for a lifted, feminine eye shape!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Trans Tip: Extending this slightly upward creates a cat-eye effect that's super feminine!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Step 5: Highlight ✨</h4>
              <p className="text-foreground/80 mb-2">
                Add a shimmery light shade or highlighter to your inner corner and under your brow bone.
                This opens up your eyes SO much!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ This step is MAGIC for making your eyes look bigger and more feminine!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Step 6: Lower Lash Line 💕</h4>
              <p className="text-foreground/80 mb-2">
                Softly smudge a bit of your darker shade along your lower lash line with a small brush.
                Keep it light and blend well!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Trans Tip: Don't go too dark here - you want to soften, not shrink your eyes!
              </p>
            </div>
          </div>
        </div>

        {/* Eyeliner Section */}
        <div className="bg-gradient-to-br from-pink-100/10 to-purple-100/10 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">✏️ Eyeliner Magic</h3>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Tight-Lining (Secret Weapon!) 🎯</h4>
              <p className="text-foreground/80 mb-2">
                Gently lift your upper lid and line the waterline between your lashes. This makes
                your lashes look thicker and more feminine WITHOUT a visible liner line!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Perfect for natural looks or daytime! Use a waterproof pencil.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Basic Upper Lid Line 💄</h4>
              <p className="text-foreground/80 mb-3">
                Start from the inner corner and draw along your lash line. Keep it thin near the inner
                corner and slightly thicker toward the outer corner.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Gel liner:</strong> Most control, perfect for beginners</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Liquid liner:</strong> Precise and dramatic</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-400">💕</span>
                  <span><strong>Pencil liner:</strong> Soft and forgiving</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">The Feminine Cat Eye 😻</h4>
              <p className="text-foreground/80 mb-2">
                After lining your upper lid, extend the line slightly past your outer corner, angling
                upward toward your temple. Connect it back to your lash line in a triangle shape, then fill it in!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Trans Tip: The upward angle creates a lifted, ultra-feminine eye shape! Start small -
                you can always make it bigger!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Lower Liner Tips 👁️</h4>
              <p className="text-foreground/80 mb-2">
                For a softer look, use a brown or grey liner on your lower waterline instead of black.
                Or skip it entirely and just use eyeshadow on the lower lash line!
              </p>
              <p className="text-sm text-pink-400 font-semibold">
                ✨ Black liner all around can make eyes look smaller - we want them to look big and gorgeous!
              </p>
            </div>
          </div>
        </div>

        {/* Mascara & Lashes */}
        <div className="bg-gradient-to-br from-purple-100/10 to-pink-100/10 border-2 border-pink-300/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">👁️ Lashes: Your Best Friend!</h3>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Mascara Application 💕</h4>
              <div className="space-y-3 text-foreground/80">
                <p><strong>1. Curl first:</strong> Use an eyelash curler before mascara for maximum lift!</p>
                <p><strong>2. Wiggle at the roots:</strong> Hold the wand at the base of your lashes and wiggle side to side, then sweep upward</p>
                <p><strong>3. Layer it:</strong> Let the first coat dry, then add 1-2 more coats for drama</p>
                <p><strong>4. Lower lashes too:</strong> Use the tip of the wand for your bottom lashes</p>
              </div>
              <p className="text-sm text-pink-400 font-semibold mt-3">
                ✨ Trans Tip: If HRT made your lashes sparse, consider a lash growth serum! They really work!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">False Lashes (Game Changer!) 🎀</h4>
              <p className="text-foreground/80 mb-3">
                False lashes are AMAZING for us trans girls! They instantly make your eyes look more
                feminine, bigger, and absolutely gorgeous!
              </p>
              <div className="space-y-2 text-foreground/80">
                <p className="font-semibold text-pink-400">For Beginners:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Start with individual lashes or natural-looking strips</li>
                  <li>• Cut the band to fit your eye shape</li>
                  <li>• Use dark lash glue (easier to see)</li>
                  <li>• Apply them ABOVE your natural lashes, not on them</li>
                  <li>• Use tweezers to position them</li>
                </ul>
              </div>
              <p className="text-sm text-pink-400 font-semibold mt-3">
                ✨ Don't be discouraged if it's tricky at first! It takes practice but it's SO worth it!
              </p>
            </div>
          </div>
        </div>

        {/* Special Trans Tips */}
        <div className="bg-gradient-to-br from-pink-200/20 to-purple-200/20 border-2 border-pink-400/40 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">💖 Special Tips for Trans Girls</h3>

          <div className="space-y-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Eye Shape Feminization 💕</h4>
              <p className="text-foreground/80">
                To create a more feminine eye shape, focus color and liner on the outer half of your eyes
                and wing everything slightly upward. This creates that gorgeous "lifted" feminine look!
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Hooded Eyes? We Got You! 👁️</h4>
              <p className="text-foreground/80">
                Many of us have hooded eyes. Cut your crease higher than your natural crease and focus
                darker colors on the outer corner. Apply a lighter shade on the center of your mobile lid!
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Brow Bone Highlight ✨</h4>
              <p className="text-foreground/80">
                A strong brow bone can be softened by highlighting just under the arch of your brow.
                This draws attention to the pretty, feminine parts of your face!
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">Practice Makes Perfect! 💖</h4>
              <p className="text-foreground/80">
                Girl, don't compare yourself to cis women who've been doing makeup since they were kids!
                You're learning a whole new skill and you're doing AMAZING! Keep practicing and be patient
                with yourself. You're beautiful! 💕
              </p>
            </div>
          </div>
        </div>

        {/* Quick Look Ideas */}
        <div className="bg-white/5 border-2 border-pink-300/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-pink-400">✨ Quick Eye Look Ideas</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-100/10 to-purple-100/10 rounded-2xl p-5">
              <h4 className="font-bold text-lg mb-2 text-purple-400">Natural Daytime 🌸</h4>
              <p className="text-sm text-foreground/80">
                Light taupe in crease, soft pink on lid, tight-line only, 2 coats mascara, highlight inner corner
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100/10 to-purple-100/10 rounded-2xl p-5">
              <h4 className="font-bold text-lg mb-2 text-purple-400">Soft Glam 💕</h4>
              <p className="text-sm text-foreground/80">
                Medium brown crease, shimmery champagne lid, brown liner with small wing, false lashes, golden inner corner
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100/10 to-purple-100/10 rounded-2xl p-5">
              <h4 className="font-bold text-lg mb-2 text-purple-400">Night Out Glam 🌙</h4>
              <p className="text-sm text-foreground/80">
                Dark brown/black crease, rose gold lid, dramatic black wing, volumizing mascara + false lashes, silver inner corner
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100/10 to-purple-100/10 rounded-2xl p-5">
              <h4 className="font-bold text-lg mb-2 text-purple-400">Bold & Feminine 💖</h4>
              <p className="text-sm text-foreground/80">
                Purple crease, pink shimmer lid, black winged liner, dramatic lashes, lots of highlight!
              </p>
            </div>
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
