"use client";
import React, { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";

interface Message {
  content: string;
  sender: "user" | "assistant";
  timestamp: string;
  isStreaming?: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref for the main chat container
  const scrollableAreaRef = useRef<HTMLDivElement>(null); // Ref for the scrollable area

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollableAreaRef.current) {
        scrollableAreaRef.current.scrollTop += e.deltaY;
        e.preventDefault(); // Prevent default scrolling
        e.stopPropagation(); // Stop event bubbling
      }
    };

    const currentChatContainer = chatContainerRef.current; // Store in a variable

    if (isOpen && currentChatContainer) {
      currentChatContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (currentChatContainer) {
        currentChatContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    const assistantMessage: Message = {
      content: "",
      sender: "assistant",
      timestamp: new Date().toISOString(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage.sender === "assistant") {
              lastMessage.content = accumulatedContent;
              lastMessage.isStreaming = false;
            }
            return newMessages;
          });
          break;
        }

        const chunk = decoder.decode(value);
        accumulatedContent += chunk;

        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.sender === "assistant") {
            lastMessage.content = accumulatedContent;
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage.sender === "assistant") {
          lastMessage.content =
            "Sorry, I encountered an error. Please try again.";
          lastMessage.isStreaming = false;
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const parseMessage = (content: string): React.ReactNode[] => {
    // First split by newlines to handle paragraphs
    const paragraphs = content.split(/\n+/);

    return paragraphs.map((paragraph, pIndex) => {
      // Split content into parts: URLs, email addresses, and regular text
      const parts = paragraph.split(
        /(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g
      );

      const parsedParts = parts
        .map((part, index) => {
          // Handle URLs
          if (part.match(/^https?:\/\/[^\s]+$/)) {
            const cleanedLink = part.endsWith(".") ? part.slice(0, -1) : part;
            const displayText = cleanedLink
              .replace(/^https?:\/\/(www\.)?/, "") // Remove http(s):// and www.
              .replace(/\/$/, ""); // Remove trailing slash
            return (
              <div key={`${pIndex}-${index}`} className="py-1">
                <Link
                  href={cleanedLink}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="underline underline-offset-4 group-hover:text-blue-300">
                    {displayText}
                  </span>
                </Link>
              </div>
            );
          }
          // Handle email addresses
          else if (
            part.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)
          ) {
            return (
              <div key={`${pIndex}-${index}`} className="py-1">
                <Link
                  href={`mailto:${part}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="underline underline-offset-4 group-hover:text-blue-300">
                    {part}
                  </span>
                </Link>
              </div>
            );
          }
          // Handle bullet points
          else if (part.trim().match(/^[-•*]\s/)) {
            return (
              <div
                key={`${pIndex}-${index}`}
                className="flex items-start space-x-2 py-1 ml-4"
              >
                <span className="shrink-0">•</span>
                <span className="inline-block whitespace-normal">
                  {part.trim().replace(/^[-•*]\s/, "")}
                </span>
              </div>
            );
          }
          // Handle regular text
          else if (part.trim()) {
            return (
              <span
                key={`${pIndex}-${index}`}
                className="inline-block whitespace-normal"
              >
                {part}
              </span>
            );
          }
          return null;
        })
        .filter(Boolean);

      // Wrap each paragraph in a div with proper spacing
      return (
        <div key={pIndex} className="mb-3 last:mb-0">
          {parsedParts}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 sm:bottom-5 right-4 p-4 rounded-full bg-[#0E1016] text-[#e4ded7] shadow-lg hover:bg-[#212531] transition-all duration-300 ease-in-out transform hover:scale-110 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <FaRobot size={24} />
      </button>

      <div
        ref={chatContainerRef}
        className={`fixed transition-all duration-300 ease-in-out transform flex flex-col ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } ${
          isFullScreen
            ? "top-0 left-0 w-full h-full m-0 rounded-none"
            : "bottom-16 right-4 w-[90%] max-w-[400px] h-[470px] rounded-2xl"
        } bg-[#0A0C12] shadow-2xl`}
      >
        <div
          className={`flex flex-col w-full h-full ${
            isFullScreen ? "max-w-3xl mx-auto" : ""
          }`}
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#212531] bg-[#0A0C12] rounded-t-2xl shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-[#212531] rounded-lg">
                <FaRobot className="text-[#e4ded7]" size={16} />
              </div>
              <h3 className="font-semibold text-base text-[#e4ded7]">
                AI Assistant
              </h3>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-1.5 rounded-lg hover:bg-[#212531] text-[#e4ded7] hover:text-white transition-colors duration-200"
              >
                {isFullScreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsFullScreen(false);
                }}
                className="p-1.5 rounded-lg hover:bg-[#212531] text-[#e4ded7] hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollableAreaRef}
            className="overflow-y-auto p-4 space-y-4 bg-[#0A0C12] scrollbar-thin scrollbar-track-[#0A0C12] scrollbar-thumb-[#212531] flex-1"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] w-fit p-4 rounded-2xl shadow-md transition-all duration-200 ${
                    message.sender === "user"
                      ? "bg-[#212531] text-[#e4ded7] rounded-br-sm"
                      : "bg-[#1a1f2e] text-[#e4ded7] rounded-bl-sm"
                  }`}
                >
                  <div className="whitespace-normal break-words">
                    {message.isStreaming && message.content === "" ? (
                      <div className="flex space-x-2 items-center">
                        <div className="w-2 h-2 bg-[#e4ded7] rounded-full animate-pulse" />
                        <div
                          className="w-2 h-2 bg-[#e4ded7] rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="w-2 h-2 bg-[#e4ded7] rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    ) : (
                      parseMessage(message.content)
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-[#212531] p-3 bg-[#0A0C12] rounded-b-2xl mt-auto shrink-0"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-xl bg-[#212531] text-[#e4ded7] placeholder-[#9ca3af] text-sm focus:outline-none focus:ring-2 focus:ring-[#e4ded7]"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-[#212531] text-[#e4ded7] rounded-xl hover:bg-[#2a2f3d] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
