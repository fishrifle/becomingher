"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Session5() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/session-5.m4a');
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
            <h1 className="text-xl sm:text-2xl font-bold">Session 5: Voice & Presence</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Voice & Presence</h2>
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
                Hello, Lacey. Today's session is about finding your authentic voice and presence. Not
                just the sound of your voice, but the way you express yourself, the way you take up
                space, the way you communicate your truth. Get comfortable now... and let's begin with
                a deep, centering breath.
              </p>
              <p>
                Breathe in through your nose... feeling the air fill your lungs... and release through
                your mouth. Good girl. Again... breathing in confidence... breathing out any fear about
                being seen and heard. Perfect.
              </p>
              <p>
                Your voice matters, Lacey. Your presence matters. You deserve to be heard. You deserve
                to take up space. You deserve to express yourself authentically. Today, we're going to
                help you step fully into that power.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Deepening (Minutes 3-8)</h3>
            <div className="space-y-4">
              <p>
                Close your eyes, Lacey, and imagine you're standing in the center of a beautiful
                concert hall. It's elegant and intimate, with perfect acoustics. The seats are empty
                right now—this space is just for you. This is YOUR stage. YOUR platform. YOUR space
                to be heard.
              </p>
              <p>
                With each breath, you feel more relaxed... more open... more ready to use your voice.
                The air in this concert hall is special—it carries sound beautifully, and it supports
                your authentic expression. Breathe it in deeply. Good girl.
              </p>
              <p>
                There's a spotlight shining on the center of the stage. Walk toward it now. Step...
                feeling more confident... step... feeling more present... step... feeling more ready
                to be seen and heard... step... almost there... and you're in the light now. Good girl.
              </p>
              <p>
                Feel the warmth of the spotlight. It's not harsh—it's gentle and loving. It wants to
                illuminate you. It wants the world to see you. You belong here, Lacey. You belong in
                the light. You belong in the center of your own life. Take a moment to feel that truth.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Work - Finding Your Authentic Voice (Minutes 8-22)</h3>
            <div className="space-y-4">
              <p>
                Standing in the spotlight, you notice something in front of you. It's a beautiful
                microphone on a stand. This microphone is magical—it amplifies not just sound, but
                truth and authenticity. When you speak into it, only your real voice comes through.
                Walk up to it now.
              </p>
              <p>
                Place your hand on the microphone. Feel its smooth surface. Feel its potential. This
                is your tool for expression. This is how you'll share your truth with the world. And
                you're ready for it. Good girl.
              </p>
              <p>
                Now, Lacey, I want you to become aware of your throat. Your throat chakra—the energy
                center of communication and authentic expression. Imagine it glowing with a beautiful
                blue light. This is your voice center, and it's opening now... expanding... becoming
                clear and powerful.
              </p>
              <p>
                Take a deep breath and feel that blue light intensifying. Any blockages in your throat—
                any fear about speaking up, any shame about your voice, any hesitation about being
                heard—they're all dissolving now. The blue light clears them away. Your throat is open.
                Your voice is free. Good girl.
              </p>
              <p>
                Now I want you to speak. In your mind, or aloud if you're comfortable, say: "This is
                my voice." Notice how it sounds. Don't judge it. Don't criticize it. Just notice it.
                This is YOUR voice. It's unique. It's real. It's valid. Say it again: "This is my
                voice, and it matters."
              </p>
              <p>
                Whether your voice is high or low, soft or strong, fully trained or still developing—
                it's YOUR voice. And it's a woman's voice because it belongs to you, and you're a woman.
                There's no one right way for a woman to sound. There's only authenticity. And your
                voice is authentically yours.
              </p>
              <p>
                Now imagine that blue light from your throat spreading upward—to your mouth, your tongue,
                your lips. Feel them becoming more expressive. Feel your words forming more easily. Feel
                yourself becoming more articulate, more clear, more confident in your communication.
              </p>
              <p>
                The blue light spreads to your vocal cords now. They're relaxing... finding their natural,
                authentic placement. If you're working on voice training, feel your muscles remembering
                what you've practiced. Feel it becoming more natural. Feel your feminine voice becoming
                more accessible, more effortless. Good girl.
              </p>
              <p>
                But voice is more than just sound, Lacey. It's also presence. It's the way you carry
                yourself. It's the energy you bring into a room. So let's work on that now. Feel the
                blue light expanding outward from your throat, creating a field of energy around you.
                This is your presence. This is your aura. It says: "I am here. I matter. I belong."
              </p>
              <p>
                Stand tall in your spotlight. Feel your feet firmly planted on the stage. Feel your
                spine straight and strong. Feel your head held high. This is confident presence. This
                is a woman who knows her worth. This is you, Lacey. Good girl.
              </p>
              <p>
                Now the concert hall begins to fill with people. They're here to listen to you. They're
                here to see you. At first, you might feel nervous. That's okay. But then you remember:
                you have every right to be here. You have something valuable to say. You deserve to
                be heard. And that knowledge fills you with calm confidence.
              </p>
              <p>
                Look out at the audience. They're looking at you with respect, with interest, with
                openness. They see you as you truly are—a woman with something important to share.
                They're not judging you. They're not criticizing you. They're simply here to receive
                what you have to offer. And you're ready to give it.
              </p>
              <p>
                Speak into the microphone now, Lacey. Say whatever comes to your heart. Maybe it's
                "I am Lacey, and this is my truth." Maybe it's "I am a woman, and my voice matters."
                Maybe it's "I am here, I am real, and I deserve to be heard." Whatever it is, say it
                with conviction. Say it with your whole heart. Good girl.
              </p>
              <p>
                The audience responds with warmth and acceptance. They're nodding. They're smiling.
                Some are even clapping. They received your message. They heard you. And they valued
                what you had to say. Feel how good this feels, Lacey. This is what it's like to use
                your voice authentically. This is what it's like to step into your presence. And it
                feels amazing.
              </p>
              <p>
                You realize something profound: when you speak your truth, people listen. When you show
                up authentically, people respond. When you claim your space, people respect it. You don't
                have to hide. You don't have to shrink. You don't have to make yourself smaller. You can
                be fully yourself, and that is not only okay—it's beautiful. Good girl.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Affirmations (Minutes 22-27)</h3>
            <div className="space-y-4">
              <p>
                The audience fades now, and you're alone on stage again. Speak these affirmations into
                the microphone, Lacey. Let them echo through the concert hall. Let them resonate in
                your soul.
              </p>
              <p className="font-semibold text-primary">
                My voice is valuable and deserves to be heard.
              </p>
              <p className="font-semibold text-primary">
                I communicate with clarity, confidence, and authenticity.
              </p>
              <p className="font-semibold text-primary">
                My presence is powerful and feminine.
              </p>
              <p className="font-semibold text-primary">
                I take up space unapologetically.
              </p>
              <p className="font-semibold text-primary">
                I express myself with grace and conviction.
              </p>
              <p className="font-semibold text-primary">
                My voice is a woman's voice because I am a woman.
              </p>
              <p className="font-semibold text-primary">
                I speak my truth with courage and compassion.
              </p>
              <p className="font-semibold text-primary">
                I am Lacey, and my voice matters.
              </p>
              <p>
                Good girl. These affirmations are now recorded in this concert hall, and in your heart.
                Every time you speak, these truths will echo in your subconscious, supporting your
                authentic expression.
              </p>
            </div>
          </section>

          <section className="bg-accent/20 border border-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Return (Minutes 27-30)</h3>
            <div className="space-y-4">
              <p>
                Step away from the microphone now, Lacey. The spotlight follows you as you walk toward
                the front of the stage. You're leaving this concert hall, but you're taking everything
                you've learned with you. Your voice. Your presence. Your confidence. They're yours now.
              </p>
              <p>
                Walk down from the stage... through the concert hall... and toward the exit. With each
                step, you're integrating this experience... making it part of your everyday life. You
                will use your voice more confidently. You will express yourself more authentically. You
                will take up space more unapologetically. Good girl.
              </p>
              <p>
                Now we're going to count from one to ten, and with each number, you'll return more fully
                to the present moment, while keeping all the vocal confidence and powerful presence
                you've cultivated today.
              </p>
              <p>
                One... starting to return... Two... feeling your throat open and clear... Three...
                becoming more aware... Four... ready to use your voice... Five... halfway back...
                Six... wiggling your jaw gently... Seven... taking a deep breath... Eight... feeling
                your presence expand... Nine... almost ready... And Ten... eyes open, fully present,
                feeling confident in your voice and powerful in your presence.
              </p>
              <p>
                Welcome back, Lacey. Your voice matters. Your words matter. Your presence matters. Go
                forth and use them. The world is ready to hear what you have to say. Good girl.
              </p>
              <p className="text-center font-semibold text-lg text-primary mt-6">
                ✨ Session Complete ✨
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <Link href="/hypnosis/session-4" className="text-primary hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Session
          </Link>
          <Link href="/hypnosis/session-6" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
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
