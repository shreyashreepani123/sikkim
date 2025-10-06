import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config(); // Load .env before using process.env

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // ✅ use OpenAI's mini model
      messages: [{ role: "user", content: message }],
    });

    // ✅ Some SDK versions return `response.choices[0].message.content`
    // but older ones return `response.choices[0].message`.
    const reply =
      response.choices[0].message?.content ||
      response.choices[0].message ||
      "No reply received";

    res.json({ reply });
  } catch (error) {
    console.error("ChatGPT error:", error);

    res.status(500).json({
      error: "Error connecting to ChatGPT",
      details: error.message,
    });
  }
});

export default router;
