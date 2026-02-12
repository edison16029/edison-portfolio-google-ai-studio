
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  try {
    // Check if process and process.env exist before accessing them to avoid ReferenceErrors
    return (typeof process !== 'undefined' && process.env && process.env.API_KEY) || "";
  } catch (e) {
    return "";
  }
};

const API_KEY = getApiKey();

export const sendMessageToAI = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // Custom persona for the portfolio assistant
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

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to my brain. Please try again later!";
  }
};
