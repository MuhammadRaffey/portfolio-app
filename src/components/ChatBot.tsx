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
    const parts = content.split(/(https?:\/\/[^\s]+)/g);
    return parts.map((part, index) => {
      if (part.match(/^https?:\/\/[^\s]+$/)) {
        const cleanedLink = part.endsWith(".") ? part.slice(0, -1) : part;
        return (
          <Link
            key={index}
            href={cleanedLink}
            target="_blank"
            className="text-blue-400 underline hover:text-blue-300"
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {cleanedLink}
          </Link>
        );
      } else {
        return (
          <span key={index} style={{ opacity: 1 }}>
            {part}
          </span>
        );
      }
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
        className={`fixed bottom-16 right-4 w-[90%] max-w-[360px] bg-[#0A0C12] rounded-2xl shadow-2xl transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#212531] bg-[#0A0C12] rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#212531] rounded-lg">
              <FaRobot className="text-[#e4ded7]" size={20} />
            </div>
            <h3 className="font-semibold text-lg text-[#e4ded7]">
              AI Assistant
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-[#212531] text-[#e4ded7] hover:text-white transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        <div
          ref={scrollableAreaRef}
          className="h-[60vh] max-h-[500px] min-h-[300px] overflow-y-auto p-6 space-y-6 bg-[#0A0C12] scrollbar-thin scrollbar-track-[#0A0C12] scrollbar-thumb-[#212531]"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl shadow-md transition-all duration-200 ${
                  message.sender === "user"
                    ? "bg-[#212531] text-[#e4ded7] rounded-br-sm"
                    : "bg-[#1a1f2e] text-[#e4ded7] rounded-bl-sm"
                }`}
              >
                <div className="break-all">
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
          className="border-t border-[#212531] p-4 bg-[#0A0C12] rounded-b-2xl"
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-xl bg-[#212531] text-[#e4ded7] placeholder-[#9ca3af] "
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-3 bg-[#212531] text-[#e4ded7] rounded-xl hover:bg-[#2a2f3d] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
