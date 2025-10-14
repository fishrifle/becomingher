"use client";

import Link from "next/link";

export default function FacialFeminization() {
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
            <h1 className="text-xl sm:text-2xl font-bold">Facial Feminization Techniques</h1>
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
          <h2 className="text-3xl font-bold mb-4">Facial Feminization Through Makeup</h2>
          <p className="text-foreground/70">
            These contouring and highlighting techniques are designed to create softer, more
            feminine facial features. Remember: the goal is to feel beautiful and confident,
            not to achieve some arbitrary standard.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Understanding Face Shape Feminization</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Typically masculine faces tend to have: stronger jaw lines, more prominent brow bones,
                wider/flatter noses, thinner lips, and less prominent cheekbones. Makeup can help
                create the illusion of softer, more rounded features.
              </p>
              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                <p className="font-semibold mb-2">Key Principle:</p>
                <p className="text-sm">
                  Light brings features forward, darkness pushes them back. We'll use this to
                  reshape your face optically.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 1: Softening the Forehead</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Goal:</h4>
                <p className="text-sm text-foreground/70">
                  Reduce the appearance of a prominent brow bone and create a smoother, more rounded forehead.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technique:</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Apply a shade darker than your foundation along the brow bone area (the ridge above your eyes)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Blend upward and outward to create a shadow that "pushes back" the brow bone</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Apply highlighter to the center of your forehead (not near the hairline) to bring that area forward</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Blend thoroughly - the transition should be seamless</span>
                  </li>
                </ol>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-xs">
                  <strong>Pro Tip:</strong> Use a fluffy brush and blend in circular motions. The key is subtlety!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 2: Refining the Nose</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Goal:</h4>
                <p className="text-sm text-foreground/70">
                  Create the illusion of a narrower, more delicate nose with a slight upturn.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technique:</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Draw two thin contour lines down the sides of your nose (from between brows to tip)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Apply contour underneath the tip of your nose to visually "lift" it</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Highlight down the bridge of your nose (keep the line thin!)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Add a tiny dot of highlighter on the very tip of your nose</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Blend carefully - you want to see the effect but not the actual lines</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 3: Enhancing Cheekbones</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Goal:</h4>
                <p className="text-sm text-foreground/70">
                  Create higher, more prominent cheekbones for a feminine face shape.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technique:</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Make a "fish face" to find your natural cheekbone</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Apply contour just below your cheekbone, starting from your ear</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Angle the contour up toward the corner of your eye (but don't go past your pupil)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Apply blush on the apples of your cheeks (smile to find them)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Highlight the top of your cheekbones, creating a "shelf" effect</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">6.</span>
                    <span>Blend the contour down and out, blush in circles, and highlighter with light sweeps</span>
                  </li>
                </ol>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-xs">
                  <strong>Pro Tip:</strong> For a lifted look, angle everything upward. Never contour or apply blush in a downward direction.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 4: Softening the Jawline</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Goal:</h4>
                <p className="text-sm text-foreground/70">
                  Create a softer, more rounded or heart-shaped jawline instead of a square one.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technique:</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Apply contour along the corners of your jaw (the angles)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Extend the contour slightly down under your jaw to create shadow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Blend downward and back toward your ears</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Apply a touch of highlighter to the center of your chin (this creates an oval shape)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Avoid contouring the entire jawline - focus only on the corners</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 5: Creating Fuller Lips</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Goal:</h4>
                <p className="text-sm text-foreground/70">
                  Make lips appear fuller and more defined (feminine lips tend to be fuller, especially the upper lip).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technique:</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Line your lips with a lip liner that matches your lipstick</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>Slightly overdraw the cupid's bow (the V-shape on your upper lip) to add height</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Overdraw the center of your lower lip very slightly for fullness</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>Fill in lips with lipstick or gloss</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">5.</span>
                    <span>Add a tiny dot of highlighter or light gloss to the center of your lower lip for dimension</span>
                  </li>
                </ol>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-xs">
                  <strong>Pro Tip:</strong> Don't overdraw too much - just outside your natural lip line. The goal is enhancement, not a cartoon effect!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/20 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Quick Reference: Product Placement</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⬛</span>
                <div>
                  <p className="font-semibold">Contour (Dark):</p>
                  <p className="text-foreground/70">Brow bone, sides of nose, under nose tip, under cheekbones, jaw corners, hairline (optional)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-semibold">Highlight (Light):</p>
                  <p className="text-foreground/70">Center forehead, bridge of nose, tip of nose, top of cheekbones, center of chin, cupid's bow</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌸</span>
                <div>
                  <p className="font-semibold">Blush:</p>
                  <p className="text-foreground/70">Apples of cheeks, angled slightly upward toward temples</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Final Tips</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">•</span>
                <span><strong>Lighting:</strong> Apply makeup in natural light or use a daylight-simulating bulb</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">•</span>
                <span><strong>Blend, blend, blend:</strong> Harsh lines look obvious. Spend extra time blending!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">•</span>
                <span><strong>Build gradually:</strong> Start light and add more. It's easier than removing excess</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">•</span>
                <span><strong>Set your work:</strong> Use setting spray or powder to make your contour last all day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">•</span>
                <span><strong>Practice:</strong> This technique takes time to master. Don't give up!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-lg">•</span>
                <span><strong>You're beautiful:</strong> Makeup enhances, but you're gorgeous with or without it</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/makeup" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Guides
          </Link>
          <Link href="/makeup/coverage" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            Next: Beard Coverage
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
