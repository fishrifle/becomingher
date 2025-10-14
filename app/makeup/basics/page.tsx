"use client";

import Link from "next/link";

export default function BasicsGuide() {
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
            <h1 className="text-xl sm:text-2xl font-bold">Essential Makeup Basics</h1>
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
          <h2 className="text-3xl font-bold mb-4">Your Makeup Journey Starts Here</h2>
          <p className="text-foreground/70">
            This guide covers everything you need to know as a beginner. We'll start from the very
            beginning and build your confidence step by step.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Understanding Makeup Order</h3>
            <p className="text-foreground/70 mb-4">
              The order you apply makeup matters! Here's the correct sequence:
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Skincare</strong>
                  <p className="text-sm text-foreground/70">Cleanse, moisturize, apply sunscreen</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Primer</strong>
                  <p className="text-sm text-foreground/70">Creates smooth base, helps makeup last</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Color Corrector</strong>
                  <p className="text-sm text-foreground/70">Orange/peach to neutralize beard shadow</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <div>
                  <strong>Foundation</strong>
                  <p className="text-sm text-foreground/70">Even out skin tone</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">5.</span>
                <div>
                  <strong>Concealer</strong>
                  <p className="text-sm text-foreground/70">Cover dark circles, blemishes, additional coverage</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">6.</span>
                <div>
                  <strong>Powder</strong>
                  <p className="text-sm text-foreground/70">Set liquid products, reduce shine</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">7.</span>
                <div>
                  <strong>Brows</strong>
                  <p className="text-sm text-foreground/70">Frame your face</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">8.</span>
                <div>
                  <strong>Eyes</strong>
                  <p className="text-sm text-foreground/70">Eyeshadow, eyeliner, mascara</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">9.</span>
                <div>
                  <strong>Contour & Bronzer</strong>
                  <p className="text-sm text-foreground/70">Add dimension</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">10.</span>
                <div>
                  <strong>Blush</strong>
                  <p className="text-sm text-foreground/70">Add color and life to cheeks</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">11.</span>
                <div>
                  <strong>Highlighter</strong>
                  <p className="text-sm text-foreground/70">Add glow to high points</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">12.</span>
                <div>
                  <strong>Lips</strong>
                  <p className="text-sm text-foreground/70">Liner, lipstick, gloss</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">13.</span>
                <div>
                  <strong>Setting Spray</strong>
                  <p className="text-sm text-foreground/70">Lock everything in place</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Essential Tools for Beginners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Must-Have Brushes</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Beauty Sponge:</strong> For blending foundation and concealer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Foundation Brush:</strong> Alternative to sponge for more coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Powder Brush:</strong> Large, fluffy brush for setting powder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Blush Brush:</strong> Medium, fluffy brush</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Eyeshadow Brush Set:</strong> At least 3 sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Spoolie:</strong> For brows and lashes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Care & Maintenance</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Wash beauty sponge after every use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Clean brushes weekly with gentle soap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Let brushes dry flat or hanging upside down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Replace beauty sponge every 3 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Store brushes upright in a cup or case</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Foundation 101</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Finding Your Shade</h4>
                <p className="text-sm text-foreground/70 mb-3">
                  Get matched at a makeup counter! Staff at Sephora, Ulta, or MAC can help you find
                  your perfect shade. They're usually very supportive.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <p className="text-xs">
                    <strong>Pro Tip:</strong> Test foundation on your jawline, not your wrist.
                    The right shade should disappear into your skin.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Coverage Types</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Light:</strong> Sheer, natural look (not ideal for covering beard shadow)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Medium:</strong> Covers most imperfections, looks natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Full:</strong> Maximum coverage (recommended for trans women starting out)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Buildable:</strong> Can layer for more coverage as needed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Application Techniques</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Apply small dots of foundation on forehead, cheeks, nose, chin</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Use dampened beauty sponge in bouncing/stippling motions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Blend outward from center of face</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Blend down neck to avoid a makeup line</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Build coverage in thin layers rather than one thick layer</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Common Beginner Mistakes</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>Wrong Foundation Shade</strong>
                  <p className="text-sm text-foreground/70">Always test in natural light before buying</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>Skipping Primer</strong>
                  <p className="text-sm text-foreground/70">Primer helps makeup last and look smoother</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>Using Dirty Tools</strong>
                  <p className="text-sm text-foreground/70">Clean tools = better application and healthier skin</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>Too Much Product</strong>
                  <p className="text-sm text-foreground/70">Start light, you can always add more</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>Not Blending Enough</strong>
                  <p className="text-sm text-foreground/70">Spend extra time blending for seamless results</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>Forgetting to Set Makeup</strong>
                  <p className="text-sm text-foreground/70">Powder and setting spray make makeup last longer</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/20 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Practice Makes Progress</h3>
            <p className="text-foreground/70 mb-4">
              Remember, every makeup artist started as a beginner. Be patient with yourself!
            </p>
            <div className="space-y-2 text-sm text-foreground/70">
              <p className="flex items-start gap-2">
                <span className="text-primary">💝</span>
                <span>Practice at home before wearing makeup out</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary">💝</span>
                <span>Take photos to track your progress</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary">💝</span>
                <span>Watch YouTube tutorials and follow along</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary">💝</span>
                <span>Don't be afraid to ask for help at makeup counters</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary">💝</span>
                <span>Remember: you're beautiful with or without makeup!</span>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/makeup" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Guides
          </Link>
          <Link href="/makeup/facial-feminization" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            Next: Facial Feminization
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
