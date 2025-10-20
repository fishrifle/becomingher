"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface JournalEntry {
  id: string;
  date: Date;
  mood: string;
  feelings: string[];
  thoughts: string;
  gratitude: string;
  goals: string;
  hrtDays?: number;
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<Partial<JournalEntry>>({
    mood: "neutral",
    feelings: [],
    thoughts: "",
    gratitude: "",
    goals: ""
  });

  // Load entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("journal_entries");
    if (saved) {
      const parsed = JSON.parse(saved);
      setEntries(parsed.map((e: any) => ({ ...e, date: new Date(e.date) })));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem("journal_entries", JSON.stringify(entries));
    }
  }, [entries]);

  const moods = [
    { value: "amazing", emoji: "🌟", label: "Amazing", color: "from-yellow-300 to-orange-300" },
    { value: "happy", emoji: "😊", label: "Happy", color: "from-green-300 to-teal-300" },
    { value: "neutral", emoji: "😐", label: "Neutral", color: "from-gray-300 to-gray-400" },
    { value: "sad", emoji: "😢", label: "Sad", color: "from-blue-300 to-blue-400" },
    { value: "anxious", emoji: "😰", label: "Anxious", color: "from-purple-300 to-purple-400" },
    { value: "dysphoric", emoji: "😔", label: "Dysphoric", color: "from-indigo-400 to-purple-500" }
  ];

  const feelingsOptions = [
    "Feminine", "Confident", "Beautiful", "Valid", "Strong", "Hopeful",
    "Anxious", "Scared", "Excited", "Grateful", "Loved", "Dysphoric",
    "Empowered", "Tired", "Energized", "Peaceful", "Overwhelmed", "Proud"
  ];

  const handleSaveEntry = () => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date(),
      mood: currentEntry.mood || "neutral",
      feelings: currentEntry.feelings || [],
      thoughts: currentEntry.thoughts || "",
      gratitude: currentEntry.gratitude || "",
      goals: currentEntry.goals || "",
      hrtDays: currentEntry.hrtDays
    };

    setEntries([newEntry, ...entries]);
    setCurrentEntry({
      mood: "neutral",
      feelings: [],
      thoughts: "",
      gratitude: "",
      goals: ""
    });
    setShowNewEntry(false);
  };

  const toggleFeeling = (feeling: string) => {
    const current = currentEntry.feelings || [];
    if (current.includes(feeling)) {
      setCurrentEntry({
        ...currentEntry,
        feelings: current.filter(f => f !== feeling)
      });
    } else {
      setCurrentEntry({
        ...currentEntry,
        feelings: [...current, feeling]
      });
    }
  };

  const deleteEntry = (id: string) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      setEntries(entries.filter(e => e.id !== id));
    }
  };

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
              My Journey Journal
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border-2 border-pink-300/30">
          <div className="relative h-80">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
              alt="Beautiful journal and flowers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <div className="text-6xl mb-4">📝✨💕</div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
                Your Beautiful Journey 💖
              </h2>
              <p className="text-lg text-white/95 max-w-2xl mx-auto mb-6 drop-shadow-lg">
                Track your feelings, celebrate progress, and reflect on your transformation.
                This is your safe space to document every step of becoming yourself! 🌸
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl px-8 py-4">
                <p className="text-sm text-white/95 drop-shadow">
                  💕 <strong>Private & Personal:</strong> All entries are saved locally on your device only!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Entry Button */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowNewEntry(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Journal Entry
          </button>
        </div>

        {/* New Entry Modal */}
        {showNewEntry && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-background border border-primary/30 rounded-2xl max-w-3xl w-full my-8 p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Today's Entry</h3>
                <button
                  onClick={() => setShowNewEntry(false)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Mood Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">How are you feeling today? 💭</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {moods.map((mood) => (
                      <button
                        key={mood.value}
                        onClick={() => setCurrentEntry({ ...currentEntry, mood: mood.value })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          currentEntry.mood === mood.value
                            ? `border-primary bg-gradient-to-br ${mood.color} text-white shadow-lg scale-105`
                            : 'border-primary/20 bg-accent/20 hover:bg-accent/40'
                        }`}
                      >
                        <div className="text-3xl mb-2">{mood.emoji}</div>
                        <div className="text-sm font-semibold">{mood.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feelings Tags */}
                <div>
                  <label className="block text-sm font-medium mb-3">Select feelings (choose all that apply) 🌈</label>
                  <div className="flex flex-wrap gap-2">
                    {feelingsOptions.map((feeling) => (
                      <button
                        key={feeling}
                        onClick={() => toggleFeeling(feeling)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          currentEntry.feelings?.includes(feeling)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                            : 'bg-accent/30 border border-primary/20 hover:bg-accent/50'
                        }`}
                      >
                        {feeling}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Thoughts */}
                <div>
                  <label className="block text-sm font-medium mb-2">What's on your mind? 💭</label>
                  <textarea
                    value={currentEntry.thoughts}
                    onChange={(e) => setCurrentEntry({ ...currentEntry, thoughts: e.target.value })}
                    rows={4}
                    placeholder="Write about your day, your feelings, your experiences... This is your safe space."
                    className="w-full px-4 py-3 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50 resize-none"
                  />
                </div>

                {/* Gratitude */}
                <div>
                  <label className="block text-sm font-medium mb-2">Something you're grateful for today 🙏</label>
                  <input
                    type="text"
                    value={currentEntry.gratitude}
                    onChange={(e) => setCurrentEntry({ ...currentEntry, gratitude: e.target.value })}
                    placeholder="Even the smallest thing counts..."
                    className="w-full px-4 py-3 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50"
                  />
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-medium mb-2">Goals or intentions for tomorrow 🎯</label>
                  <input
                    type="text"
                    value={currentEntry.goals}
                    onChange={(e) => setCurrentEntry({ ...currentEntry, goals: e.target.value })}
                    placeholder="What do you hope to achieve or focus on?"
                    className="w-full px-4 py-3 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50"
                  />
                </div>

                {/* HRT Days (optional) */}
                <div>
                  <label className="block text-sm font-medium mb-2">Days on HRT (optional) 💊</label>
                  <input
                    type="number"
                    value={currentEntry.hrtDays || ""}
                    onChange={(e) => setCurrentEntry({ ...currentEntry, hrtDays: parseInt(e.target.value) || undefined })}
                    placeholder="Track your HRT journey..."
                    className="w-full px-4 py-3 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50"
                  />
                </div>

                <button
                  onClick={handleSaveEntry}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Save Entry ✨
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Entries List */}
        {entries.length === 0 ? (
          <div className="bg-accent/20 border border-primary/10 rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-2xl font-bold mb-3">Start Your Journey</h3>
            <p className="text-foreground/70 mb-6">
              You haven't written any entries yet. Click the button above to create your first journal entry!
            </p>
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 max-w-lg mx-auto text-left">
              <h4 className="font-semibold mb-3">Why Journal? 💕</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✨</span>
                  <span>Track your emotional journey and see patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🌸</span>
                  <span>Celebrate progress you might otherwise forget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">💝</span>
                  <span>Process feelings in a safe, private space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🎯</span>
                  <span>Set and track goals for your transition</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => {
              const moodData = moods.find(m => m.value === entry.mood);
              return (
                <div key={entry.id} className="bg-accent/30 border border-primary/20 rounded-2xl p-6 hover:bg-accent/40 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${moodData?.color || 'from-gray-300 to-gray-400'} flex items-center justify-center text-2xl shadow-lg`}>
                        {moodData?.emoji || "😐"}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{entry.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                        <p className="text-sm text-foreground/60">{entry.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      className="p-2 rounded-lg hover:bg-red-500/20 text-red-500 transition-colors"
                      title="Delete entry"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  {entry.feelings.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Feelings:</p>
                      <div className="flex flex-wrap gap-2">
                        {entry.feelings.map((feeling, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            {feeling}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {entry.thoughts && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-1">Thoughts:</p>
                      <p className="text-sm text-foreground/70 whitespace-pre-wrap">{entry.thoughts}</p>
                    </div>
                  )}

                  {entry.gratitude && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-1">🙏 Grateful for:</p>
                      <p className="text-sm text-foreground/70">{entry.gratitude}</p>
                    </div>
                  )}

                  {entry.goals && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-1">🎯 Goals:</p>
                      <p className="text-sm text-foreground/70">{entry.goals}</p>
                    </div>
                  )}

                  {entry.hrtDays && (
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <p className="text-xs text-foreground/60">
                        💊 Day {entry.hrtDays} of HRT
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
