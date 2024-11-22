import ollama from "ollama";

const chat = async () => {
  try {
    const response = await ollama.chat({
      model: "llama3.2-vision",
      messages: [
        {
          role: "user",
          content: "What is in this image?",
          images: [
            "./parameters/ComfyUI_00003_.png",
            "./parameters/ComfyUI_00006_.png",
          ],
        },
      ],
      host: "http://10.27.65.248:11434",
    });
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
};

chat();
