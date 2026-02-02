"use client";

import Link from "next/link";

export default function EverydayLookGuide() {
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
            <h1 className="text-xl sm:text-2xl font-bold">Natural Everyday Look</h1>
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
          <h2 className="text-3xl font-bold mb-4">The &quot;No-Makeup Makeup&quot; Look</h2>
          <p className="text-foreground/70">
            This is the look you&apos;ll reach for most days — natural, polished, and effortlessly feminine.
            The goal is to look like the best version of yourself, not like you&apos;re &quot;wearing makeup.&quot;
            This guide is designed with trans women in mind, addressing coverage needs while keeping things light and natural.
          </p>
        </div>

        <div className="space-y-8">
          {/* Time Estimate */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="font-semibold">Time: 10-15 minutes</p>
              <p className="text-sm text-foreground/70">Once you get the hang of it, this becomes second nature</p>
            </div>
          </div>

          {/* Step 1: Skincare */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 1: Skincare First</h3>
            <p className="text-foreground/70 mb-4">
              Natural-looking makeup starts with good skin. This takes 2 minutes and makes everything else look better.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Wash your face</strong>
                  <p className="text-sm text-foreground/70">A gentle cleanser. If you&apos;re on HRT, your skin may be softer and more sensitive — use something mild.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Moisturizer</strong>
                  <p className="text-sm text-foreground/70">Apply a lightweight moisturizer. Let it sink in for a minute. This prevents makeup from looking cakey.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>SPF</strong>
                  <p className="text-sm text-foreground/70">Sunscreen every day. Especially important if you&apos;re doing laser hair removal — sun exposure can cause issues with treatment areas.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Step 2: Color Correct */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 2: Color Correct (If Needed)</h3>
            <p className="text-foreground/70 mb-4">
              This is the trans-specific step that makes all the difference. If you have any beard shadow,
              this is how you neutralize it while keeping things natural.
            </p>
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10 mb-4">
              <h4 className="font-semibold mb-2">The Trick</h4>
              <ul className="space-y-1 text-sm text-foreground/70">
                <li>• Use a <strong>peach/orange color corrector</strong> ONLY where you see shadow (usually upper lip, chin, jawline)</li>
                <li>• Tap it in with your ring finger — don&apos;t rub or spread</li>
                <li>• Less is more. You can always add, but you can&apos;t subtract without starting over</li>
                <li>• For a natural look, go with peach (lighter skin) or orange (deeper skin)</li>
              </ul>
            </div>
            <p className="text-sm text-foreground/60">
              No shadow? Skip this step entirely. As HRT and laser/electrolysis progress, you may need less and less of this.
            </p>
          </section>

          {/* Step 3: Base */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 3: Light Base</h3>
            <p className="text-foreground/70 mb-4">
              For an everyday look, you want coverage that evens out your skin without looking heavy.
            </p>
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Option A: Tinted Moisturizer / BB Cream (Easiest)</h4>
                <p className="text-sm text-foreground/70">Apply with your fingers like moisturizer. Sheer coverage, very natural. Best if you have minimal shadow concerns.</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Option B: Light Foundation (More Coverage)</h4>
                <p className="text-sm text-foreground/70">Use a damp beauty sponge. Bounce (don&apos;t drag) the product onto your skin. Build coverage only where you need it — don&apos;t apply the same amount everywhere.</p>
              </div>
            </div>
            <div className="mt-4 bg-background/50 rounded-lg p-4 border border-primary/10">
              <h4 className="font-semibold mb-2">Trans Tip: Strategic Coverage</h4>
              <p className="text-sm text-foreground/70">
                Apply more product where you color-corrected, and less everywhere else. This gives you the
                coverage where you need it while keeping the rest of your face looking like real skin.
              </p>
            </div>
          </section>

          {/* Step 4: Concealer */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 4: Concealer</h3>
            <p className="text-foreground/70 mb-4">
              Just two spots — that&apos;s all you need for everyday.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Under eyes</strong>
                  <p className="text-sm text-foreground/70">Draw a small upside-down triangle under each eye. Blend outward with your ring finger or a sponge. This brightens your whole face.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Any remaining spots</strong>
                  <p className="text-sm text-foreground/70">Dab concealer on blemishes or any areas where shadow peeks through. Pat to blend — don&apos;t swipe.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Step 5: Set */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 5: Set It (Lightly)</h3>
            <p className="text-foreground/70 mb-4">
              A light dusting of powder keeps everything in place without looking powdery.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• Use a <strong>translucent setting powder</strong> with a fluffy brush</li>
              <li>• Only powder the areas that get oily: T-zone (forehead, nose, chin)</li>
              <li>• Skip the cheeks — leaving them unpowdered keeps a natural, dewy finish</li>
              <li>• For the color-corrected areas, a light powder helps lock everything in</li>
            </ul>
          </section>

          {/* Step 6: Brows */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 6: Brows</h3>
            <p className="text-foreground/70 mb-4">
              Groomed brows are one of the most feminizing things you can do — even without any other makeup.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Brush them up</strong>
                  <p className="text-sm text-foreground/70">Use a spoolie brush to comb brows upward and outward.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Fill sparse areas</strong>
                  <p className="text-sm text-foreground/70">Use a brow pencil with light, hair-like strokes. Match your hair color or go one shade lighter for a softer look.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Set with brow gel</strong>
                  <p className="text-sm text-foreground/70">A clear or tinted brow gel keeps everything in place all day.</p>
                </div>
              </li>
            </ol>
            <div className="mt-4 bg-background/50 rounded-lg p-4 border border-primary/10">
              <h4 className="font-semibold mb-2">Feminizing Tip</h4>
              <p className="text-sm text-foreground/70">
                Feminine brows tend to have a higher arch and be thinner than masculine brows. If you haven&apos;t
                had them professionally shaped yet, consider getting them threaded or waxed — it&apos;s a game-changer.
              </p>
            </div>
          </section>

          {/* Step 7: Eyes */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 7: Simple Eye Makeup</h3>
            <p className="text-foreground/70 mb-4">
              For everyday, keep it minimal but impactful.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Neutral eyeshadow</strong>
                  <p className="text-sm text-foreground/70">Sweep a soft matte shade (taupe, soft brown, or champagne) across your lid with your finger. That&apos;s it — one shade, one step.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Curl lashes + mascara</strong>
                  <p className="text-sm text-foreground/70">Curl your lashes (makes a huge difference), then one or two coats of mascara. Wiggle the wand at the base and pull upward.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Optional: Tight-line</strong>
                  <p className="text-sm text-foreground/70">Run a dark brown or black pencil along your upper waterline (the inner rim). This makes your lashes look thicker without visible eyeliner.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Step 8: Cheeks */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 8: A Touch of Color</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Blush</strong>
                  <p className="text-sm text-foreground/70">Smile and apply a soft pink or peach blush to the apples of your cheeks, blending upward toward your temples. Cream blush looks the most natural — tap it on with your fingers.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Highlighter (optional)</strong>
                  <p className="text-sm text-foreground/70">A tiny dab of highlighter on the high points of your cheekbones, bridge of nose, and cupid&apos;s bow. Should be subtle — if you can see it from 3 feet away, blend more.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Step 9: Lips */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 9: Lips</h3>
            <p className="text-foreground/70 mb-4">
              Keep it simple and wearable.
            </p>
            <div className="space-y-3">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Option A: Tinted Lip Balm</h4>
                <p className="text-sm text-foreground/70">The easiest option. Just swipe and go. Gives a hint of color while keeping lips hydrated.</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Option B: &quot;Your Lips But Better&quot; Shade</h4>
                <p className="text-sm text-foreground/70">A nude lipstick or lip crayon that&apos;s close to your natural lip color but slightly more polished. This is the everyday essential.</p>
              </div>
            </div>
          </section>

          {/* The Complete Routine */}
          <section className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Quick Reference: Your Daily Routine</h3>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-primary font-bold">1.</span> Skincare (cleanser, moisturizer, SPF)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">2.</span> Color correct shadow areas (if needed)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">3.</span> BB cream or light foundation</li>
              <li className="flex gap-3"><span className="text-primary font-bold">4.</span> Concealer under eyes + spots</li>
              <li className="flex gap-3"><span className="text-primary font-bold">5.</span> Light powder on T-zone</li>
              <li className="flex gap-3"><span className="text-primary font-bold">6.</span> Brows (fill + gel)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">7.</span> One shadow + mascara</li>
              <li className="flex gap-3"><span className="text-primary font-bold">8.</span> Blush on cheeks</li>
              <li className="flex gap-3"><span className="text-primary font-bold">9.</span> Tinted lip balm</li>
            </ol>
            <p className="text-sm text-foreground/60 mt-4">
              Once this becomes muscle memory, you can do it in 10 minutes flat.
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-primary/20">
          <Link href="/makeup" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Guides
          </Link>
          <Link href="/makeup/evening-glam" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            Next: Evening Glamour
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
