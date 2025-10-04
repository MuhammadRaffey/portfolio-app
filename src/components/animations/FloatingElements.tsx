"use client";

import { motion } from "framer-motion";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({
  count = 6,
  className = "",
}: FloatingElementsProps) => {
  const elements = Array.from({ length: count }, (_, i) => i);

  const getRandomDelay = () => Math.random() * 2;
  const getRandomSize = () => Math.random() * 60 + 40; // Reduced max size
  const getRandomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`, // Keep away from edges
  });

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {elements.map((index) => {
        const size = getRandomSize();
        const position = getRandomPosition();

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl"
            style={{
              width: size,
              height: size,
              ...position,
            }}
            animate="floating"
            variants={{
              floating: {
                y: [0, -6, 0], // Reduced movement to stay in bounds
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: getRandomDelay(),
                },
              },
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
