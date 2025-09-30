"use client";

import React, { ReactNode, forwardRef } from "react";
import { motion, MotionProps, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedElementProps extends MotionProps {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
  amount?: number;
}

const AnimatedElement = forwardRef<HTMLElement, AnimatedElementProps>(
  (
    {
      children,
      variant = fadeInUp,
      delay = 0,
      duration,
      className,
      as = "div",
      once = true,
      amount = 0.1,
      ...props
    },
    ref
  ) => {
    const MotionComponent = motion[
      as as keyof typeof motion
    ] as React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

    const customVariant: Variants = {
      hidden: variant.hidden,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: duration || 0.8,
          delay,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },
    };

    return (
      <MotionComponent
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={customVariant}
        className={className}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

AnimatedElement.displayName = "AnimatedElement";

export default AnimatedElement;
