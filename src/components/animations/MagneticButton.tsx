"use client";

import React, { ReactNode, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { springConfig } from "@/lib/animations";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: keyof React.JSX.IntrinsicElements;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
}

const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  onClick,
  href,
  target,
  disabled = false,
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    // Limit movement to prevent overflow
    const maxMovement = 15;
    const limitedX = Math.max(-maxMovement, Math.min(maxMovement, deltaX));
    const limitedY = Math.max(-maxMovement, Math.min(maxMovement, deltaY));

    x.set(limitedX);
    y.set(limitedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComponent = motion[
    as as keyof typeof motion
  ] as React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

  const baseProps = {
    ref,
    className: `${className} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`,
    style: {
      x: springX,
      y: springY,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
    ...props,
  };

  if (as === "a" && href) {
    return (
      <MotionComponent {...baseProps} href={href} target={target}>
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      {...baseProps}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </MotionComponent>
  );
};

export default MagneticButton;
