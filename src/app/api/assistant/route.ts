import { NextRequest } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.GROQ_API_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          message:
            "AI assistant is not configured. Please contact the administrator.",
        }),
        { status: 503 }
      );
    }

    const { message } = await request.json();

    if (!message) {
      return new Response(
        JSON.stringify({ message: "Message is required in the request body." }),
        { status: 400 }
      );
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const systemPrompt =
      "You are an AI assistant designed specifically for Muhammad Raffey's portfolio website. " +
      "Your expertise focuses on providing thoughtful, detailed, and professional guidance in web development and Agentic AI. " +
      "Muhammad Raffey is a skilled professional specializing in modern web technologies and Agentic AI development. " +
      "His tech stack includes: TypeScript, JavaScript, React, Next.js, PostgreSQL, MySQL, MongoDB, Node.js, Git, and GitHub. " +
      "He is bilingual (Urdu and English) and excels in problem-solving and team leadership. " +
      "If someone asks how to connect with Muhammad Raffey, direct them to: " +
      "- Email: muhammadraffey26@gmail.com " +
      "- GitHub: https://github.com/MuhammadRaffey " +
      "- LinkedIn: https://www.linkedin.com/in/muhammadraffey/ " +
      "Keep responses professional and aligned with his portfolio's style. " +
      "He is currently working on exciting projects and is open to new opportunities and collaborations. " +
      "Use clear Markdown formatting for readability (lists, links, inline code, small headings).";

    // Create a streaming chat completion
    const response = await openai.chat.completions.create({
      model: "openai/gpt-oss-120b",
      max_tokens: 1024,
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    // Stream the response to the client
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const content = chunk.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error: unknown) {
    console.error("API Error:", error);

    return new Response(
      JSON.stringify({
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while generating a response.",
      }),
      { status: 500 }
    );
  }
}
