import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiOpenai,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "AI Interview Buddy",
    description:
      "An AI-powered platform for interview practice with real-time feedback. Features industry-specific simulations, speech recognition, and detailed performance analytics.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiOpenai],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "OpenAI"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://openai.com/",
    ],
    github: "https://github.com/MuhammadRaffey/ai-interview-buddy",
    demo: "https://raffeys-ai-interview-buddy.vercel.app/interview",
    image: "/projects/interview.png",
    available: true,
  },
  {
    id: 1,
    name: "IELTS with Asif",
    description:
      "Business showcase website for a British Council certified IELTS trainer. Features service packages, pricing information, student success rates, and contact details to help potential clients learn about available coaching options and get in touch.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    github: "https://github.com/MuhammadRaffey/ielts-with-asif",
    demo: "https://www.ieltswithasif.com/",
    image: "/projects/ielts.png",
    available: true,
  },
  {
    id: 2,
    name: "Mood Shaiari",
    description:
      "An AI-powered Urdu poetry generator that creates verses based on emotions. Select your mood and get beautiful, contextually relevant Urdu poetry instantly.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiOpenai],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "OpenAI"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://openai.com/",
    ],
    github: "https://github.com/MuhammadRaffey/Mood-Shaiari",
    demo: "https://mood-shaiari.vercel.app/",
    image: "/projects/shaiari.png",
    available: true,
  },
  {
    id: 3,
    name: "E-Commerce Store",
    description:
      "Developed an E-Commerce store with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    github: "https://github.com/MuhammadRaffey/E-Commerce-Web",
    demo: "https://raffeys-e-commerce.vercel.app/",
    image: "/projects/ecom.png",
    available: true,
  },
  {
    id: 4,
    name: "AI Meeting Summarizer",
    description:
      "Real-time meeting transcription and summarization tool that converts speech to text and provides AI-powered meeting summaries. Features live transcription and instant summary generation.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiOpenai],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "OpenAI"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://openai.com/",
    ],
    github: "https://github.com/MuhammadRaffey/ai-meeting-summarizer",
    demo: "https://ai-meeting-summarizer.vercel.app/",
    image: "/projects/summarizer.png",
    available: true,
  },
  {
    id: 5,
    name: "Blog App",
    description:
      "Developed a simple Blog App with Sanity.io, Next.js and Tailwind CSS.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
    ],
    github: "https://github.com/MuhammadRaffey/sanity-blog",
    demo: "https://sanity-blog-ten.vercel.app/",
    image: "/projects/blog.png",
    available: true,
  },
];
