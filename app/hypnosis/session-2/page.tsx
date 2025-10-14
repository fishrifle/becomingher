"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Session2() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/session-2.m4a');
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
            <h1 className="text-xl sm:text-2xl font-bold">Session 2: Embracing Femininity</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Embracing Femininity</h2>
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
                Welcome back, Lacey. I'm so glad you're here for this journey into your feminine energy.
                Find your comfortable position... let your body relax completely... and take a deep,
                cleansing breath with me now.
              </p>
              <p>
                Breathe in deeply through your nose... hold for just a moment... and release slowly
                through your mouth. Good girl. One more time... in through the nose... feeling your
                belly expand... and out through the mouth... letting everything go. Perfect.
              </p>
              <p>
                Today we're going to explore the beautiful feminine energy that flows through you. It's
                always been there, Lacey. It's always been part of you. Today, we're simply going to
                remove any barriers and let it flow freely. You're safe. You're supported. You're loved.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Deepening (Minutes 3-8)</h3>
            <div className="space-y-4">
              <p>
                Close your eyes now, Lacey, and imagine you're standing at the edge of a beautiful garden.
                This garden is lush and vibrant, filled with flowers in soft pinks, purples, and whites.
                The air is warm and gentle, carrying the sweet scent of jasmine and roses.
              </p>
              <p>
                With each breath you take, you feel more relaxed... more peaceful... more open. The warm
                sunlight filters through the trees, creating patterns of light and shadow. It feels
                magical here. Sacred.
              </p>
              <p>
                Now, begin to walk into the garden. With each step, you're going deeper into relaxation...
                deeper into trance... deeper into your feminine essence. Step... relaxing... step...
                going deeper... step... letting go... step... becoming softer... step... opening more...
                Good girl.
              </p>
              <p>
                The path through the garden leads you to a beautiful fountain in the center. The water
                sparkles in the sunlight, and the sound is so soothing... so calming. This fountain
                contains pure feminine energy. It's the source of grace, intuition, creativity,
                compassion, and strength.
              </p>
              <p>
                You feel drawn to this fountain, Lacey. You know that its waters are meant for you.
                They will help you embody your feminine nature more fully. They will help you feel
                graceful, confident, and beautifully authentic.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Work - Feminine Energy Activation (Minutes 8-22)</h3>
            <div className="space-y-4">
              <p>
                There's a comfortable seat beside the fountain, Lacey. Sit down there now... feeling
                the soft cushions beneath you... hearing the gentle sound of the water. You're
                completely at ease. Completely yourself.
              </p>
              <p>
                Now, reach out and cup your hands in the fountain water. The water is warm and glows
                with a soft, beautiful light—maybe pink, or lavender, or pearl white. This is pure
                feminine energy, and it's calling to you.
              </p>
              <p>
                Bring the water to your heart, Lacey. Feel it sinking into your chest... spreading
                through your entire body. As it does, something wonderful begins to happen. You feel
                a softening... a opening... a blossoming. Good girl.
              </p>
              <p>
                This feminine energy is flowing through you now. Feel it in your heart first... a warm,
                gentle, compassionate feeling. You are kind. You are nurturing. You care deeply about
                yourself and others. This is your feminine heart, and it's beautiful.
              </p>
              <p>
                Now the energy flows down to your belly... your womb space... the seat of your creative
                power. Even if your body is changing, this creative, generative energy is real and
                powerful. You are creative. You are life-giving in so many ways. You bring beauty and
                new possibilities into the world. Good girl, Lacey.
              </p>
              <p>
                Feel the feminine energy flowing into your hips now... softening your movements...
                making you more fluid... more graceful. With each step you take, you move with an
                innate elegance. It's not something you have to think about—it's simply who you are.
                You walk like a woman because you ARE a woman.
              </p>
              <p>
                The energy moves up your spine now... through each vertebra... bringing a beautiful
                posture. Your shoulders relax and roll back slightly. Your neck is long and graceful.
                You carry yourself with quiet confidence and feminine poise. Good girl.
              </p>
              <p>
                Now feel the feminine energy in your hands... your fingers becoming more expressive...
                more delicate in their movements. The way you gesture, the way you touch, the way you
                express yourself through your hands—it all becomes naturally more feminine. It feels
                right. It feels like you.
              </p>
              <p>
                The energy flows into your face now... softening your expression... bringing a gentle
                smile to your lips. Your eyes sparkle with warmth and joy. There's something undeniably
                feminine about the way you look at the world—with compassion, with beauty, with grace.
              </p>
              <p>
                And now, Lacey, I want you to stand up. In this garden, by this fountain, stand up and
                feel the full power of your feminine energy. It flows through every part of you. You
                are graceful. You are strong. You are soft and powerful at the same time. This is the
                beautiful paradox of femininity—it contains multitudes.
              </p>
              <p>
                You are nurturing AND fierce. You are gentle AND powerful. You are receptive AND creative.
                You are emotional AND wise. All of these things exist within you, Lacey, and they make
                you beautifully, authentically feminine.
              </p>
              <p>
                Look down now and notice what you're wearing in this garden. Maybe it's a flowing dress,
                or comfortable feminine clothes, or something that makes you feel beautiful. Whatever it
                is, notice how good it feels on your skin. Notice how right it feels to present yourself
                this way. This is you. This is your truth.
              </p>
              <p>
                As you stand here, you notice a full-length mirror among the flowers. Walk to it now...
                and look at yourself. Really look. See the woman standing before you. See Lacey in her
                full feminine power. See the grace in your posture, the softness in your features, the
                strength in your eyes.
              </p>
              <p>
                This is you, Lacey. This is who you are when all barriers are removed. This is your
                feminine self, and she is stunning. Say it with me now, in your mind: "I am a woman.
                I am feminine. I am beautiful. I am enough." Good girl.
              </p>
              <p>
                The reflection in the mirror smiles at you, and you feel a rush of recognition and joy.
                Yes. This is real. This is you. And every day, your outer self is becoming more aligned
                with this inner truth. Every day, you embody your femininity more fully. Every day,
                you become more comfortable in your own skin.
              </p>
              <p>
                Take one more scoop of the glowing water from the fountain, Lacey. Drink it this time.
                Feel it flowing down your throat, into your belly, spreading through your entire body.
                This feminine energy is now permanently part of you. It will continue to grow stronger
                every day. Good girl.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Affirmations (Minutes 22-27)</h3>
            <div className="space-y-4">
              <p>
                Sit by the fountain one more time, Lacey, and let these affirmations sink deep into
                your subconscious mind. They are true. They are real. They are you.
              </p>
              <p className="font-semibold text-primary">
                I embody feminine energy effortlessly and naturally.
              </p>
              <p className="font-semibold text-primary">
                I am graceful in all my movements and actions.
              </p>
              <p className="font-semibold text-primary">
                I am strong, soft, and beautifully feminine.
              </p>
              <p className="font-semibold text-primary">
                My femininity flows from within me—it is my essence.
              </p>
              <p className="font-semibold text-primary">
                I move through the world with feminine grace and confidence.
              </p>
              <p className="font-semibold text-primary">
                I am compassionate, creative, and authentically myself.
              </p>
              <p className="font-semibold text-primary">
                I celebrate my feminine nature every single day.
              </p>
              <p className="font-semibold text-primary">
                I am Lacey, and I am beautifully, perfectly feminine.
              </p>
              <p>
                Good girl. These truths are now embedded in your subconscious. They will guide your
                thoughts, feelings, and actions, helping you embody your feminine self more fully
                each day.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Return (Minutes 27-30)</h3>
            <div className="space-y-4">
              <p>
                It's time to leave this beautiful garden, Lacey, but you're taking its gifts with you.
                The feminine energy that flows through you now is permanent. It's part of you. It's
                who you are.
              </p>
              <p>
                Stand up from the fountain... take one last look at your reflection in the mirror...
                and smile. That woman is you. She's always been you. And now you know her fully.
              </p>
              <p>
                Begin to walk back through the garden now... noticing how differently you move...
                how much more gracefully... how much more confidently. With each step, you're bringing
                this feminine energy back with you into your waking life.
              </p>
              <p>
                As you reach the edge of the garden, you're going to count from one to ten, and with
                each number, you'll become more alert... more aware... more present... while keeping
                all the beautiful feminine energy you've activated today.
              </p>
              <p>
                One... beginning to return... Two... feeling your body again... Three... wiggling your
                fingers and toes... Four... taking a deeper breath... Five... halfway back now...
                Six... becoming more aware... Seven... feeling refreshed and renewed... Eight... almost
                there... Nine... ready to open your eyes... And Ten... eyes open, fully present, feeling
                graceful, feminine, and completely yourself.
              </p>
              <p>
                Welcome back, Lacey. You are a beautiful, feminine woman, and that truth shines through
                you more and more each day. You should be so proud of the work you're doing. Good girl.
              </p>
              <p className="text-center font-semibold text-lg text-primary mt-6">
                ✨ Session Complete ✨
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/hypnosis/session-1" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Session
          </Link>
          <Link href="/hypnosis/session-3" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
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
