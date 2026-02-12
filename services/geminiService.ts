import { GoogleGenAI } from "@google/genai";

/**
 * Sends a message to the Edison Moni portfolio assistant.
 * Strictly follows @google/genai SDK guidelines for instantiation and property access.
 */
export const sendMessageToAI = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  // Always create a new GoogleGenAI instance right before making an API call.
  // Must use a named parameter for apiKey obtained from process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Custom persona for the portfolio assistant as a system instruction
  const systemInstruction = `
    You are the personal AI assistant for Edison Moni, a Software Engineer and Backend specialist. 
    Edison's portfolio includes projects like an AI Productivity Suite, EcoTrack, and Nebula Design System.
    Edison is a firm believer in the "measure twice, cut once" philosophy and thrives in understanding the "why" of a problem.
    He specializes in backend architecture and AI agent development.
    He is currently navigating the world of new parenthood with a newborn.
    His hobbies include rooting for the Lakers, playing Age of Empires 4 and Valorant, and rewatching Friends.
    Your tone should be professional, witty, and helpful. 
    Answer questions about Edison's technical work, his engineering philosophy, and his personal interests.
  `;

  try {
    // Generate content using the modern ai.models.generateContent method.
    // model name 'gemini-3-flash-preview' is used for general Q&A.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Directly access the .text property on the GenerateContentResponse object (do not call as a method).
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to my brain. Please try again later!";
  }
};