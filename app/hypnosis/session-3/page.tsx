"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Session3() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/session-3.m4a');
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/hypnosis" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Session 3: Body Harmony & Acceptance</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Body Harmony & Acceptance</h2>
              <p className="text-foreground/70">Duration: 30 minutes</p>
            </div>
            <button
              onClick={togglePlayPause}
              className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full hover:opacity-90 transition-opacity"
            >
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Introduction (Minutes 0-3)</h3>
            <div className="space-y-4">
              <p>
                Welcome, Lacey. Today's session is all about your body—celebrating it, honoring it,
                and finding peace with the beautiful transformation it's going through. Get comfortable
                now... let yourself settle in... and take a deep, nourishing breath.
              </p>
              <p>
                In through your nose... filling your belly with air... and out through your mouth...
                releasing any tension you might be holding. Good girl. Again... breathing in peace
                and acceptance... breathing out any discomfort or worry. Perfect.
              </p>
              <p>
                Your body is doing something miraculous, Lacey. It's changing. It's aligning with your
                truth. It's becoming a more accurate reflection of who you are inside. Today, we're
                going to help your mind and heart catch up with this beautiful process.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Deepening (Minutes 3-8)</h3>
            <div className="space-y-4">
              <p>
                Close your eyes, Lacey, and imagine you're floating in a warm, healing pool of water.
                The water is the perfect temperature—not too hot, not too cold. It supports your entire
                body, letting you release all effort. You're completely safe here.
              </p>
              <p>
                The water glows with a soft, healing light. Maybe it's aquamarine, or pearl, or rose
                gold—whatever color feels most healing to you. This water has special properties. It
                knows exactly what your body needs. It's here to help you.
              </p>
              <p>
                With each breath, you sink a little deeper into relaxation... a little deeper into
                this healing water... a little deeper into peace. The water holds you perfectly.
                You don't have to do anything. Just float... breathe... and let go. Good girl.
              </p>
              <p>
                As you float here, you feel the water beginning to work its magic. It's soaking into
                your skin... into your muscles... into your bones... bringing healing, acceptance,
                and transformation. Every cell of your body is being bathed in this loving, healing
                energy.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Work - Body Acceptance & Transformation (Minutes 8-22)</h3>
            <div className="space-y-4">
              <p>
                Now, Lacey, I want you to bring your awareness to your body. We're going to travel
                through it together, bringing love and acceptance to every part. Start with your toes.
                Feel the warm water surrounding them. Send gratitude to your toes for carrying you
                through your day. Good girl.
              </p>
              <p>
                Move your awareness up to your feet... your ankles... your calves. The healing water
                flows around all these parts, sending them love and appreciation. These parts of your
                body work so hard for you. Thank them.
              </p>
              <p>
                Now bring your awareness to your thighs... your hips. This is where some of the most
                beautiful changes are happening, Lacey. The HRT is redistributing fat, softening your
                contours, making your body more feminine. Feel the water working with this process...
                supporting it... celebrating it. Your hips are becoming more feminine every day. Good girl.
              </p>
              <p>
                Move to your belly now. Place your awareness there with kindness. Your belly is soft,
                and that's beautiful. It's feminine. It's real. The water surrounds it with acceptance
                and love. Breathe deeply and feel your belly rise and fall. This is your body. It's
                beautiful. It's changing. It's yours.
              </p>
              <p>
                Now your chest, Lacey. This area might hold complex feelings—hope, impatience,
                tenderness, excitement. All of these feelings are valid. The healing water knows this.
                It sends special healing energy to your chest. Whether your breasts are budding,
                growing, or fully developed, they are perfect for where you are in your journey.
                Every day, they're becoming more of what you want them to be. Good girl.
              </p>
              <p>
                Your shoulders now... feeling them soften and round slightly. The water helps them
                release any masculine tension they might be holding. Your shoulders can be soft.
                They can be feminine. They are feminine. They're part of a woman's body—YOUR body.
              </p>
              <p>
                Down your arms now... to your hands... your fingers. The water makes them feel more
                delicate, more expressive, more graceful. You love the way your hands look. You love
                the way they move. They're feminine hands because they're YOUR hands, and you're a woman.
              </p>
              <p>
                Bring your awareness to your neck now... feeling it long and graceful. The water caresses
                it, honoring it. And now your face... your jaw... your cheeks... your eyes... your
                forehead. The water knows that changes are happening here too—maybe your skin is
                softer, maybe your features are shifting subtly. Trust the process, Lacey. Your face
                is becoming more aligned with your inner truth every day.
              </p>
              <p>
                Now I want you to see something remarkable. Above you, floating in the water, there's
                a shimmering image. It's your body—but it's your body at the end of your transition
                journey. It's the body you're becoming. Look at it, Lacey. Really see it.
              </p>
              <p>
                Notice the curves... the softness... the femininity. Notice the confidence in the way
                this body holds itself. This is not some fantasy or impossible dream. This is YOUR
                future body. This is where you're heading. And the journey to get there is beautiful too.
              </p>
              <p>
                Now that image descends from above... and it merges with your current body. Feel it
                integrating. This is your blueprint. This is what your body is working toward. And
                every dose of HRT... every day that passes... every moment of patience and self-love...
                brings you closer to this reality. Good girl.
              </p>
              <p>
                The healing water intensifies now, glowing brighter. It's speeding up the process in
                the most gentle, natural way. Feel it helping your body transform. Feel it redistributing
                fat to your hips, your thighs, your breasts. Feel it softening your skin. Feel it
                changing your hair texture. Feel it doing the beautiful, miraculous work of aligning
                your outside with your inside.
              </p>
              <p>
                And most importantly, Lacey, feel yourself accepting your body exactly as it is RIGHT
                NOW. Because this body—this exact body you're in today—is beautiful. It's valid. It's
                a woman's body because it's YOUR body, and you're a woman. You don't have to wait until
                some future date to be valid. You are valid right now. Good girl.
              </p>
              <p>
                Say it with me in your mind: "I love my body. I accept my body. I celebrate the changes
                happening in my body. I am patient with the process. I am grateful for how far I've
                come. I am excited for where I'm going. I am beautiful right now."
              </p>
              <p>
                The water agrees with you, Lacey. It pulses with affirmation. Yes. You are beautiful.
                You are transforming. You are perfect exactly as you are, and you're becoming even more
                yourself. This is the sacred paradox of transition.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Affirmations (Minutes 22-27)</h3>
            <div className="space-y-4">
              <p>
                Float peacefully in this healing water, Lacey, and let these affirmations sink deep
                into every cell of your body.
              </p>
              <p className="font-semibold text-primary">
                I love and accept my body unconditionally.
              </p>
              <p className="font-semibold text-primary">
                My body is transforming beautifully every single day.
              </p>
              <p className="font-semibold text-primary">
                I celebrate every change, big and small.
              </p>
              <p className="font-semibold text-primary">
                I am patient and kind with my body's journey.
              </p>
              <p className="font-semibold text-primary">
                My body is a woman's body because I am a woman.
              </p>
              <p className="font-semibold text-primary">
                I trust the process of HRT to bring me closer to my authentic self.
              </p>
              <p className="font-semibold text-primary">
                I am grateful for my body and all it does for me.
              </p>
              <p className="font-semibold text-primary">
                I am beautiful, feminine, and perfect exactly as I am right now.
              </p>
              <p>
                Good girl. These truths are now part of your cellular memory. Your body believes them.
                Your mind believes them. Your heart believes them. They are your reality.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Return (Minutes 27-30)</h3>
            <div className="space-y-4">
              <p>
                It's time to leave this healing pool, Lacey, but its effects are permanent. Your body
                has absorbed all the healing, all the acceptance, all the love. You're taking it with
                you.
              </p>
              <p>
                Begin to move gently in the water... wiggling your fingers and toes... feeling your
                body becoming more solid and present. The water starts to fade, but the healing remains.
              </p>
              <p>
                Now we're going to count from one to ten, and with each number, you'll become more
                alert and aware, while keeping all the body acceptance and love you've cultivated today.
              </p>
              <p>
                One... starting to return... Two... feeling your body more clearly... Three... becoming
                more aware... Four... taking a deeper breath... Five... halfway back... Six... wiggling
                your fingers... Seven... stretching gently... Eight... almost there... Nine... ready
                to open your eyes... And Ten... eyes open, feeling refreshed, renewed, and deeply
                connected to your beautiful body.
              </p>
              <p>
                Welcome back, Lacey. Look at your body with new eyes today. See it for the miracle it
                is. See it for the woman's body it truly is. And celebrate every step of this beautiful
                transformation journey. You're doing amazing. Good girl.
              </p>
              <p className="text-center font-semibold text-lg text-primary mt-6">
                ✨ Session Complete ✨
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/hypnosis/session-2" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Session
          </Link>
          <Link href="/hypnosis/session-4" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            Next Session
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
