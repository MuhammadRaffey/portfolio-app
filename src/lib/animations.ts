import { Variants } from "framer-motion";

// Common easing functions for smooth animations
export const easings = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.6, -0.05, 0.01, 0.99],
  bounce: [0.68, -0.6, 0.32, 1.6],
} as const;

// Fade animations
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

export const scaleInCenter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.bounce,
    },
  },
};

// Rotation animations
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.spring,
    },
  },
};

// Container animations for stagger effects
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Text animations
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

// Hover animations
export const hoverScale: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

export const hoverRotate: Variants = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

export const hoverGlow: Variants = {
  rest: {
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
  },
  hover: {
    boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)",
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

// Floating animation
export const float: Variants = {
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easings.easeInOut,
    },
  },
};

export const floatSlow: Variants = {
  floating: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easings.easeInOut,
    },
  },
};

export const floatFast: Variants = {
  floating: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easings.easeInOut,
    },
  },
};

// Page transitions
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easings.easeIn,
    },
  },
};

// Card animations
export const cardHover: Variants = {
  rest: {
    scale: 1,
    rotateY: 0,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.03,
    rotateY: 2,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

// Magnetic effect for buttons
export const magnetic = {
  x: 0,
  y: 0,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
};

// Custom spring configurations
export const springConfig = {
  type: "spring",
  stiffness: 260,
  damping: 20,
} as const;

export const springConfigSoft = {
  type: "spring",
  stiffness: 100,
  damping: 25,
} as const;

export const springConfigBouncy = {
  type: "spring",
  stiffness: 400,
  damping: 10,
} as const;
