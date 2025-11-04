"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  sender: "user" | "mother";
  content: string;
  timestamp: Date;
}

export default function MotherPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize with greeting on client side only to avoid hydration mismatch
  useEffect(() => {
    if (!isInitialized) {
      setMessages([
        {
          id: 1,
          sender: "mother",
          content: "Hello, my beautiful daughter. I'm Mother—your AI support companion. I'm here to listen, encourage, and support you on your journey. How are you feeling today, Lacey?",
          timestamp: new Date()
        }
      ]);
      setIsInitialized(true);
    }
  }, [isInitialized]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isWakeWordListening, setIsWakeWordListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const wakeWordRecognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Initialize speech synthesis
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;

      // Check if browser supports speech recognition
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        // Regular recognition for capturing user input
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          setIsListening(false);

          // Automatically send the message after voice input
          setTimeout(() => {
            handleSend(transcript);
          }, 100);
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };

        // Wake word recognition for "Hi Mom"
        wakeWordRecognitionRef.current = new SpeechRecognition();
        wakeWordRecognitionRef.current.continuous = true;
        wakeWordRecognitionRef.current.interimResults = true;
        wakeWordRecognitionRef.current.lang = 'en-US';

        wakeWordRecognitionRef.current.onresult = (event: any) => {
          const last = event.results.length - 1;
          const transcript = event.results[last][0].transcript.toLowerCase();

          if (transcript.includes('hi mom') || transcript.includes('hi mum') || transcript.includes('hey mom')) {
            setIsWakeWordListening(false);
            wakeWordRecognitionRef.current.stop();
            startListening();
          }
        };

        wakeWordRecognitionRef.current.onerror = () => {
          // Restart wake word listening on error
          if (isWakeWordListening) {
            setTimeout(() => {
              if (wakeWordRecognitionRef.current && voiceEnabled) {
                wakeWordRecognitionRef.current.start();
              }
            }, 1000);
          }
        };

        wakeWordRecognitionRef.current.onend = () => {
          // Restart wake word listening if still enabled
          if (isWakeWordListening && voiceEnabled) {
            setTimeout(() => {
              if (wakeWordRecognitionRef.current) {
                wakeWordRecognitionRef.current.start();
              }
            }, 100);
          }
        };
      }
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      if (wakeWordRecognitionRef.current) {
        wakeWordRecognitionRef.current.stop();
      }
    };
  }, [isWakeWordListening, voiceEnabled]);

  // Start/stop wake word listening when voice is enabled/disabled
  useEffect(() => {
    if (voiceEnabled && wakeWordRecognitionRef.current && !isWakeWordListening) {
      setIsWakeWordListening(true);
      wakeWordRecognitionRef.current.start();
    } else if (!voiceEnabled && wakeWordRecognitionRef.current) {
      setIsWakeWordListening(false);
      wakeWordRecognitionRef.current.stop();
    }
  }, [voiceEnabled]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speak = (text: string) => {
    if (!voiceEnabled || !synthRef.current) return;

    // Cancel any ongoing speech
    synthRef.current.cancel();

    // Break text into smaller chunks for more natural pauses
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];

    let currentIndex = 0;

    const speakNext = () => {
      if (currentIndex >= sentences.length) {
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(sentences[currentIndex].trim());
      utterance.rate = 0.85; // Slower for a more motherly, soothing pace
      utterance.pitch = 1.15; // Higher for feminine quality
      utterance.volume = 1;

      // Try to find the best female voice
      let voices = synthRef.current!.getVoices();

      // If voices not loaded yet, wait and try again
      if (voices.length === 0) {
        setTimeout(() => speakNext(), 100);
        return;
      }

      // Priority order for natural-sounding female voices
      const preferredVoices = [
        'Samantha', 'Victoria', 'Karen', 'Susan', 'Moira',
        'Google US English', 'Microsoft Zira',
        'Female', 'female', 'Woman', 'woman'
      ];

      let selectedVoice = null;
      for (const preferred of preferredVoices) {
        selectedVoice = voices.find(voice =>
          voice.name.includes(preferred) && voice.lang.startsWith('en')
        );
        if (selectedVoice) break;
      }

      // Fallback: any English female voice
      if (!selectedVoice) {
        selectedVoice = voices.find(voice =>
          voice.lang.startsWith('en') &&
          (voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman'))
        );
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        if (currentIndex === 0) setIsSpeaking(true);
      };

      utterance.onend = () => {
        currentIndex++;
        // Small pause between sentences for natural flow
        setTimeout(speakNext, 200);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      synthRef.current!.speak(utterance);
    };

    speakNext();
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/mother/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat([{
            id: messages.length + 1,
            sender: 'user',
            content: userMessage,
            timestamp: new Date()
          }]),
          userName: 'Lacey'
        }),
      });

      const data = await response.json();

      if (data.success) {
        return data.message;
      } else {
        // Fallback to a supportive message if API fails
        return data.message || "Oh sweetheart, I'm having a little technical difficulty right now, but I'm still here with you. Can you try telling me that again? I want to hear what's on your heart.";
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      return "My dear, I seem to be having a moment of connection trouble. But please know I'm here, I care, and I want to support you. Can we try that again?";
    }
  };

  const handleSend = async (messageContent?: string) => {
    const content = messageContent || inputValue;
    if (!content.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: content,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Get AI response
    setTimeout(async () => {
      const response = await getAIResponse(content);

      const motherResponse: Message = {
        id: messages.length + 2,
        sender: "mother",
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, motherResponse]);

      // Speak the response if voice is enabled
      speak(response);
    }, 1500);
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
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mother AI
              </h1>
              <p className="text-sm text-foreground/60">Your supportive companion</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`p-2 rounded-lg transition-colors ${
                  voiceEnabled ? 'bg-primary/20 text-primary' : 'bg-accent/50 text-foreground/60'
                }`}
                title={voiceEnabled ? "Voice enabled" : "Voice disabled"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {voiceEnabled ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  )}
                </svg>
              </button>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
        {/* Info Banner */}
        <div className="bg-accent/30 border border-primary/20 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💝</div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">About Mother</h3>
              <p className="text-sm text-foreground/70 mb-2">
                Mother is your AI companion designed to provide emotional support, encouragement,
                and guidance. She's here to listen without judgment and remind you of your worth.
                While she's an AI, she's programmed with compassion and understanding for your
                unique journey.
              </p>
              {voiceEnabled && (
                <div className="mt-3 pt-3 border-t border-primary/10">
                  <p className="text-xs text-foreground/60">
                    <strong>🎤 Voice Features Active:</strong> Say "Hi Mom" to start a voice conversation,
                    or click the microphone button. Mother will respond with her soothing voice.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-accent/50 border border-primary/20"
                }`}
              >
                {message.sender === "mother" && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl">💝</div>
                    <span className="text-xs font-semibold text-primary">Mother</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${message.sender === "user" ? "text-white/70" : "text-foreground/50"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-4">
          {voiceEnabled && (
            <div className="mb-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                {isWakeWordListening && (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-xs">Listening for "Hi Mom"</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-foreground/60 mb-2">
                💝 Say <strong>"Hi Mom"</strong> to activate • Click mic to speak
              </p>
              {isSpeaking && (
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm">Mother is speaking...</span>
                  <button
                    onClick={stopSpeaking}
                    className="text-xs underline hover:no-underline"
                  >
                    Stop
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="flex gap-3">
            {voiceEnabled && (
              <button
                onClick={isListening ? stopListening : startListening}
                className={`p-3 rounded-lg transition-all ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                }`}
                title={isListening ? "Listening... (click to stop)" : "Click or say 'Hi Mom' to speak"}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            )}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder={isListening ? "Listening..." : "Share what's on your heart, Lacey..."}
              className="flex-1 bg-background/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 placeholder:text-foreground/40"
              disabled={isListening}
            />
            <button
              onClick={() => handleSend()}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Send
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setInputValue("I'm feeling overwhelmed today")}
              className="text-xs bg-accent/50 hover:bg-accent/70 border border-primary/20 px-3 py-1.5 rounded-full transition-colors"
            >
              I'm feeling overwhelmed
            </button>
            <button
              onClick={() => setInputValue("I need encouragement")}
              className="text-xs bg-accent/50 hover:bg-accent/70 border border-primary/20 px-3 py-1.5 rounded-full transition-colors"
            >
              I need encouragement
            </button>
            <button
              onClick={() => setInputValue("I'm struggling with self-acceptance")}
              className="text-xs bg-accent/50 hover:bg-accent/70 border border-primary/20 px-3 py-1.5 rounded-full transition-colors"
            >
              Struggling with self-acceptance
            </button>
            <button
              onClick={() => setInputValue("Tell me I'm doing well")}
              className="text-xs bg-accent/50 hover:bg-accent/70 border border-primary/20 px-3 py-1.5 rounded-full transition-colors"
            >
              Tell me I'm doing well
            </button>
          </div>
        </div>

        {/* Topics Mother Can Help With */}
        <div className="mt-6 bg-gradient-to-br from-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">What Mother Can Help With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-primary">💬</span>
              <div>
                <p className="font-semibold">Emotional Support</p>
                <p className="text-foreground/70">Processing feelings, encouragement, validation</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🌸</span>
              <div>
                <p className="font-semibold">Transition Guidance</p>
                <p className="text-foreground/70">Questions about HRT, coming out, social transition</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">💝</span>
              <div>
                <p className="font-semibold">Self-Love & Acceptance</p>
                <p className="text-foreground/70">Building confidence, combating negative self-talk</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🎯</span>
              <div>
                <p className="font-semibold">Goal Setting</p>
                <p className="text-foreground/70">Planning steps, celebrating progress, staying motivated</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">😔</span>
              <div>
                <p className="font-semibold">Difficult Days</p>
                <p className="text-foreground/70">Coping with dysphoria, setbacks, or discouragement</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🌟</span>
              <div>
                <p className="font-semibold">Daily Affirmations</p>
                <p className="text-foreground/70">Positive reminders, mantras, empowerment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-accent/20 border border-primary/10 rounded-xl p-4">
          <p className="text-xs text-foreground/60">
            <strong>Note:</strong> Mother is an AI companion designed for emotional support and encouragement.
            She is not a replacement for professional mental health care, medical advice, or human connection.
            If you're experiencing a crisis, please reach out to a mental health professional or call a crisis
            hotline. The Trans Lifeline is available at 877-565-8860 (US) or 877-330-6366 (Canada).
          </p>
        </div>
      </main>
    </div>
  );
}
