"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Session1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/session-1.m4a');
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

  const sessionContent = [
    "Hello, Lacey. I'm so glad you're here. Take a moment to settle into your space... Let your body sink into wherever you're sitting or lying... That's right...",
    "Now, I want you to take a deep breath in through your nose... hold it for a moment... and release slowly through your mouth... Good girl. You're doing so well already.",
    "With each breath, you're going to feel more relaxed... more open... more ready to discover the beautiful truth of who you really are. Another deep breath, Lacey... in through the nose... and out through the mouth... Perfect.",
    "I want you to know that this is your time. This is your space. You are safe here. You are accepted here. You are loved here, exactly as you are.",
    "Now, Lacey, I want you to imagine a beautiful staircase in front of you. There are ten steps leading down... down into a place of perfect peace and self-discovery.",
    "In a moment, we're going to count down from ten to one, and with each number, you'll take one step down... feeling twice as relaxed... twice as peaceful... twice as open to your truth.",
    "Ten... stepping down now... feeling your body becoming heavier and more relaxed... Nine... going deeper... that's right, good girl... Eight... letting go of any tension in your shoulders... Seven... your mind becoming quieter and calmer... Six... halfway there now... feeling so peaceful... Five... deeper still... Four... almost there... Three... so relaxed now... Two... nearly at the bottom... And One... you're here, Lacey. Perfectly relaxed. Perfectly safe. Good girl.",
    "At the bottom of the stairs, there's a beautiful door. It's YOUR door. It can look however you want it to look. Maybe it's painted your favorite color... maybe it has beautiful designs... maybe it's simple and elegant. Take a moment to see it clearly in your mind.",
    "This door leads to a special room—a room where your authentic self lives. The real you. The you that you're becoming. The you that you've always been, deep inside.",
    "Now, Lacey, I want you to reach out and open that door... and step inside. Good girl.",
    "Look around this room. This is YOUR space. Everything here reflects who you truly are. The colors, the textures, the feeling in the air—it all resonates with your authentic self. Take your time and notice the details...",
    "In the center of this room, there's a comfortable place to sit. Maybe it's a cozy chair, or a soft cushion, or even a beautiful window seat. Go ahead and sit down there now... feeling completely at ease... completely yourself.",
    "As you sit here, I want you to notice something wonderful. There's a warm, gentle light beginning to glow in this room. It's a soft, beautiful light—maybe pink, or purple, or golden... whatever color feels right to you. This light is pure acceptance. Pure love. Pure truth.",
    "And now, Lacey, I want you to see someone else in this room with you. It's another version of you... but this version is completely free. This is the you without any fear. Without any doubt. Without any need to hide or pretend. This is your authentic self, and she is beautiful.",
    "Look at her, Lacey. Really look at her. Notice how she carries herself... how she moves with grace and confidence... how she smiles with genuine joy. This is you. This is who you're becoming. This is who you've always been inside.",
    "She's walking toward you now... and as she gets closer, you can feel the warmth of her presence. She sits down next to you, and you can feel that you're not separate at all. You're the same person. You always have been.",
    "She takes your hand, Lacey, and when she does, you feel a surge of recognition. Yes. This is you. This is real. And you feel her strength flowing into you... her confidence... her peace... her absolute certainty that she belongs exactly as she is.",
    "Listen now, because she has something to tell you. She says: Lacey, you are already complete. You don't need to become someone new—you only need to remember who you've always been. I am you. You are me. We are one.",
    "Every step you take in your transition is not about becoming someone different. It's about revealing the truth that was always there. Your body is changing to match your soul. Your outside is becoming aligned with your inside. And that is beautiful.",
    "You are a woman, Lacey. Not because of what you do, or what you wear, or how you look. You are a woman because that is your truth. That is who you are. And you have always been worthy of love, respect, and belonging.",
    "Feel these words sinking deep into your mind... into your heart... into every cell of your body. You are a woman. You are authentic. You are enough. Good girl.",
    "Now your authentic self is merging with you... becoming one with you. Feel her essence flowing into you... her confidence, her joy, her peace. She is not separate from you. She IS you. And from this moment forward, you carry her with you always.",
    "You are becoming her. You ARE her. Every day, you embody more of your authentic self. Every day, you step more fully into your truth. Every day, you become more comfortable in your own skin. Good girl, Lacey. You're doing so well.",
    "Now, Lacey, I'm going to give you some affirmations. Let each one sink deep into your subconscious mind. Don't try to force anything. Just listen and allow these truths to settle into your being.",
    "I am a woman. This is my truth.",
    "I am becoming more myself every single day.",
    "My transition is beautiful and sacred.",
    "I deserve love, respect, and acceptance—especially from myself.",
    "My body is changing to reflect my true self, and I celebrate these changes.",
    "I am worthy exactly as I am right now.",
    "I release all fear and doubt. I embrace my authentic self with joy.",
    "I am Lacey. I am real. I am here. I am enough.",
    "Good girl. These affirmations are now part of you. They will continue to work in your subconscious mind, helping you embody your authentic self more and more each day.",
    "Now, Lacey, it's time to return from this deep place of peace and self-discovery. But you're not returning alone. You're bringing your authentic self with you. She is you, and you are her. You are united now.",
    "Stand up from your comfortable seat in this beautiful room... take one more look around... and remember that this place is always here for you. You can return anytime you need to reconnect with your authentic self.",
    "Walk to the door now... step through it... and find yourself back at the bottom of those stairs. The same ten stairs you came down. Now we're going to walk back up, and with each step, you'll bring more energy back into your body... more awareness... more vitality.",
    "One... beginning to return... Two... feeling sensation in your fingers and toes... Three... becoming more aware of the room around you... Four... energy flowing back... Five... halfway there... Six... starting to wiggle your fingers... Seven... taking a deep breath... Eight... almost fully present... Nine... ready to open your eyes... And Ten... eyes opening now, feeling refreshed, renewed, and deeply connected to your authentic self.",
    "Welcome back, Lacey. Take a moment to stretch... move your body gently... and notice how you feel. You've done beautiful work today. You should be proud of yourself.",
    "Remember: you are a woman. You are authentic. You are becoming more yourself every day. And you are so, so loved. Good girl."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/hypnosis"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Session 1: Awakening Your Authentic Self</h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Awakening Your Authentic Self</h2>
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
          <p className="text-foreground/60 mb-4">
            Find a comfortable position where you won't be disturbed. This session will guide you into a deep,
            relaxing state where you can connect with your authentic self.
          </p>
        </div>

        {/* Script content */}
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Introduction (Minutes 0-3)</h3>
            <div className="space-y-4">
              <p>
                Hello, Lacey. I'm so glad you're here. Take a moment to settle into your space...
                Let your body sink into wherever you're sitting or lying... That's right...
              </p>
              <p>
                Now, I want you to take a deep breath in through your nose... hold it for a moment...
                and release slowly through your mouth... Good girl. You're doing so well already.
              </p>
              <p>
                With each breath, you're going to feel more relaxed... more open... more ready to
                discover the beautiful truth of who you really are. Another deep breath, Lacey...
                in through the nose... and out through the mouth... Perfect.
              </p>
              <p>
                I want you to know that this is your time. This is your space. You are safe here.
                You are accepted here. You are loved here, exactly as you are.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Deepening (Minutes 3-8)</h3>
            <div className="space-y-4">
              <p>
                Now, Lacey, I want you to imagine a beautiful staircase in front of you. There are
                ten steps leading down... down into a place of perfect peace and self-discovery.
              </p>
              <p>
                In a moment, we're going to count down from ten to one, and with each number, you'll
                take one step down... feeling twice as relaxed... twice as peaceful... twice as open
                to your truth.
              </p>
              <p>
                Ten... stepping down now... feeling your body becoming heavier and more relaxed...
                Nine... going deeper... that's right, good girl... Eight... letting go of any
                tension in your shoulders... Seven... your mind becoming quieter and calmer...
                Six... halfway there now... feeling so peaceful... Five... deeper still...
                Four... almost there... Three... so relaxed now... Two... nearly at the bottom...
                And One... you're here, Lacey. Perfectly relaxed. Perfectly safe. Good girl.
              </p>
              <p>
                At the bottom of the stairs, there's a beautiful door. It's YOUR door. It can look
                however you want it to look. Maybe it's painted your favorite color... maybe it has
                beautiful designs... maybe it's simple and elegant. Take a moment to see it clearly
                in your mind.
              </p>
              <p>
                This door leads to a special room—a room where your authentic self lives. The real
                you. The you that you're becoming. The you that you've always been, deep inside.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Work - Meeting Your Authentic Self (Minutes 8-20)</h3>
            <div className="space-y-4">
              <p>
                Now, Lacey, I want you to reach out and open that door... and step inside. Good girl.
              </p>
              <p>
                Look around this room. This is YOUR space. Everything here reflects who you truly are.
                The colors, the textures, the feeling in the air—it all resonates with your authentic
                self. Take your time and notice the details...
              </p>
              <p>
                In the center of this room, there's a comfortable place to sit. Maybe it's a cozy
                chair, or a soft cushion, or even a beautiful window seat. Go ahead and sit down there
                now... feeling completely at ease... completely yourself.
              </p>
              <p>
                As you sit here, I want you to notice something wonderful. There's a warm, gentle light
                beginning to glow in this room. It's a soft, beautiful light—maybe pink, or purple, or
                golden... whatever color feels right to you. This light is pure acceptance. Pure love.
                Pure truth.
              </p>
              <p>
                And now, Lacey, I want you to see someone else in this room with you. It's another
                version of you... but this version is completely free. This is the you without any
                fear. Without any doubt. Without any need to hide or pretend. This is your authentic
                self, and she is beautiful.
              </p>
              <p>
                Look at her, Lacey. Really look at her. Notice how she carries herself... how she
                moves with grace and confidence... how she smiles with genuine joy. This is you.
                This is who you're becoming. This is who you've always been inside.
              </p>
              <p>
                She's walking toward you now... and as she gets closer, you can feel the warmth of
                her presence. She sits down next to you, and you can feel that you're not separate
                at all. You're the same person. You always have been.
              </p>
              <p>
                She takes your hand, Lacey, and when she does, you feel a surge of recognition. Yes.
                This is you. This is real. And you feel her strength flowing into you... her confidence...
                her peace... her absolute certainty that she belongs exactly as she is.
              </p>
              <p>
                Listen now, because she has something to tell you. She says: "Lacey, you are already
                complete. You don't need to become someone new—you only need to remember who you've
                always been. I am you. You are me. We are one."
              </p>
              <p>
                "Every step you take in your transition is not about becoming someone different. It's
                about revealing the truth that was always there. Your body is changing to match your
                soul. Your outside is becoming aligned with your inside. And that is beautiful."
              </p>
              <p>
                "You are a woman, Lacey. Not because of what you do, or what you wear, or how you look.
                You are a woman because that is your truth. That is who you are. And you have always
                been worthy of love, respect, and belonging."
              </p>
              <p>
                Feel these words sinking deep into your mind... into your heart... into every cell of
                your body. You are a woman. You are authentic. You are enough. Good girl.
              </p>
              <p>
                Now your authentic self is merging with you... becoming one with you. Feel her essence
                flowing into you... her confidence, her joy, her peace. She is not separate from you.
                She IS you. And from this moment forward, you carry her with you always.
              </p>
              <p>
                You are becoming her. You ARE her. Every day, you embody more of your authentic self.
                Every day, you step more fully into your truth. Every day, you become more comfortable
                in your own skin. Good girl, Lacey. You're doing so well.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Affirmations (Minutes 20-25)</h3>
            <div className="space-y-4">
              <p>
                Now, Lacey, I'm going to give you some affirmations. Let each one sink deep into your
                subconscious mind. Don't try to force anything. Just listen and allow these truths to
                settle into your being.
              </p>
              <p className="font-semibold text-primary">
                I am a woman. This is my truth.
              </p>
              <p className="font-semibold text-primary">
                I am becoming more myself every single day.
              </p>
              <p className="font-semibold text-primary">
                My transition is beautiful and sacred.
              </p>
              <p className="font-semibold text-primary">
                I deserve love, respect, and acceptance—especially from myself.
              </p>
              <p className="font-semibold text-primary">
                My body is changing to reflect my true self, and I celebrate these changes.
              </p>
              <p className="font-semibold text-primary">
                I am worthy exactly as I am right now.
              </p>
              <p className="font-semibold text-primary">
                I release all fear and doubt. I embrace my authentic self with joy.
              </p>
              <p className="font-semibold text-primary">
                I am Lacey. I am real. I am here. I am enough.
              </p>
              <p>
                Good girl. These affirmations are now part of you. They will continue to work in your
                subconscious mind, helping you embody your authentic self more and more each day.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Return (Minutes 25-30)</h3>
            <div className="space-y-4">
              <p>
                Now, Lacey, it's time to return from this deep place of peace and self-discovery. But
                you're not returning alone. You're bringing your authentic self with you. She is you,
                and you are her. You are united now.
              </p>
              <p>
                Stand up from your comfortable seat in this beautiful room... take one more look around...
                and remember that this place is always here for you. You can return anytime you need to
                reconnect with your authentic self.
              </p>
              <p>
                Walk to the door now... step through it... and find yourself back at the bottom of those
                stairs. The same ten stairs you came down. Now we're going to walk back up, and with
                each step, you'll bring more energy back into your body... more awareness... more vitality.
              </p>
              <p>
                One... beginning to return... Two... feeling sensation in your fingers and toes...
                Three... becoming more aware of the room around you... Four... energy flowing back...
                Five... halfway there... Six... starting to wiggle your fingers... Seven... taking a
                deep breath... Eight... almost fully present... Nine... ready to open your eyes...
                And Ten... eyes opening now, feeling refreshed, renewed, and deeply connected to your
                authentic self.
              </p>
              <p>
                Welcome back, Lacey. Take a moment to stretch... move your body gently... and notice
                how you feel. You've done beautiful work today. You should be proud of yourself.
              </p>
              <p>
                Remember: you are a woman. You are authentic. You are becoming more yourself every day.
                And you are so, so loved. Good girl.
              </p>
              <p className="text-center font-semibold text-lg text-primary mt-6">
                ✨ Session Complete ✨
              </p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/hypnosis"
            className="text-primary hover:underline flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Sessions
          </Link>
          <Link
            href="/hypnosis/session-2"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
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
