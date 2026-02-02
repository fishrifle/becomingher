"use client";

import Link from "next/link";
import PremiumGate from "@/components/PremiumGate";

export default function EveningGlamGuide() {
  return (
    <PremiumGate>
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/makeup" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Evening Glamour</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="mb-6">
            <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full border border-secondary/30">
              Premium Guide
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Full Glam for a Night Out</h2>
          <p className="text-foreground/70">
            This is the look for when you want to turn heads. Date night, parties, events, or just because
            you feel like being extra today. We&apos;re going all in — dramatic eyes, sculpted face, and statement lips.
            Every step includes tips specifically for trans women.
          </p>
        </div>

        <div className="space-y-8">
          {/* Time Estimate */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="font-semibold">Time: 30-45 minutes</p>
              <p className="text-sm text-foreground/70">Take your time and enjoy the process — getting glam is part of the fun</p>
            </div>
          </div>

          {/* Step 1: Prep */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 1: Prime Time</h3>
            <p className="text-foreground/70 mb-4">
              Evening makeup needs to last hours. Good prep makes the difference between makeup that looks
              amazing at midnight vs. makeup that melted by 9pm.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Skincare + Moisturizer</strong>
                  <p className="text-sm text-foreground/70">Cleanse, moisturize, and let it absorb for 5 minutes. Hydrated skin holds makeup better.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Primer everywhere</strong>
                  <p className="text-sm text-foreground/70">Use a pore-filling primer on your whole face. Add an eye primer on your lids too — this is essential for smoky eyes that don&apos;t crease.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Color correct thoroughly</strong>
                  <p className="text-sm text-foreground/70">For evening, be more generous with color corrector than your everyday look. Under harsher/different lighting, shadow can peek through. Cover the entire area, not just the darkest spots.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Step 2: Flawless Base */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 2: Flawless Base</h3>
            <p className="text-foreground/70 mb-4">
              Evening calls for more coverage than your everyday look, but the key is building it up in layers, not piling it on.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Medium-to-full coverage foundation</strong>
                  <p className="text-sm text-foreground/70">Apply with a damp beauty sponge for the most natural finish. Start from the center of your face and bounce outward. Build coverage on shadow areas with a second layer.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Concealer</strong>
                  <p className="text-sm text-foreground/70">Bright concealer under the eyes in an inverted triangle shape. Also conceal around the nose, any blemishes, and remaining shadow areas. Blend with a sponge.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong>Set with powder</strong>
                  <p className="text-sm text-foreground/70">Press (don&apos;t swipe) translucent powder under your eyes and T-zone. For the rest of the face, a very light dusting is enough.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Step 3: Sculpt */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 3: Sculpt & Contour</h3>
            <p className="text-foreground/70 mb-4">
              Contouring is especially powerful for trans women — it can soften angular features and create
              a more feminine face shape.
            </p>
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Contour (The Shadows)</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• <strong>Hollows of cheeks:</strong> Suck in your cheeks, apply contour in the hollow. Blend upward toward your ears — never downward</li>
                  <li>• <strong>Jawline:</strong> Blend contour along the jawline to soften a strong jaw. Focus on the corners/angles</li>
                  <li>• <strong>Forehead:</strong> If your forehead is prominent, contour along the hairline at the temples</li>
                  <li>• <strong>Nose:</strong> Two thin lines down the sides of your nose, blended well. This narrows and feminizes the nose</li>
                  <li>• Use a shade 2-3 shades darker than your skin. Matte only — no shimmer in contour</li>
                </ul>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Highlight (The Light)</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• <strong>Cheekbones:</strong> Apply highlighter on the highest point of your cheekbones</li>
                  <li>• <strong>Brow bone:</strong> A touch under your brow arch lifts the eye area</li>
                  <li>• <strong>Bridge of nose:</strong> A thin line down the center makes the nose appear slimmer</li>
                  <li>• <strong>Cupid&apos;s bow:</strong> A tiny dab above your lip center makes lips look fuller</li>
                  <li>• <strong>Inner corner of eyes:</strong> Opens up and brightens the eyes</li>
                  <li>• For evening, you can go more intense with highlighter than daytime — it catches the light beautifully</li>
                </ul>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Blush</h4>
                <p className="text-sm text-foreground/70">
                  Apply a deeper/more pigmented blush than your everyday look. For evening, berry, rose, or
                  warm pink shades add drama. Apply to the apples of your cheeks and blend up toward your temples.
                  Blush ties your contour and highlight together.
                </p>
              </div>
            </div>
          </section>

          {/* Step 4: Dramatic Eyes */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 4: Dramatic Eyes</h3>
            <p className="text-foreground/70 mb-4">
              This is where the glam happens. Choose one: Smoky Eye or Cut Crease. Both are stunning.
            </p>

            <div className="space-y-6">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-3">Option A: Classic Smoky Eye</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li><strong>1.</strong> Apply a matte transition shade (soft brown) in your crease and slightly above. Blend in windshield-wiper motions.</li>
                  <li><strong>2.</strong> Pack a darker shade (deep brown, charcoal, or plum) onto your lid, focusing on the outer corner.</li>
                  <li><strong>3.</strong> Blend the darker shade into the transition shade — there should be no hard lines.</li>
                  <li><strong>4.</strong> Add a shimmer or metallic shade to the center of your lid. Pat it on with your finger for maximum impact.</li>
                  <li><strong>5.</strong> Line your lower lash line with a smudged dark shadow or liner. Blend it out so it&apos;s smoky, not harsh.</li>
                  <li><strong>6.</strong> Apply a light shimmer to the inner corner and under the brow bone.</li>
                </ol>
              </div>

              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-3">Option B: Glam Cut Crease</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li><strong>1.</strong> Apply a transition shade in and above your crease.</li>
                  <li><strong>2.</strong> Using concealer on a flat brush, carve out the crease — apply concealer from your lash line up to the crease, creating a clean line.</li>
                  <li><strong>3.</strong> Pat a glitter or metallic shadow onto the concealer. This creates the &quot;cut&quot; effect.</li>
                  <li><strong>4.</strong> Deepen the crease above the cut with a darker matte shade.</li>
                  <li><strong>5.</strong> Clean up any fallout under the eyes with concealer.</li>
                </ol>
              </div>

              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-3">Liner & Lashes</h4>
                <ol className="space-y-2 text-sm text-foreground/70">
                  <li><strong>Eyeliner:</strong> A wing makes eyes look lifted and feminine. Start thin at the inner corner and thicken toward the outer corner. The wing should follow the angle of your lower lash line upward.</li>
                  <li><strong>Lashes:</strong> For evening, false lashes are a game-changer. Apply individual clusters for natural drama, or a full strip for full glam. Always curl your natural lashes and apply mascara before falsies.</li>
                  <li><strong>Lower lash mascara:</strong> One coat on the lower lashes opens up the eye area.</li>
                </ol>
              </div>

              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Trans Tip: Eye Feminization</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Lifting the outer corner with a wing counteracts hooded or deep-set eyes</li>
                  <li>• Shimmer on the center of the lid makes eyes look rounder and more feminine</li>
                  <li>• Highlighting the inner corner opens up the eyes and makes them appear wider apart</li>
                  <li>• Groomed, arched brows above dramatic eyes is the most feminizing combo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 5: Statement Lips */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 5: Statement Lips</h3>
            <p className="text-foreground/70 mb-4">
              The classic rule: dramatic eyes + nude lip, OR nude eyes + bold lip. For full glam, you can
              break this rule — but if you&apos;re unsure, pick one to emphasize.
            </p>
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Bold Lip Route</h4>
                <ol className="space-y-1 text-sm text-foreground/70">
                  <li><strong>1.</strong> Line lips with a matching lip liner — go slightly outside your natural line for fuller lips</li>
                  <li><strong>2.</strong> Fill in entirely with liner as a base</li>
                  <li><strong>3.</strong> Apply your bold shade (classic red, deep berry, wine)</li>
                  <li><strong>4.</strong> Blot, reapply, blot again for staying power</li>
                  <li><strong>5.</strong> Clean edges with concealer on an angled brush</li>
                </ol>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold mb-2">Nude Glam Lip Route</h4>
                <ol className="space-y-1 text-sm text-foreground/70">
                  <li><strong>1.</strong> Line with a nude liner slightly outside your natural line</li>
                  <li><strong>2.</strong> Apply a creamy nude lipstick</li>
                  <li><strong>3.</strong> Add gloss to the center of the bottom lip for dimension and plumpness</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Step 6: Setting */}
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Step 6: Lock It In</h3>
            <p className="text-foreground/70 mb-4">
              Your glam needs to survive a whole night. Here&apos;s how to make it bulletproof.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong>Setting spray</strong>
                  <p className="text-sm text-foreground/70">Hold 8-10 inches from your face and spray in an X and T pattern. Let it dry naturally — don&apos;t touch or fan.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong>Bring touch-up essentials</strong>
                  <p className="text-sm text-foreground/70">In your bag: blotting papers, your lip color, a small pressed powder, and a mini concealer. That&apos;s all you need for the whole night.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Complete Routine */}
          <section className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Quick Reference: Full Glam Routine</h3>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-primary font-bold">1.</span> Skincare + primer (face + eyes)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">2.</span> Color correct thoroughly</li>
              <li className="flex gap-3"><span className="text-primary font-bold">3.</span> Foundation (medium-full coverage)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">4.</span> Concealer + set with powder</li>
              <li className="flex gap-3"><span className="text-primary font-bold">5.</span> Contour + highlight + blush</li>
              <li className="flex gap-3"><span className="text-primary font-bold">6.</span> Brows</li>
              <li className="flex gap-3"><span className="text-primary font-bold">7.</span> Eye shadow (smoky or cut crease)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">8.</span> Eyeliner + lashes</li>
              <li className="flex gap-3"><span className="text-primary font-bold">9.</span> Lips (bold or nude glam)</li>
              <li className="flex gap-3"><span className="text-primary font-bold">10.</span> Setting spray</li>
            </ol>
            <p className="text-sm text-foreground/60 mt-4">
              You are going to look absolutely stunning. Go own that room.
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
          <Link href="/makeup/facial-feminization" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            Next: Facial Feminization
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
    </PremiumGate>
  );
}
