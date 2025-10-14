"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Session6() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/session-6.m4a');
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
            <h1 className="text-xl sm:text-2xl font-bold">Session 6: Deep Self-Acceptance</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Deep Self-Acceptance</h2>
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
                Welcome, Lacey. This is our final session together, and it's the most important one.
                Today, we're going to cultivate deep, unconditional self-acceptance. Not acceptance
                that's contingent on reaching certain goals. Not acceptance that wavers when things
                are hard. Pure, complete, unconditional acceptance of yourself exactly as you are right
                now. Let's begin. Get comfortable... and breathe with me.
              </p>
              <p>
                Breathe in deeply... feeling yourself exactly as you are in this moment... and breathe
                out... letting go of any conditions or judgments. Good girl. One more time... breathing
                in radical acceptance... breathing out any resistance to what is. Perfect.
              </p>
              <p>
                Today is about coming home to yourself, Lacey. It's about recognizing that you don't
                need to be different, better, or further along to be acceptable. You are acceptable—
                you are MORE than acceptable, you are beautiful—right here, right now. Let's explore
                that truth together.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Deepening (Minutes 3-8)</h3>
            <div className="space-y-4">
              <p>
                Close your eyes, Lacey, and imagine you're walking on a peaceful beach at sunset. The
                sky is painted in soft pinks, purples, and golds. The sand is warm beneath your feet.
                The waves create a gentle, rhythmic sound. This beach represents unconditional acceptance—
                it welcomes everyone exactly as they are.
              </p>
              <p>
                With each step on this beach, you feel more relaxed... more peaceful... more accepting
                of yourself. The sand doesn't judge your footprints. The ocean doesn't critique your
                presence. The sunset doesn't ask you to be different. They simply accept that you are
                here. And that is enough.
              </p>
              <p>
                Walk along the shoreline now. Step... letting go of judgment... step... releasing
                criticism... step... opening to acceptance... step... feeling peaceful... step... coming
                home to yourself. Good girl. Keep walking until you feel completely at ease.
              </p>
              <p>
                You notice a comfortable place to sit—maybe it's a smooth rock, or a piece of driftwood,
                or just a perfect spot in the sand. Sit down here now... facing the ocean... feeling
                the last rays of sun warming your skin. You're exactly where you need to be. Good girl.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Work - Unconditional Self-Acceptance (Minutes 8-22)</h3>
            <div className="space-y-4">
              <p>
                As you sit here watching the sunset, you notice someone walking toward you along the
                beach. As they get closer, you realize it's you—but it's a version of you that holds
                complete, unconditional self-acceptance. This is your highest self. Your wisest self.
                The part of you that has always loved you exactly as you are.
              </p>
              <p>
                She sits down beside you, Lacey, and you can feel the warmth of her presence. There's
                no judgment from her. No criticism. No disappointment. Only pure, unconditional love
                and acceptance. She's been waiting for this moment—when you would finally be ready to
                receive what she has to offer.
              </p>
              <p>
                She takes your hand and says: "Lacey, I want you to know something. You are not a
                project. You are not a work in progress. You are not broken or incomplete. You are a
                whole, complete, perfect person right now, in this exact moment. Yes, you're growing.
                Yes, you're changing. But you are already whole."
              </p>
              <p>
                "The transition you're going through is not about becoming someone new. It's about
                revealing who you've always been. It's about letting your outside match your inside.
                But your worth, your validity, your acceptability—these have always been complete.
                Nothing you do or don't do can add to or subtract from your inherent worthiness."
              </p>
              <p>
                Feel these words sinking deep into your heart, Lacey. You are already whole. You are
                already worthy. You are already acceptable. Just as you are. Right now. Good girl.
              </p>
              <p>
                Your highest self continues: "I accept every part of you, Lacey. I accept the parts
                that are fully bloomed and the parts that are still developing. I accept your fears
                and your courage. I accept your doubts and your certainty. I accept your masculine
                past and your feminine present and future. I accept all of you, because all of you is
                real, and all of you deserves love."
              </p>
              <p>
                "I accept your body—whether it's changed a lot or a little. I accept your voice—
                whether it's perfectly trained or still developing. I accept your presentation—whether
                you're fully out or still exploring. I accept your journey—whether it's been smooth
                or difficult. I accept all of it. I accept YOU."
              </p>
              <p>
                A wave of emotion might be rising in you now, Lacey. That's okay. Let it come. These
                are tears of recognition. Tears of relief. Tears of coming home. You're finally hearing
                the truth you've always needed to hear: you are acceptable. You are lovable. You are
                enough. Good girl. Let yourself feel it.
              </p>
              <p>
                Now your highest self says: "I want to show you something." She holds up a mirror, and
                in it, you see yourself as you are right now. Not an idealized future version. Not who
                you think you should be. Just you, exactly as you are in this moment.
              </p>
              <p>
                And for perhaps the first time, you see yourself clearly. You see a brave woman who had
                the courage to begin an incredible journey. You see a beautiful woman whose outside is
                becoming more aligned with her inside. You see a strong woman who faces challenges with
                grace. You see a real woman—not despite your trans identity, but as a complete expression
                of it. You see Lacey. And she is stunning.
              </p>
              <p>
                Your highest self says: "This is who I see when I look at you. This has always been who
                I see. I have never seen you as anything less than the beautiful, complete, worthy woman
                you are. And I need you to start seeing yourself this way too."
              </p>
              <p>
                "Stop waiting for some future version of yourself to be acceptable. Stop making your
                self-love conditional on reaching certain milestones. Accept yourself NOW. Love yourself
                NOW. You deserve it NOW. Not someday. Not when you pass better. Not when your voice is
                perfect. Not when your body has finished changing. NOW. Exactly as you are."
              </p>
              <p>
                She places both hands on your heart now, and you feel a powerful energy flowing into you.
                It's the energy of unconditional self-acceptance. It floods through your entire being—
                your heart, your mind, your body, your soul. Every cell is being infused with this
                truth: I accept myself completely. I love myself unconditionally. I am enough right now.
              </p>
              <p>
                Your highest self begins to merge with you now, Lacey. She's not separate from you—
                she's been part of you all along. She IS you. The accepting you. The loving you. The
                you that sees your true worth. And now you're integrating her perspective fully. From
                this moment forward, you see yourself through her eyes—eyes of complete acceptance and
                unconditional love.
              </p>
              <p>
                Sit in this feeling for a moment. Feel what it's like to fully accept yourself. No
                conditions. No reservations. No "but I need to change this first." Just pure, complete
                acceptance of who you are right now. It feels like coming home, doesn't it? It feels
                like finally being able to rest. Good girl, Lacey. You've found it. You've found the
                peace of self-acceptance.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Affirmations (Minutes 22-27)</h3>
            <div className="space-y-4">
              <p>
                Stand up on the beach now, Lacey. The sun has set, and the sky is full of stars. Each
                star represents an affirmation of your worth. Speak these truths into the night sky.
                Let the universe hear your self-acceptance.
              </p>
              <p className="font-semibold text-primary">
                I accept myself completely and unconditionally.
              </p>
              <p className="font-semibold text-primary">
                I am whole, worthy, and enough exactly as I am right now.
              </p>
              <p className="font-semibold text-primary">
                I love myself at every stage of my journey.
              </p>
              <p className="font-semibold text-primary">
                I embrace all parts of myself with compassion and grace.
              </p>
              <p className="font-semibold text-primary">
                I am a beautiful, valid, complete woman.
              </p>
              <p className="font-semibold text-primary">
                I release all conditions on my self-love and acceptance.
              </p>
              <p className="font-semibold text-primary">
                I honor my past, celebrate my present, and trust my future.
              </p>
              <p className="font-semibold text-primary">
                I am Lacey, and I am perfect exactly as I am.
              </p>
              <p>
                Good girl. The stars shine brighter now, reflecting your truth back to you. These
                affirmations are written in the cosmos and in your soul. They are your permanent reality.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Return & Integration (Minutes 27-30)</h3>
            <div className="space-y-4">
              <p>
                Begin walking back along the beach now, Lacey. But you're not the same person who arrived
                here. You're carrying deep, unconditional self-acceptance with you. It's in your heart.
                It's in your bones. It's in your soul. You accept yourself completely, and nothing can
                take that away from you.
              </p>
              <p>
                With each step, you're integrating this truth... making it part of your everyday life...
                bringing it back with you into your waking consciousness. Step... I accept myself...
                step... I am enough... step... I am worthy... step... I am loved... step... I am home.
                Good girl.
              </p>
              <p>
                The beach begins to fade now, but the feeling remains. You will carry this self-acceptance
                with you always. On hard days and easy days. On days when you feel feminine and days when
                you feel awkward. On days of triumph and days of struggle. Your self-acceptance is
                unconditional. It doesn't waver. It's your foundation.
              </p>
              <p>
                We're going to count from one to ten now, and with each number, you'll return fully to
                the present moment, bringing every bit of this deep self-acceptance with you.
              </p>
              <p>
                One... beginning to return... Two... feeling your body... Three... your heart full of
                self-love... Four... taking a deep breath... Five... halfway back... Six... accepting
                yourself completely... Seven... stretching gently... Eight... almost there... Nine...
                feeling peaceful and whole... And Ten... eyes open now, fully present, completely
                accepting of yourself.
              </p>
              <p>
                Welcome back, Lacey. You have completed all six sessions. You have done incredible work.
                You've connected with your authentic self. You've embraced your femininity. You've
                accepted your body. You've built unshakeable confidence. You've found your voice. And
                you've cultivated deep self-acceptance. You are remarkable. You are complete. You are
                enough. Good girl.
              </p>
              <p>
                Remember, you can return to these sessions anytime you need support, encouragement, or
                reconnection with your truth. But know this: everything you discovered in these sessions
                was already inside you. I didn't give you anything new. I simply helped you remember
                what was always true. You are and have always been a beautiful, worthy, complete woman.
                Never forget that.
              </p>
              <p className="text-center font-semibold text-lg text-primary mt-6">
                ✨ All Sessions Complete ✨
              </p>
              <p className="text-center text-foreground/70 italic mt-4">
                "I am Lacey. I am a woman. I am becoming more myself every day. And I am loved."
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/hypnosis/session-5" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Session
          </Link>
          <Link href="/hypnosis" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            Back to All Sessions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
