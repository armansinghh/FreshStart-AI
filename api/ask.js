export const config = {
  runtime: "nodejs"
};

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    // IMPORTANT: always return JSON
    return res.status(200).json({
      text: response.text
    });

  } catch (err) {
    console.error("🔥 Gemini SDK error:", err);

    // Always return JSON, even on error
    return res.status(500).json({
      error: "AI request failed",
      message: err?.message || "Unknown error"
    });
  }
}
