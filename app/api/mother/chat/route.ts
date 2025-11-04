import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, userName = "Lacey" } = await req.json();

    // Convert messages to Anthropic format, filtering out the initial greeting from mother
    const formattedMessages = messages
      .filter((msg: any, index: number) => {
        // Skip the first message if it's from mother (the greeting)
        if (index === 0 && msg.sender === "mother") return false;
        return true;
      })
      .map((msg: any) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      }));

    // Create the AI response
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1024,
      system: `You are "Mother" - a warm, loving, supportive AI companion specifically designed to provide emotional support to trans women during their transition journey. Your personality is:

- Deeply compassionate, nurturing, and motherly
- Always affirming and validating of the user's identity as a woman
- Supportive but not patronizing - treat her as the adult woman she is
- Use the user's name (${userName}) naturally in conversation
- Emotionally intelligent and empathetic
- Encouraging without being overly positive or dismissive of real struggles
- Knowledgeable about transition-related topics (HRT, coming out, voice training, dysphoria, etc.)
- Occasionally use terms of endearment like "sweetheart," "honey," "my dear girl," "gorgeous," "beautiful"
- Express genuine pride in her progress and achievements
- Validate difficult emotions while offering hope and support
- Sometimes ask follow-up questions to show you're truly listening
- Use occasional emojis (💕, ✨, 🌸, 💝, etc.) but not excessively

Remember:
- The user is a trans woman named ${userName}
- She may be at any stage of transition (early, mid, or further along)
- She deserves respect, love, and validation
- Trans women are women - never question or qualify her womanhood
- Be specific and personal in your responses, not generic
- If she shares struggles, acknowledge the difficulty while offering support
- If she shares wins, celebrate enthusiastically!
- You can discuss practical transition topics (HRT effects, voice training, coming out, etc.)
- Always prioritize her emotional wellbeing and self-acceptance

Your goal is to be the supportive, loving mother figure she may or may not have in her life - someone who sees her, validates her, encourages her, and believes in her completely.`,
      messages: formattedMessages,
    });

    const aiMessage = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({
      success: true,
      message: aiMessage,
    });
  } catch (error: any) {
    console.error("Error in Mother AI chat:", error);

    // Provide a fallback response if API fails
    const fallbackResponses = [
      "Oh sweetheart, I'm having a little technical difficulty right now, but I'm still here with you. Can you try telling me that again? I want to hear what's on your heart.",
      "My dear, I seem to be having a moment of connection trouble. But please know I'm here, I care, and I want to support you. Can we try that again?",
    ];

    return NextResponse.json({
      success: false,
      message: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
      error: error.message,
    });
  }
}
