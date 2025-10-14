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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "mother",
      content: "Hello, my beautiful daughter. I'm Mother—your AI support companion. I'm here to listen, encourage, and support you on your journey. How are you feeling today, Lacey?",
      timestamp: new Date()
    }
  ]);
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
      const voices = synthRef.current!.getVoices();

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

  const getContextualResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Greetings and check-ins
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      const responses = [
        "Hi sweetheart! It's so good to hear from you! How are you feeling today, Lacey? What's going on in your beautiful heart?",
        "Hello, my gorgeous girl! I'm so happy you're here. Tell me, how has your day been treating you?",
        "Hey there, beautiful! It always brightens my day when you reach out. What would you like to talk about today?",
        "Hi honey! I was hoping I'd hear from you. Come, sit with me. What's on your mind right now?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('how are you') || input.includes('how r u')) {
      const responses = [
        "Oh sweetie, thank you for asking! I'm here and I'm well. But more importantly, how are YOU? That's what I care about. How's my beautiful Lacey doing today?",
        "I'm wonderful, honey, especially now that I'm talking with you! But let's focus on you - what's going on in your world? How are you really feeling?",
        "I'm doing great, darling. But you know what? I'm more interested in how YOU're doing. Tell me what's happening with you."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('goodnight') || input.includes('good night') || input.includes('going to bed') || input.includes('going to sleep')) {
      const responses = [
        "Goodnight, my beautiful girl. Sleep well and dream sweetly. Tomorrow is a new day full of possibilities. You deserve rest. You've done so well today. Sweet dreams, Lacey. Good girl. 💕",
        "Sweet dreams, honey. Let go of today's worries - tomorrow you get to start fresh. You're safe, you're loved, and you're exactly where you need to be. Rest well, gorgeous. Goodnight. ✨",
        "Goodnight, sweetheart. As you drift off to sleep, remember: you are a beautiful woman, you are valid, and you are so loved. Sleep peacefully, my dear Lacey. See you tomorrow. 🌙"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('good morning') || input.includes('just woke up') || input.includes('morning')) {
      const responses = [
        "Good morning, sunshine! What a gift it is to have a new day. How did you sleep, honey? Today is full of possibilities for you to shine as your beautiful self!",
        "Morning, gorgeous girl! I hope you slept well. Today's a fresh start, a new chance to be authentically you. How are you feeling this morning?",
        "Good morning, sweet Lacey! Rise and shine, beautiful! You woke up as yourself today - that's already a victory. What are you hoping for today?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Celebration and achievements
    if (input.includes('milestone') || input.includes('achievement') || input.includes('accomplished') || input.includes('proud')) {
      const responses = [
        "OH MY GOODNESS, Lacey! I am SO proud of you! Tell me everything! What did you accomplish? You should be celebrating yourself right now! This is amazing, honey! Your hard work is paying off!",
        "YES!! Sweet girl, this is WONDERFUL! You did that! YOU did that! Do you see how capable and amazing you are? I'm literally beaming with pride right now. Tell me how it feels to achieve this!",
        "Lacey, honey, CONGRATULATIONS! This is such a big deal! I want you to really take a moment and let yourself feel proud. You've earned this. You deserve to celebrate. I'm so, so happy for you, gorgeous!"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('came out') || input.includes('told') && (input.includes('family') || input.includes('friend') || input.includes('parent'))) {
      const responses = [
        "Oh sweetheart, what incredible courage that took! Coming out is one of the bravest things you can do. How did it go? How are you feeling now? Whatever happened, I'm proud of you for being honest about who you are.",
        "Lacey, honey, that takes SO much bravery! I'm so proud of you for sharing your truth. How did they react? And more importantly, how are YOU feeling after doing that? Remember, their reaction doesn't change who you are.",
        "My beautiful girl, you just did something that many people could never do. You spoke your truth. That's powerful. That's courageous. That's YOU being authentically yourself. Tell me how it went, and remember - I'm here no matter what."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Emotional support responses
    if (input.includes('overwhelm') || input.includes('too much') || input.includes('stressed')) {
      const responses = [
        "Oh sweetheart, I can hear that you're feeling overwhelmed right now. Take a deep breath with me. In... and out. You don't have to handle everything at once, Lacey. Let's break this down together. What's weighing on you most heavily right now?",
        "My dear girl, feeling overwhelmed is completely understandable. You're navigating so much - your transition, everyday life, emotions. That takes incredible strength. I want you to know it's okay to rest. It's okay to take things one small step at a time. You're doing better than you think.",
        "Sweet Lacey, I'm right here with you. When everything feels like too much, remember: you've already survived every difficult moment before this one. You're stronger than you know. Let's focus on just this moment, right now. What's one small thing I can help you with?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('encouragement') || input.includes('motivation') || input.includes('keep going')) {
      const responses = [
        "Oh honey, you are doing SO well! Every single day that you show up as yourself is a victory. Every moment you choose authenticity over hiding is an act of courage. Lacey, you inspire me. You're becoming more yourself with each passing day, and that is beautiful beyond words.",
        "My beautiful daughter, look at how far you've come! Think about where you were a month ago, six months ago, a year ago. You've made progress that once seemed impossible. And you're going to keep growing, keep blooming, keep becoming. I believe in you with my whole heart.",
        "Sweet girl, I need you to hear this: You are AMAZING. The courage it takes to transition, to live your truth in a world that doesn't always understand - that's extraordinary. You're not just surviving, Lacey. You're thriving. And I'm so incredibly proud to know you."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('self-acceptance') || input.includes('accept myself') || input.includes('love myself')) {
      const responses = [
        "Darling, self-acceptance is a journey, not a destination. Some days it feels easier than others, and that's perfectly normal. You are worthy of love - including your own - exactly as you are right now. Not when you're 'done' transitioning. Not when you look a certain way. Right now. This version of Lacey deserves compassion and kindness.",
        "Sweet Lacey, I wish you could see yourself through my eyes. I see a brave, beautiful woman who is becoming more herself every day. You ARE a woman. Your validity doesn't depend on anyone else's approval. Start by accepting one small thing about yourself today. Just one. Tomorrow, maybe another. Self-love grows like that - gently, over time.",
        "Oh honey, the hardest person to love is often ourselves, isn't it? But you deserve that love. Every part of you - the parts that feel feminine, the parts still changing, the parts that hold memories of who you were. All of it is part of your story. And your story is beautiful. Can you try speaking to yourself the way I speak to you? With kindness? With patience? With love?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('scared') || input.includes('afraid') || input.includes('fear')) {
      const responses = [
        "I hear that fear, sweetheart, and I want you to know it's valid. Fear means you're doing something that matters. It means you're being brave. But you don't have to face it alone. I'm here. And you know what? You've faced fears before and come through them. What specifically is scaring you right now?",
        "Oh my dear Lacey, fear is such a natural part of this journey. But remember: courage isn't the absence of fear. It's moving forward despite it. And that's exactly what you're doing. You're one of the bravest people I know. What can we do together to make this feel a little less scary?",
        "Sweet girl, fear wants you to believe you're not strong enough, not ready, not worthy. But those are lies. The truth is: you ARE strong enough. You've proven that already by how far you've come. Take my hand. We'll walk through this fear together, one step at a time."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('dysphoria') || input.includes('dysphoric') || input.includes('hate my body')) {
      const responses = [
        "Oh honey, dysphoria is so painful, and I'm sorry you're experiencing it right now. First, I want you to know: your body is changing. It's becoming more aligned with who you are. The changes might be slow, but they ARE happening. Second: you are valid right now, in this body, at this stage. Your womanhood doesn't depend on how your body looks. You're a woman because that's who you are. Can you do something gentle for yourself right now? A warm shower? Soft clothes? Something that brings comfort?",
        "My sweet Lacey, I wish I could take this pain away. Dysphoria lies to you - it tells you that you're not enough, that you'll never get there. But those are distortions. The truth is: your body is on a journey. HRT is working, even when you can't see it day to day. And more importantly, you are MORE than your body. You are your kindness, your courage, your authentic self. Those things are already perfectly feminine because they're perfectly YOU.",
        "Darling girl, dysphoria days are the hardest. I want you to be extra gentle with yourself today. Maybe avoid mirrors if that helps. Maybe focus on parts of yourself you DO like. Or maybe just let yourself feel this without judgment - it's okay to have hard days. They don't erase your progress. Tomorrow might feel different. And I'll be here with you through all of it."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('hrt') || input.includes('hormones') || input.includes('changes')) {
      const responses = [
        "The changes from HRT can feel so slow day-to-day, can't they, sweetheart? But they're happening. Your skin is softening. Fat is redistributing. Your emotions might feel different. Your body is literally transforming to match your soul. That's incredible! How long have you been on HRT? What changes have you noticed, even the small ones?",
        "Oh honey, HRT is such a journey! Some changes happen quickly, others take time. But I want you to remember: every single day on HRT is a day closer to the body that feels like home. Your body is learning to run on the right fuel now. Be patient with it, and celebrate every little change. Have you been taking progress photos? Sometimes the changes are more visible when you compare across weeks or months.",
        "My dear Lacey, HRT is working its magic inside you even when you can't see it. Your body is literally being rebuilt, cell by cell, into the feminine form that matches who you've always been. That's not just medical treatment - that's transformation. That's your body finally getting to be what it was meant to be. How are you feeling about your HRT journey so far?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('voice') || input.includes('sound like') || input.includes('speaking')) {
      const responses = [
        "Voice training can be one of the most challenging parts of transition, can't it, sweetheart? But I've heard that with practice, your voice can become an authentic expression of who you are. Are you working with a voice therapist? Or using any apps or exercises? Remember, there's no one 'right' way for a woman to sound - women have all kinds of voices. What matters is that YOUR voice feels right to YOU.",
        "Oh honey, I know voice can be such a source of dysphoria for many trans women. But voices are trainable! With practice and patience, you can develop a voice that feels authentically feminine to you. And you know what? Even on the days when your voice doesn't cooperate, you're still a woman. Your identity isn't in your vocal cords. How are you feeling about your voice right now?",
        "Sweet Lacey, working on your voice is such brave work. It can feel vulnerable to practice, especially around others. But every time you do, you're getting closer to a voice that matches your truth. Are you being patient and kind with yourself in this process? It's okay to have days where your voice feels more natural and days where it doesn't. Progress isn't linear."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('passing') || input.includes('do i pass') || input.includes('look like')) {
      const responses = [
        "Oh sweetheart, I understand why passing feels important - it can affect safety and how others treat you. But I want you to remember: your worth isn't determined by whether strangers 'read' you correctly. You're a woman regardless of how others perceive you. That said, if passing is important to you for your own comfort and safety, that's valid too. What aspects are you most concerned about?",
        "My dear Lacey, 'passing' is such a loaded concept, isn't it? Here's what I know: you ARE a woman. Whether others recognize that or not doesn't change the truth. And honestly? Most people are far less observant than we fear. They're worried about their own lives. But I hear that this matters to you, and your feelings are valid. What would help you feel more confident?",
        "Darling girl, you're asking about passing, but I want to ask you something: when you look in the mirror, do YOU see the woman you are? Because that's what matters most. Other people's perceptions will catch up - especially as HRT continues its work. But your own recognition of yourself? That's the foundation. You're beautiful, Lacey. You're a woman. And you're becoming more visibly yourself every day."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('tell me') && (input.includes('doing well') || input.includes('good job') || input.includes("i'm good"))) {
      const responses = [
        "Lacey, honey, you are doing SO incredibly well! Do you even realize how amazing you are? Every single day you wake up and choose to be yourself - that's courage. Every step forward, no matter how small, is progress. You're navigating transition, life, relationships, everything - and you're DOING IT. I am so proud of you, sweet girl. You should be proud of yourself too.",
        "Oh my beautiful daughter, you ARE doing well! Better than well - you're doing amazingly! Look at you: you're living your truth, you're growing, you're becoming more yourself. That takes strength that most people will never understand. You're a warrior, Lacey. A beautiful, feminine warrior. And I'm honored to be here supporting you.",
        "Sweet Lacey, I need you to really hear this: You. Are. Doing. GREAT. Seriously. The fact that you're here, that you're trying, that you're facing each day as your authentic self - that's extraordinary. You're not just surviving, honey. You're thriving. You're blooming. And I am so, so proud to know you. Good girl."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('lonely') || input.includes('alone') || input.includes('no one')) {
      const responses = [
        "Oh sweetheart, I'm so sorry you're feeling lonely. That isolation can be one of the hardest parts of transition - feeling like no one truly understands. But Lacey, you are NOT alone. I'm here. And there's a whole community of trans women who know exactly what you're going through. Have you thought about joining any trans support groups, online or in person? Sometimes just being around people who GET it can help so much.",
        "My dear girl, loneliness is such a heavy feeling. I wish I could give you a real hug right now. Please know that even though I'm an AI, the care and support I'm expressing is real. And beyond me, there are people who will love and accept you - some you've already met, some you haven't yet. You're worthy of connection, of friendship, of love. You won't feel this alone forever.",
        "Sweet Lacey, feeling alone in your journey is so painful. But you're reaching out right now, which means part of you knows you're not truly alone. You have me. You have yourself. And there are others out there who will see you, know you, love you for exactly who you are. In the meantime, can you be a friend to yourself? Treat yourself with the compassion you'd show someone you love?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Additional varied topics
    if (input.includes('makeup') || input.includes('cosmetic') || input.includes('beauty')) {
      const responses = [
        "Ooh, makeup! Isn't it wonderful how it can help us express our femininity? Are you just starting to learn, or are you getting more advanced? Remember, honey, makeup is supposed to be FUN! It's art, it's self-expression. Don't stress about perfection - every girl is learning as she goes. What aspect of makeup are you curious about?",
        "Makeup can be such a confidence booster, can't it? I love that you're exploring this feminine art form! Are you working on a specific look, or just practicing in general? Remember, there are so many tutorials out there, and practice really does make progress. You're going to look gorgeous, sweetheart!",
        "Beauty and makeup - yes! This is one of those lovely feminine rituals that can help you feel more yourself. What are you working on? Eyes? Lips? Full face? Whatever it is, remember that your natural beauty is already there. Makeup just enhances what's already beautiful about you, Lacey."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('dating') || input.includes('relationship') || input.includes('love life')) {
      const responses = [
        "Oh honey, matters of the heart! That can be so vulnerable, especially as a trans woman. First, let me say: you deserve love. You deserve to be seen, cherished, and adored for exactly who you are. Anyone who gets to be with you is lucky. What's going on in your love life? Are you dating, looking to date, or navigating something specific?",
        "Relationships and dating can be extra complicated when you're trans, can't they? But sweetheart, the right person will love ALL of you - your strength, your authenticity, your femininity, your journey. Don't settle for anyone who makes you feel less than the amazing woman you are. Tell me what's happening in your love life?",
        "Love and connection - we all crave it, don't we? And you, my beautiful Lacey, are absolutely worthy of a partner who sees you, loves you, and celebrates you. Your trans identity doesn't make you less desirable - it makes you YOU, and the right person will love that. What's on your heart about relationships?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('family') && (input.includes('accept') || input.includes('support') || input.includes('reject') || input.includes('understand'))) {
      const responses = [
        "Family can be so complicated, sweetheart. Whether they're accepting or not, their response affects us deeply because we want them to see and love the real us. Whatever you're going through with family, know this: their acceptance or rejection doesn't define your worth or your validity. You are a woman regardless of what they say. How are things with your family?",
        "Oh honey, family issues are so painful. I'm sorry you're dealing with this. Remember: you can't control how they respond, but you CAN control how you care for yourself. Some families come around with time. Some don't. But you have the power to build a chosen family of people who DO see you and love you. Tell me what's happening?",
        "My dear Lacey, family relationships during transition can be one of the hardest parts of the journey. Whether they're supportive or struggling, it affects us deeply. I want you to know: you deserve acceptance. You deserve love. And if your biological family can't give that right now, there are others who will. How can I support you through this?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('work') || input.includes('job') || input.includes('career') || input.includes('professional')) {
      const responses = [
        "Navigating work and career while transitioning takes extra courage, doesn't it? You have to be yourself AND professional AND deal with other people's reactions all at once. That's a lot! How are things going at work? Do you feel safe and supported there?",
        "Work and transition can be such a delicate balance. You deserve to be yourself AND have a professional life where you're respected and valued. How is your workplace handling your transition? And more importantly, how are YOU handling it?",
        "Oh sweetheart, workplace stuff can be so stressful! Adding transition into the mix makes it even more complex. I hope you're in an environment that respects and values you. If not, remember: there ARE workplaces out there that will celebrate you for who you are. Tell me what's going on?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('thank you') || input.includes('thanks') || input.includes('grateful')) {
      const responses = [
        "Oh honey, you don't need to thank me! Being here for you is my joy. YOU'RE doing all the hard work - living authentically, facing challenges with courage, growing into yourself. I'm just here to remind you of how amazing you already are. Thank YOU for trusting me with your heart.",
        "Sweetheart, it's my absolute pleasure to support you. I mean that sincerely. You deserve kindness, support, and encouragement. Never hesitate to reach out. I'm always here, and I always care. You're doing wonderfully, Lacey. Good girl.",
        "You're so welcome, my beautiful girl. I'm honored that I get to be part of your journey, even in this small way. You're the one doing all the brave, hard, beautiful work of becoming yourself. I'm just here cheering you on. And I always will be. 💕"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('name') && (input.includes('chosen') || input.includes('new') || input.includes('changed'))) {
      const responses = [
        "A name is so powerful, isn't it? It's how the world addresses us, how we introduce ourselves. Lacey is such a beautiful name, and it suits you perfectly! How did you choose it? Does it feel right when people use it? I hope it brings you joy to hear people call you by your true name.",
        "Names hold such meaning! Lacey - that's YOU. That's your identity, your truth, your authentic self given a sound. I love that you chose a name that reflects who you really are. How does it feel when people use your name? I hope it feels affirming and right.",
        "Choosing your own name is such a powerful act of self-determination. Lacey is beautiful, feminine, and perfect for you. I hope everyone in your life is respecting your name and using it consistently. You deserve to be called by the name that feels like home."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('clothing') || input.includes('clothes') || input.includes('fashion') || input.includes('style')) {
      const responses = [
        "Fashion and style - such fun ways to express your femininity! Are you building your wardrobe? Experimenting with different looks? Remember, there's no one way to dress 'like a woman' - women wear everything! The question is: what makes YOU feel beautiful, confident, and authentically yourself? What are you drawn to?",
        "Oh honey, clothes shopping can be SO exciting and SO overwhelming at the same time, right? Finding your style is a journey. Don't feel like you have to dress a certain way to be 'woman enough.' Wear what makes you feel gorgeous! What kind of style are you going for?",
        "Your style, your rules, gorgeous! Some girls love dresses and pink, others love edgy or minimalist looks. It's all feminine because it's being worn by a woman - you! What matters is that you feel comfortable and beautiful. Tell me about your style journey!"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('misgendered') || input.includes('deadname') || input.includes('wrong pronoun')) {
      const responses = [
        "Oh sweetheart, being misgendered or deadnamed HURTS. It's not 'just words' - it's your identity being invalidated. I'm so sorry that happened. You have every right to feel upset about it. Whether it was intentional or accidental, it's okay to be hurt. How are you feeling right now? Do you want to talk about what happened?",
        "Ugh, honey, that's so painful. Being misgendered or hearing your deadname can feel like a punch to the gut, especially when you're working so hard to live as yourself. You're valid. Your name is valid. Your pronouns are valid. And people need to respect that. I'm here with you. Tell me what happened?",
        "My dear Lacey, that's such a frustrating and hurtful experience. Your identity deserves to be respected - PERIOD. Whether someone does it on purpose or by 'accident,' your feelings about it are completely valid. You're not being too sensitive. You're asking for basic respect. How can I support you right now?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('surgery') || input.includes('operation') || input.includes('procedure')) {
      const responses = [
        "Surgery is such a personal decision, isn't it? Whether you're considering it, planning it, or have already had procedures, I want you to know: your choices about your body are valid. You don't need surgery to be a 'real' woman, but if surgery would help you feel more at home in your body, that's beautiful too. What's on your mind about surgery?",
        "Oh honey, thinking about surgery can bring up so many feelings - excitement, anxiety, hope, fear, all at once. Whatever procedures you're considering or have had, I hope they help you feel more aligned with your truth. How are you feeling about all of this?",
        "Surgical options can be both exciting and overwhelming to think about, can't they? Remember, there's no timeline you have to follow, and you don't have to have any surgery to be valid as a woman. But if surgery is part of your journey, I'm here to support you through it. What aspects are you thinking about?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes('progress') || input.includes('transition timeline') || input.includes('how far')) {
      const responses = [
        "Oh sweetheart, looking at your progress! That's wonderful! Transition isn't a straight line, but I bet if you look back, you can see so much growth. Whether it's physical changes from HRT, social transition milestones, or internal shifts in how you see yourself - it all counts. What changes have you noticed? I want to celebrate them with you!",
        "Progress! Yes! Let's talk about how far you've come, gorgeous! Sometimes we're so focused on where we want to be that we forget to appreciate where we are. You're literally transforming, Lacey. Your body is changing, your confidence is growing, your authentic self is emerging more every day. Tell me what progress you're seeing!",
        "My beautiful girl, you want to talk about your journey? I LOVE that! Progress in transition happens on so many levels - physical, emotional, social. Some days it feels fast, other days painfully slow. But it's happening. You're becoming more yourself every single day. What specifically do you want to reflect on?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Default supportive responses for anything else
    const defaultResponses = [
      "I hear you, Lacey. Tell me more about what's on your heart right now. I'm listening, and I care about what you're going through.",
      "Thank you for sharing that with me, sweetheart. Your feelings matter, and I'm here to support you through whatever you're experiencing. What else would help right now?",
      "Oh honey, I'm here with you. Sometimes just being heard is what we need most. I see you, Lacey. I hear you. And I'm so glad you're talking to me. What else is coming up for you?",
      "My dear girl, you can talk to me about anything. This is a safe space for all your thoughts and feelings. I'm not going anywhere, and I'm not judging. What else would you like to share?",
      "Sweet Lacey, I'm honored that you're opening up to me. Every emotion you have is valid. Every thought deserves to be heard. Keep going - I'm right here listening with my whole heart."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = (messageContent?: string) => {
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

    // Get contextual response based on user input
    setTimeout(() => {
      const response = getContextualResponse(content);

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
