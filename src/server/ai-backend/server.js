import express from "express";
import cors from "cors";
import { CohereClient } from "cohere-ai";
import { SYSTEM_PROMPT } from "./ai.js";

const COHERE_API_KEY = process.env.COHERE_API_KEY;

const app = express();

app.use(cors());
app.use(express.json());

const cohere = new CohereClient({
    token: COHERE_API_KEY,
});

app.post("/ask", async (req, res) => {
    try {
        const { message } = req.body;
        const userMessage = Array.isArray(message)
            ? message.join(", ")
            : message;

        const response = await cohere.chat({
            model: "tiny-aya-global",
            message: userMessage,
            preamble: SYSTEM_PROMPT,
        });

        res.json({
            reply: response.text || response.message?.text || "No reply",
        });
    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
