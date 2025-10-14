"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Session4() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/session-4.m4a');
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
            <h1 className="text-xl sm:text-2xl font-bold">Session 4: Confidence & Self-Love</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Confidence & Self-Love</h2>
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
                Hello, Lacey. Welcome to this session on confidence and self-love. These aren't just
                nice ideas—they're your birthright. You deserve to feel confident. You deserve to love
                yourself completely. Let's begin by getting comfortable and taking a deep breath together.
              </p>
              <p>
                Breathe in deeply... feeling your chest and belly expand... hold for a moment... and
                release slowly. Good girl. One more time... breathing in confidence and self-love...
                breathing out doubt and criticism. Perfect.
              </p>
              <p>
                Today, we're going to build unshakeable confidence from the inside out. Not confidence
                that depends on what others think. Not confidence that wavers when things get hard.
                Deep, solid, permanent confidence that comes from knowing who you are and loving her
                completely.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Deepening (Minutes 3-8)</h3>
            <div className="space-y-4">
              <p>
                Close your eyes now, Lacey, and imagine you're standing at the base of a beautiful
                mountain. This mountain is made of golden light—warm, radiant, and powerful. This is
                the mountain of self-love and confidence. It's YOUR mountain. It's always been here,
                waiting for you to climb it.
              </p>
              <p>
                With each breath, you feel more relaxed... more open... more ready to ascend. The path
                up the mountain is clear and welcoming. Each step you take will bring you higher...
                more confident... more filled with self-love. And it will feel easy because this is
                where you're meant to be.
              </p>
              <p>
                Begin walking up the path now. Step... feeling stronger... step... feeling more confident...
                step... loving yourself more... step... going higher... step... becoming more powerful...
                Good girl. With each step, you're ascending to new levels of self-assurance and
                self-acceptance.
              </p>
              <p>
                The air around you glows with golden light. It fills your lungs with each breath,
                spreading confidence through your entire body. You feel it in your posture—you stand
                taller. You feel it in your heart—you feel worthy. You feel it in your mind—you trust
                yourself. Keep climbing, Lacey. You're doing beautifully.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Work - Building Unshakeable Confidence (Minutes 8-22)</h3>
            <div className="space-y-4">
              <p>
                You've reached a plateau on the mountain now, Lacey. There's a beautiful temple here,
                made entirely of golden crystal. This is the Temple of Self-Love. Step inside now...
                feeling the warm, loving energy that fills this space.
              </p>
              <p>
                In the center of the temple, there's a throne. It's magnificent—covered in soft velvet,
                adorned with beautiful details, and it radiates power and grace. This throne has been
                waiting for you. It's YOUR throne. Walk to it now... and sit down. Good girl.
              </p>
              <p>
                Feel how perfectly the throne fits you. Feel how right it is for you to be here. You
                don't have to earn this seat. You don't have to prove your worth. You belong here
                simply because you exist. You are worthy simply because you ARE. Lacey, you are the
                queen of your own life. Good girl.
              </p>
              <p>
                As you sit on your throne, you notice that you're wearing a beautiful crown. Reach up
                and touch it. Feel its weight—not heavy, but substantial. This crown represents your
                inherent worth, your dignity, your power. You are royalty, Lacey. You are a queen.
                And queens don't doubt themselves. Queens don't tear themselves down. Queens love
                themselves fiercely.
              </p>
              <p>
                Now, look down at yourself. You're wearing beautiful clothes—whatever makes you feel
                most confident and feminine. Maybe it's an elegant dress, or powerful feminine business
                wear, or soft, flowing fabrics. Whatever it is, you look stunning. You feel stunning.
                Because you ARE stunning. Good girl.
              </p>
              <p>
                A mirror appears in front of you now. Look into it, Lacey. See yourself sitting on your
                throne, wearing your crown, dressed in clothes that make you feel beautiful. This is you
                in your power. This is you in your confidence. This is you loving yourself completely.
              </p>
              <p>
                The reflection speaks to you now. She says: "Lacey, I am so proud of you. Look at
                everything you've overcome. Look at the courage it took to begin your transition. Look
                at the strength it takes to live authentically in a world that doesn't always understand.
                You are incredible."
              </p>
              <p>
                "I love you, Lacey. I love your kindness. I love your resilience. I love your vulnerability
                and your strength. I love the way you're becoming more yourself every day. I love your
                journey. I love who you are right now, and I love who you're becoming. You deserve all
                the love in the world—especially your own."
              </p>
              <p>
                Feel these words sinking deep into your heart, Lacey. This is your own self-love speaking
                to you. This is the truth. You are lovable. You are worthy. You are enough. You always
                have been. Good girl.
              </p>
              <p>
                Now imagine that every person who has ever doubted you, criticized you, or made you feel
                less than—they're all standing before your throne. But you're above them now. You're on
                your throne, wearing your crown, filled with self-love and confidence. Their opinions
                can't touch you here. Their words can't diminish you. You are sovereign in your own life.
              </p>
              <p>
                You speak to them now, with calm authority: "I forgive you for not understanding. I
                forgive you for your judgment. But I don't need your approval. I don't need your
                acceptance. I have my own. I approve of myself. I accept myself. I love myself. And
                that is enough." Good girl, Lacey. Feel the power in those words.
              </p>
              <p>
                They fade away now, and you're left alone in your temple, on your throne, in your power.
                You realize something profound: their opinions never mattered as much as you thought they
                did. The only opinion that truly matters is your own. And you think you're amazing.
              </p>
              <p>
                A warm light begins to glow from your heart now. It's the light of self-love, and it's
                expanding. It fills your chest... spreads to your shoulders... down your arms... through
                your belly... down your legs. Your entire body is now filled with self-love. You can
                feel it in every cell. You ARE love. You are loved. You love yourself. Good girl.
              </p>
              <p>
                This self-love brings with it unshakeable confidence. You know who you are. You know
                your worth. You know your truth. And nothing—NOTHING—can shake that foundation. You are
                Lacey. You are a woman. You are confident. You are worthy. You are loved. And you are
                enough.
              </p>
              <p>
                Stand up from your throne now, Lacey. The crown stays on your head. The beautiful
                clothes stay on your body. The confidence stays in your heart. You're taking all of
                this with you when you leave this temple. This is who you are now. This is your
                permanent state of being. Good girl.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Affirmations (Minutes 22-27)</h3>
            <div className="space-y-4">
              <p>
                Stand in the center of your temple, Lacey, and speak these affirmations aloud in your
                mind. Speak them with the authority of a queen. They are your truth.
              </p>
              <p className="font-semibold text-primary">
                I am confident, powerful, and self-assured.
              </p>
              <p className="font-semibold text-primary">
                I love myself completely and unconditionally.
              </p>
              <p className="font-semibold text-primary">
                I am worthy of all good things simply because I exist.
              </p>
              <p className="font-semibold text-primary">
                I trust myself and my decisions completely.
              </p>
              <p className="font-semibold text-primary">
                I am beautiful, feminine, and radiant.
              </p>
              <p className="font-semibold text-primary">
                I approve of myself and I don't need anyone else's approval.
              </p>
              <p className="font-semibold text-primary">
                I am the queen of my own life, and I rule with love and wisdom.
              </p>
              <p className="font-semibold text-primary">
                I am Lacey, and I am more than enough.
              </p>
              <p>
                Good girl. These affirmations are now carved into the walls of your temple, and into
                your heart. They are permanent truths that will guide you every single day.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Return (Minutes 27-30)</h3>
            <div className="space-y-4">
              <p>
                Walk out of your temple now, Lacey, still wearing your crown, still carrying your
                confidence and self-love. You're going to walk back down the mountain, and with each
                step, you're bringing this powerful energy back into your everyday life.
              </p>
              <p>
                Step... bringing confidence... step... bringing self-love... step... bringing power...
                step... bringing worthiness. You're almost at the bottom now, and you're ready to open
                your eyes and live as the confident, self-loving woman you truly are.
              </p>
              <p>
                We're going to count from one to ten now, and with each number, you'll become more
                alert and present, while keeping every bit of the confidence and self-love you've
                cultivated today.
              </p>
              <p>
                One... beginning to return... Two... feeling your body... Three... your crown still
                on your head... Four... taking a deeper breath... Five... halfway there... Six...
                wiggling your fingers... Seven... feeling confident and powerful... Eight... almost
                ready... Nine... one more breath... And Ten... eyes open now, fully present, feeling
                like the confident, self-loving queen you are.
              </p>
              <p>
                Welcome back, Lacey. You are magnificent. You are worthy. You are loved. And most
                importantly, you KNOW it now. Carry this confidence with you always. You deserve it.
                Good girl.
              </p>
              <p className="text-center font-semibold text-lg text-primary mt-6">
                ✨ Session Complete ✨
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/hypnosis/session-3" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Session
          </Link>
          <Link href="/hypnosis/session-5" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
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
