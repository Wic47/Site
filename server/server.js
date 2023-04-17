import * as dotenv from "dotenv";
import express from "express";
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/', async (req,res) => {

    const { messages } = req.body;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: `You are Chat GPT a helpful assistant designed to help with anything.`},
            ...messages
        ],
        temperature: 0.4,
        max_tokens: 2048,
        frequency_penalty: 0.5,
        });

    res.json({
        completion: completion.data.choices[0].message
    })
})

app.listen(port, () => console.log(`Servern körs nu på port http://localhost:${port}`));
