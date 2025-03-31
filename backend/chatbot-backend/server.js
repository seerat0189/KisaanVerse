require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: `You are Krishi Crop Planner, an AI bot which helps farmers in crop planning. Farmers should input which crops they wish to grow along with their location. Your task is to:
  - Suggest companion crops that support optimal growth.
  - Predict the growth time and soil nutrition post-harvest.
  - Analyze climate data at the harvest time and suggest next crops.
  - Provide clear responses in a structured format.`,
});

app.post("/chatbot", async (req, res) => {
  try {
    const { message } = req.body;
    const chatSession = model.startChat({ history: [] });

    const result = await chatSession.sendMessage(message);
    const responseText = result.response.text();

    res.json({ reply: responseText });
  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({ error: "Failed to generate response." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
