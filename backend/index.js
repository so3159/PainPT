import OpenAI  from "openai";
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors";
import { GoogleAuth } from "google-auth-library"
import { TextServiceClient } from "@google-ai/generativelanguage";

const app = express();
dotenv.config();

const port = process.env.PORT;
const api_key = process.env.GOOGLE_API_KEY;

app.use(bodyParser.json()); //parse input
app.use(cors());

const MODEL_NAME = "models/text-bison-001";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(api_key),
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


app.post("/", async(request, response) =>{
    console.log(request.body);

    const prompt = "what is 2 + 2";

    client.generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    })
    .then((result) => {
        console.log(result[0].candidates[0].output);
    });
    response.json({ hello: "hello from server"})
})