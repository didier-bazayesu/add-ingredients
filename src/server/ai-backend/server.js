// src/server/ai-backend/server.js
import express from "express";
import cors from "cors";
import { CohereClient } from "cohere-ai";
import { SYSTEM_PROMPT } from "./ai.js";
import { COHERE_API_KEY } from "./config.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173/" })); // adjust if CRA (3000)
app.use(express.json());


// Initialize Cohere client
const cohere = new CohereClient({
    token: COHERE_API_KEY,
});

// Route for Cohere recipes
app.post("/ask", async (req, res) => {
    try {
        const { message } = req.body;
        const userMessage = Array.isArray(message) ? message.join(", ") : message;

        console.log("Incoming message:", userMessage);

        // ✅ Use supported model
        const response = await cohere.chat({
            model: "tiny-aya-global", // or "command-r-mini" for faster responses
            message: userMessage,
            preamble: SYSTEM_PROMPT,
        });

        console.log("Cohere response:", response);

        res.json({ reply: response.text || response.message?.text || "No reply" });
    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});