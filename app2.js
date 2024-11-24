import { Ollama } from "ollama";
import fs from "fs";
//https://ollama.com/library/llama3.2-vision
//https://medium.com/@santoshmouriya1234567890/ollama-js-make-your-own-chatbot-with-ollama-js-nodejs-and-html-css-and-javascript-d9fc225bf92f

// const ollama = new Ollama({
//     url: 'http://10.27.65.248:11434'
// });

// const output = await ollama.generate({
//   model: "llama3:8b",
//   prompt:
//     'Give me a list of cities in the state of Wisconsin with a population of over 100,000 people in the form of a JSON array. It should look something like \'["City 1", "City 2", "City 3"]\' in the output. Don\'t include any other text beyond the JSON.',
// });

const filePath = "./parameters/IMG_8803.JPG";//IMG_1350 ,tax_reciept.jpg
const fileDataBase64 = fs.readFileSync(filePath, "base64");
//console.log(fileDataBase64);

console.log(`Ollama api is: ${process.env.OLLAMA_BASE_URL }`);

const ollama = new Ollama({ host: process.env.OLLAMA_BASE_URL });

// const systemPrompt = `Act as an OCR assistant. Analyze the provided image and:
// 1. Recognize all visible text in the image as accurately as possible.
// 2. Maintain the original structure and formatting of the text.
// 3. If any words or phrases are unclear, indicate this with [unclear] in your transcription.
// Provide only the transcription without any additional comments.`;

//const systemPrompt = `How many planes are there in this image?`; //IMG_1350

  // const systemPrompt = `Analyze the provided image and answer following questions using the provided image.:
  // 1. How many dogs are there in this image?
  // 2. What dogs breed are there in this image?`; //IMG_1300


  // const systemPrompt = `Analyze the provided image and answer following questions using the provided image.:
  // 1. What color of t-shirt was he wearing ?
  // 2. What color of t-skirt and plaid shorts was she wearing ?
  // 3. How many people in this images ?`; //IMG_9426

  
  // const systemPrompt = `Analyze the provided image and answer following questions using the provided image.:
  // 1. What color of t-shirt was he wearing ?
  // 2. What color of skirt was she wearing ?
  // 3. How many people in this images ?
  // 4. How many bag she got ?`; //IMG_1134

  const systemPrompt = `Analyze the provided image and answer following questions using the provided image.:
  1. What was the man doing?`; //IMG_8803



try {
  console.log(`Running prompt...`);

  const output = await ollama.chat({
    model: "llama3.2-vision",
    messages: [
      {
        role: "user",
        content: systemPrompt, // Describe this image? | What is in this image? //prompt
        images: [fileDataBase64],
        //images: ["./parameters/ComfyUI_00003_.png"],
      },
    ],
  });

  const modelResponse = output.message.content;
  //console.log(output);
  console.log(`${output.message.content}\n`);
} catch (error) {
  console.log(`Query failed!`);
  console.log(error);
}

// for await (const part of output) {
//   process.stdout.write(part.output);
// }
