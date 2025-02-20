import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  throw new Error(
    "ANTHROPIC_API_KEY is not defined in the environment variables"
  );
}

const anthropic = new Anthropic({
  apiKey: apiKey,
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { message: "Message is required in the request body." },
        { status: 400 }
      );
    }

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
      "He is currently working on exciting projects and is open to new opportunities and collaborations.";

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-latest",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const content = response.content.find(
      (block) => "type" in block && block.type === "text"
    );
    if (!content || !("text" in content)) {
      throw new Error("Unexpected response format from Anthropic API");
    }

    return NextResponse.json({ message: content.text });
  } catch (error: unknown) {
    console.error("API Error:", error);

    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { message: "Anthropic API error: " + error.message },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while generating a response.",
      },
      { status: 500 }
    );
  }
}
