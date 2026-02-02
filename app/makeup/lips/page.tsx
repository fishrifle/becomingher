"use client";

import Link from "next/link";

export default function LipsGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/makeup" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Lip Perfection</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="mb-6">
            <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full border border-secondary/30">
              Trans-Specific Guide
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Beautiful Lips, Your Way</h2>
          <p className="text-foreground/70">
            Lip makeup is one of the most transformative and feminizing tools in your kit. Whether you want
            a subtle everyday look or a bold statement, this guide covers everything from prep to perfection —
            with tips specifically for trans women.
          </p>
        </div>

        <div className="space-y-8">
          {/* Lip Prep */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 1: Lip Prep</h3>
            <p className="text-foreground/70 mb-4">
              Smooth, hydrated lips are the foundation of any great lip look. This is especially important
              if you&apos;re on HRT, as hormonal changes can sometimes affect skin and lip texture.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Exfoliate</strong>
                  <p className="text-sm text-foreground/70">Gently scrub lips with a lip scrub or a soft toothbrush in circular motions. Do this the night before for best results.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Hydrate</strong>
                  <p className="text-sm text-foreground/70">Apply a good lip balm at least 10 minutes before doing your lips. Let it absorb fully — blot off any excess before applying color.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Prime (Optional)</strong>
                  <p className="text-sm text-foreground/70">A lip primer or a thin layer of foundation/concealer on the lips creates a blank canvas and helps color last longer.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Lip Liner */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 2: Lip Liner</h3>
            <p className="text-foreground/70 mb-4">
              Lip liner is your secret weapon for creating a feminine lip shape. It defines, prevents bleeding, and can subtly reshape your lips.
            </p>
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Choosing Your Liner</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Match your lipstick shade OR go one shade darker for definition</li>
                  <li>• A nude liner that matches your natural lip color works with everything</li>
                  <li>• Creamy formulas are more forgiving than dry/matte ones for beginners</li>
                </ul>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Trans-Specific Tip: Reshaping Your Lips</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• <strong>Fuller lips:</strong> Line just slightly outside your natural lip line (1mm max — go slow)</li>
                  <li>• <strong>Cupid&apos;s bow:</strong> Draw a soft &quot;X&quot; at the center of your upper lip to create a defined, feminine bow shape</li>
                  <li>• <strong>Balance:</strong> If your upper lip is thinner, slightly overline the top to match the bottom</li>
                  <li>• <strong>Softness:</strong> Avoid sharp angular lines — feminine lips tend to have softer, rounded edges</li>
                </ul>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Application Technique</h4>
                <ol className="space-y-1 text-sm text-foreground/70">
                  <li>1. Start at the cupid&apos;s bow (center top) and draw outward to each corner</li>
                  <li>2. Line the bottom from the center outward to each corner</li>
                  <li>3. Connect the corners naturally</li>
                  <li>4. Fill in the entire lip with liner for extra staying power</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Lipstick Types */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 3: Choosing Your Lip Product</h3>
            <p className="text-foreground/70 mb-4">
              Different formulas give different vibes. Here&apos;s what to know:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Sheer/Tinted Balm</h4>
                <p className="text-sm text-foreground/70 mb-2">Easiest to apply. Natural, low-maintenance look. Great for beginners or &quot;no-makeup makeup.&quot;</p>
                <p className="text-xs text-primary">Best for: Everyday, casual</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Satin/Cream Lipstick</h4>
                <p className="text-sm text-foreground/70 mb-2">Classic finish with good color payoff. Comfortable, slightly glossy. The most versatile formula.</p>
                <p className="text-xs text-primary">Best for: Any occasion</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Matte Lipstick</h4>
                <p className="text-sm text-foreground/70 mb-2">Bold, long-lasting, no shine. Can be drying — always prep lips well first. Very photogenic.</p>
                <p className="text-xs text-primary">Best for: Events, photos, bold looks</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Lip Gloss</h4>
                <p className="text-sm text-foreground/70 mb-2">High shine, plumping effect. Can wear alone or over lipstick. Makes lips look fuller.</p>
                <p className="text-xs text-primary">Best for: Feminine, youthful looks</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Liquid Lipstick</h4>
                <p className="text-sm text-foreground/70 mb-2">Applies wet, dries matte. Very long-wearing — great if you don&apos;t want to retouch. Requires precise application.</p>
                <p className="text-xs text-primary">Best for: Long days, transfer-proof needs</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Lip Stain</h4>
                <p className="text-sm text-foreground/70 mb-2">Tints your lips with color that lasts for hours. Very natural &quot;your lips but better&quot; effect.</p>
                <p className="text-xs text-primary">Best for: Natural look, beginners</p>
              </div>
            </div>
          </section>

          {/* Application */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 4: Application</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Apply from the center outward</strong>
                  <p className="text-sm text-foreground/70">Place color at the center of your lips and spread toward the corners. This gives the most natural distribution.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Blot and reapply</strong>
                  <p className="text-sm text-foreground/70">Press lips together on a tissue, then apply a second layer. This builds color and dramatically improves staying power.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Clean up edges</strong>
                  <p className="text-sm text-foreground/70">Use a small concealer brush with a bit of concealer to sharpen the edges around your lips. This gives a professional finish.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <div>
                  <strong>Optional: Add dimension</strong>
                  <p className="text-sm text-foreground/70">Dab a tiny bit of gloss or a lighter shade at the center of your bottom lip for a fuller, more dimensional look.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Feminizing Colors */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Choosing Feminine Colors</h3>
            <p className="text-foreground/70 mb-4">
              The right shade can completely change how feminine your face reads. Here are some guidelines:
            </p>
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">For Fair Skin</h4>
                <p className="text-sm text-foreground/70">Soft pinks, mauves, peach-pinks, rose. Avoid anything too dark or brown early on.</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">For Medium Skin</h4>
                <p className="text-sm text-foreground/70">Dusty rose, berry, warm pinks, terracotta, soft reds. These add warmth and femininity.</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">For Deep Skin</h4>
                <p className="text-sm text-foreground/70">Rich berries, deep plums, warm browns, bold reds, wine shades. These look absolutely stunning.</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Universal Shades</h4>
                <p className="text-sm text-foreground/70">A &quot;my lips but better&quot; nude (match to your natural lip color) and a classic red work on everyone. Every woman should have both.</p>
              </div>
            </div>
          </section>

          {/* Shadow Coverage */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Trans-Specific: Lip Area Shadow</h3>
            <p className="text-foreground/70 mb-4">
              If you have any shadow or texture around your lip area from facial hair, here&apos;s how to handle it:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <strong>Color correct first</strong>
                  <p className="text-sm text-foreground/70">Use an orange or peach color corrector on the upper lip area before foundation. This neutralizes blue/grey shadow.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <strong>Set with powder</strong>
                  <p className="text-sm text-foreground/70">Lightly powder the area before applying lip liner/lipstick to prevent the corrector from mixing with your lip color.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <strong>Opaque formulas help</strong>
                  <p className="text-sm text-foreground/70">If shadow is a concern, choose more opaque lip products rather than sheer ones. Liquid lipsticks and matte formulas provide the most coverage.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <div>
                  <strong>Over time with HRT</strong>
                  <p className="text-sm text-foreground/70">Estrogen can thin and lighten facial hair over time. Laser or electrolysis in the lip area makes a huge difference too.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Making It Last */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Making Your Lips Last All Day</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Always use lip liner as a base</strong>
                  <p className="text-sm text-foreground/70">Fill in your entire lip with liner before lipstick. It acts as an anchor for color.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Layer: apply, blot, apply</strong>
                  <p className="text-sm text-foreground/70">Two thin layers last longer than one thick one.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Set with translucent powder</strong>
                  <p className="text-sm text-foreground/70">Hold a single-ply tissue over your lips and dust translucent powder through it. This mattifies and sets the color.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <div>
                  <strong>Carry your liner for touch-ups</strong>
                  <p className="text-sm text-foreground/70">Liner is easier to reapply on the go than lipstick. A quick re-line and press your lips together.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Starter Kit */}
          <section className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Beginner Lip Kit Essentials</h3>
            <p className="text-foreground/70 mb-4">You don&apos;t need much to start. Here&apos;s your core kit:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-sm">A good lip balm (for prep)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-sm">One nude lip liner (close to your lip color)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-sm">One &quot;my lips but better&quot; shade</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-sm">One bold shade you love (red, berry, or pink)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-sm">A clear or tinted lip gloss</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-sm">A small concealer brush (for cleanup)</span>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-primary/20">
          <Link
            href="/makeup"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Guides
          </Link>
          <Link
            href="/makeup/eye-makeup"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            Next: Eye Makeup
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
