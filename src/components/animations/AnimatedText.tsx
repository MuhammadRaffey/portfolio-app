"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { letterReveal, textReveal } from "@/lib/animations";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
}

const letterStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
};

const AnimatedText = ({
  children,
  className,
  stagger = false,
  delay = 0,
  as = "div",
  once = true,
}: AnimatedTextProps) => {
  const MotionComponent = motion[
    as as keyof typeof motion
  ] as React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

  if (stagger && typeof children === "string") {
    const letters = children.split("");

    return (
      <MotionComponent
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.1 }}
        variants={{
          ...letterStagger,
          visible: {
            transition: {
              staggerChildren: 0.03,
              delayChildren: delay,
            },
          },
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterReveal}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        ...textReveal,
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0, 0, 0.2, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedText;
