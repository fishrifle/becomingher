"use client";

import Link from "next/link";

export default function CoverageGuide() {
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
            <h1 className="text-xl sm:text-2xl font-bold">Beard Cover & Coverage</h1>
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
          <h2 className="text-3xl font-bold mb-4">Covering Beard Shadow</h2>
          <p className="text-foreground/70">
            One of the most common concerns for trans women is covering beard shadow (5 o'clock shadow).
            This detailed guide will show you professional techniques for achieving smooth, flawless coverage.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Understanding Beard Shadow</h3>
            <p className="text-foreground/70 mb-4">
              Beard shadow appears blue/gray under the skin because hair follicles sit below the surface.
              Regular foundation alone won't cover it—you need color correction.
            </p>
            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Color Theory Basics:</h4>
              <p className="text-sm text-foreground/70">
                Orange and peach tones neutralize blue/gray tones. This is why color correctors are essential
                for covering beard shadow effectively.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">The Complete Coverage Method</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Step 1: Preparation</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Shave as close as possible (preferably against the grain)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Wait 10-15 minutes for any redness to calm down</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Apply cold water or aloe vera gel to soothe skin</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Moisturize well and let it absorb completely</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Apply primer, focusing on beard area</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Step 2: Color Correction</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Choose the right corrector shade:</span>
                  </li>
                  <li className="flex gap-2 ml-6">
                    <span className="text-secondary">→</span>
                    <span><strong>Fair skin:</strong> Peachy-pink corrector</span>
                  </li>
                  <li className="flex gap-2 ml-6">
                    <span className="text-secondary">→</span>
                    <span><strong>Light-medium skin:</strong> Peach or light orange</span>
                  </li>
                  <li className="flex gap-2 ml-6">
                    <span className="text-secondary">→</span>
                    <span><strong>Medium-dark skin:</strong> Orange or red-orange</span>
                  </li>
                  <li className="flex gap-2 ml-6">
                    <span className="text-secondary">→</span>
                    <span><strong>Deep skin:</strong> Deep orange or red</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Apply color corrector with a brush or sponge in patting motions (don't rub!)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Use enough product—don't be shy! You need full coverage here</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Let it set for 30-60 seconds before next step</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Step 3: Foundation Application</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Use FULL coverage foundation (this is crucial)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Apply in thin layers—first layer with stippling/patting motion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Use a damp beauty sponge for best blending</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Focus extra product on areas where shadow is darkest</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Let first layer set, then assess if you need more</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">6.</span>
                    <span>Apply second layer if needed, using same patting technique</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Step 4: Concealer (Optional Extra Coverage)</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>If any shadow still shows through, use full-coverage concealer</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Pat (don't swipe) over problem areas only</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Blend edges carefully so it looks seamless</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">Step 5: Setting</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Use translucent or slightly tinted setting powder</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Press powder into skin with a damp sponge (baking method)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Let it sit for 5-10 minutes to really lock in coverage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Dust away excess powder with a fluffy brush</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Finish with setting spray for maximum longevity</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Recommended Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-3">Color Correctors</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>NYX Color Correcting Concealer (Budget-friendly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>LA Girl Pro Conceal in Orange/Peach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Dermablend Quick-Fix (Cult favorite)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>RCMA Color Process Foundation (Professional)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Full Coverage Foundations</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Estée Lauder Double Wear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Dermacol Make-Up Cover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Kat Von D Lock-It Foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>RCMA VK Foundation (Water-resistant)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Pro Tips & Tricks</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <strong>Lighting Matters</strong>
                  <p className="text-foreground/70">Check your coverage in natural daylight—bathroom lighting can be deceiving</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <strong>Pat, Don't Rub</strong>
                  <p className="text-foreground/70">Rubbing moves product around instead of building coverage</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <strong>Layer Thin</strong>
                  <p className="text-foreground/70">Multiple thin layers look more natural than one thick layer</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <strong>Wait Between Layers</strong>
                  <p className="text-foreground/70">Let each layer set 30-60 seconds before adding more</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <strong>Consider Laser Hair Removal</strong>
                  <p className="text-foreground/70">Long-term solution that makes makeup application easier (consult a professional)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/20 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">You've Got This!</h3>
            <p className="text-foreground/70 mb-4">
              Covering beard shadow takes practice, but you'll get better every time. Be patient with
              yourself and remember that many cis women also deal with facial hair and use these same
              techniques. You're not alone, and you're beautiful! 💕
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/makeup/facial-feminization" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Guide
          </Link>
          <Link href="/makeup" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Back to All Guides
          </Link>
        </div>
      </main>
    </div>
  );
}
