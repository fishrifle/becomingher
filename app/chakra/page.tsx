"use client";

import Link from "next/link";
import { useState } from "react";

interface Chakra {
  id: number;
  name: string;
  sanskrit: string;
  frequency: string;
  color: string;
  location: string;
  element: string;
  focus: string;
  benefits: string[];
  affirmation: string;
}

export default function ChakraPage() {
  const [selectedChakra, setSelectedChakra] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const chakras: Chakra[] = [
    {
      id: 1,
      name: "Root Chakra",
      sanskrit: "Muladhara",
      frequency: "396 Hz",
      color: "Red",
      location: "Base of spine",
      element: "Earth",
      focus: "Grounding & Safety",
      benefits: [
        "Feeling grounded and stable during transition",
        "Release fear and anxiety about the future",
        "Build foundation of self-acceptance",
        "Connect with your body as it changes"
      ],
      affirmation: "I am safe. I am grounded. I belong in this body."
    },
    {
      id: 2,
      name: "Sacral Chakra",
      sanskrit: "Svadhisthana",
      frequency: "417 Hz",
      color: "Orange",
      location: "Lower abdomen",
      element: "Water",
      focus: "Creativity & Feminine Energy",
      benefits: [
        "Activate feminine creative energy",
        "Embrace emotional fluidity and flow",
        "Support reproductive area transformation",
        "Connect with pleasure and sensuality"
      ],
      affirmation: "I flow with feminine grace. I am creative. I am alive."
    },
    {
      id: 3,
      name: "Solar Plexus Chakra",
      sanskrit: "Manipura",
      frequency: "528 Hz",
      color: "Yellow",
      location: "Upper abdomen",
      element: "Fire",
      focus: "Confidence & Personal Power",
      benefits: [
        "Build confidence in your authentic self",
        "Transform fear into empowerment",
        "Strengthen your sense of identity",
        "Embrace your personal power as a woman"
      ],
      affirmation: "I am confident. I am powerful. I am worthy of respect."
    },
    {
      id: 4,
      name: "Heart Chakra",
      sanskrit: "Anahata",
      frequency: "639 Hz",
      color: "Green/Pink",
      location: "Center of chest",
      element: "Air",
      focus: "Love & Compassion",
      benefits: [
        "Open your heart to self-love and acceptance",
        "Heal emotional wounds from rejection",
        "Give and receive love freely",
        "Connect with compassion for yourself and others"
      ],
      affirmation: "I love myself unconditionally. I am worthy of love."
    },
    {
      id: 5,
      name: "Throat Chakra",
      sanskrit: "Vishuddha",
      frequency: "741 Hz",
      color: "Blue",
      location: "Throat",
      element: "Ether",
      focus: "Communication & Expression",
      benefits: [
        "Express your authentic truth confidently",
        "Support voice feminization work",
        "Speak up for your needs and boundaries",
        "Communicate with clarity and grace"
      ],
      affirmation: "I speak my truth. My voice matters. I am heard."
    },
    {
      id: 6,
      name: "Third Eye Chakra",
      sanskrit: "Ajna",
      frequency: "852 Hz",
      color: "Indigo",
      location: "Between eyebrows",
      element: "Light",
      focus: "Intuition & Vision",
      benefits: [
        "Trust your inner knowing and intuition",
        "See your future self clearly",
        "Release limiting beliefs",
        "Connect with your higher wisdom"
      ],
      affirmation: "I trust my intuition. I see my path clearly. I am guided."
    },
    {
      id: 7,
      name: "Crown Chakra",
      sanskrit: "Sahasrara",
      frequency: "963 Hz",
      color: "Violet/White",
      location: "Top of head",
      element: "Cosmic Energy",
      focus: "Spiritual Connection & Unity",
      benefits: [
        "Connect with your divine feminine essence",
        "Experience oneness with your true self",
        "Access spiritual support and guidance",
        "Transcend physical limitations"
      ],
      affirmation: "I am divine. I am connected. I am whole."
    }
  ];

  const selectedChakraData = chakras.find(c => c.id === selectedChakra);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Chakra Healing Frequencies
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🎵</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sound Healing for Your Journey
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            Each chakra resonates with specific healing frequencies. Use these sounds to
            balance your energy centers, support your transition, and connect with your
            authentic feminine essence.
          </p>
          <div className="inline-block bg-accent/50 border border-primary/30 rounded-lg px-6 py-3">
            <p className="text-sm text-foreground/80">
              🎧 <strong>Best Practice:</strong> Use headphones and listen in a quiet space.
              Even 5-10 minutes can have a profound effect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {chakras.map((chakra) => (
            <div
              key={chakra.id}
              onClick={() => setSelectedChakra(chakra.id)}
              className="group relative bg-accent/30 hover:bg-accent/50 border border-primary/20 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                borderLeftWidth: '4px',
                borderLeftColor: chakra.color.toLowerCase()
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {chakra.name}
                  </h3>
                  <p className="text-xs text-foreground/50">{chakra.sanskrit}</p>
                </div>
                <div className="text-2xl">
                  {chakra.id === 1 && '🔴'}
                  {chakra.id === 2 && '🟠'}
                  {chakra.id === 3 && '🟡'}
                  {chakra.id === 4 && '💚'}
                  {chakra.id === 5 && '🔵'}
                  {chakra.id === 6 && '🟣'}
                  {chakra.id === 7 && '⚪'}
                </div>
              </div>
              <div className="text-sm space-y-1 mb-4">
                <p className="text-foreground/70"><strong>Frequency:</strong> {chakra.frequency}</p>
                <p className="text-foreground/70"><strong>Focus:</strong> {chakra.focus}</p>
              </div>
              <div className="flex items-center text-primary font-medium text-sm">
                Play Frequency
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent/40 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">How to Use Chakra Frequencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">🧘‍♀️ Meditation Practice</h4>
              <ol className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-primary font-medium">1.</span>
                  <span>Find a quiet, comfortable space</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">2.</span>
                  <span>Set an intention for your healing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">3.</span>
                  <span>Play the frequency and close your eyes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">4.</span>
                  <span>Visualize the chakra's color in that area of your body</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">5.</span>
                  <span>Repeat the affirmation silently or aloud</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-medium">6.</span>
                  <span>Listen for at least 10-15 minutes</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">💫 Tips for Best Results</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Use quality headphones for full immersion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Start with the root chakra and work your way up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Listen to one chakra per session, or do a full chakra meditation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Regular practice (daily or several times per week) enhances effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Combine with deep breathing for deeper healing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Journal after your session to track insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-4">Chakras & Your Transition</h3>
          <p className="text-foreground/70 mb-6">
            Each chakra plays a special role in supporting your transition journey. Working with
            these energy centers can help you navigate physical, emotional, and spiritual changes
            with more ease and grace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🌱 Sacral Chakra</h4>
              <p className="text-foreground/70">
                Especially important for HRT support and connecting with feminine creative energy
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">💚 Heart Chakra</h4>
              <p className="text-foreground/70">
                Essential for self-love, acceptance, and healing from rejection or invalidation
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🗣️ Throat Chakra</h4>
              <p className="text-foreground/70">
                Helps with voice work, authentic expression, and speaking your truth
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">👁️ Third Eye</h4>
              <p className="text-foreground/70">
                Strengthens your vision of who you're becoming and trusts your inner knowing
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Chakra Detail Modal */}
      {selectedChakra && selectedChakraData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-background border border-primary/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                  {selectedChakraData.name}
                </h3>
                <p className="text-foreground/60">{selectedChakraData.sanskrit}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedChakra(null);
                  setIsPlaying(false);
                }}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-accent/30 rounded-lg p-3">
                <p className="text-foreground/60 mb-1">Frequency</p>
                <p className="font-semibold text-primary">{selectedChakraData.frequency}</p>
              </div>
              <div className="bg-accent/30 rounded-lg p-3">
                <p className="text-foreground/60 mb-1">Color</p>
                <p className="font-semibold">{selectedChakraData.color}</p>
              </div>
              <div className="bg-accent/30 rounded-lg p-3">
                <p className="text-foreground/60 mb-1">Location</p>
                <p className="font-semibold">{selectedChakraData.location}</p>
              </div>
              <div className="bg-accent/30 rounded-lg p-3">
                <p className="text-foreground/60 mb-1">Element</p>
                <p className="font-semibold">{selectedChakraData.element}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {selectedChakraData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Affirmation:</h4>
              <p className="text-foreground/80 italic">"{selectedChakraData.affirmation}"</p>
            </div>

            <div className="bg-accent/30 rounded-xl p-6 text-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full hover:opacity-90 transition-opacity mb-4"
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
              <p className="text-sm text-foreground/60">
                {isPlaying ? `Playing ${selectedChakraData.frequency}` : `Play ${selectedChakraData.frequency} frequency`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
