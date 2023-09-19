import OpenAI  from "openai";
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json()); //parse input

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

app.post("/", async(request, response) =>{
    const {chats} = request.body;

    try{
        const result = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "you are a chatbot", chats}],
        })

        response.json({
            output: result.choices[0].message,
        })
    }catch(exception){
        response.json({output:exception});
    }
})