const { GoogleGenAI } = require("@google/genai");

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is not set");
}

const client = new GoogleGenAI({
  apiKey: apiKey
});

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    console.log("Sending to Gemini...");
    console.log("API Key exists:", !!apiKey);

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    console.log("Gemini response received");
    console.log("Response object:", response);

    const text = response.text || response.content;

    return res.status(200).json({
      text: text
    });

  } catch (err) {
    console.error("Full error:", err);
    console.error("Error message:", err.message);
    console.error("Error stack:", err.stack);

    return res.status(500).json({
      error: "AI request failed",
      message: err.message,
      details: err.toString()
    });
  }
};
