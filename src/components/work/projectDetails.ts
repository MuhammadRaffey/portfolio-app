import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiZig,
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
    name: "E-Commerce Store",
    description:
      "Developed an E-Commerce store with Next.js, Tailwind CSS, Framer Motion and TypeScript.",
    technologies: [SiTypescript, SiReact, SiTailwindcss, SiFramer],
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
    id: 1,
    name: "Blog App",
    description:
      "Developed a simple Blog App with Sanity.io, Next.js and Tailwind CSS.",
    technologies: [SiTypescript, SiReact, SiTailwindcss],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Sanity.io"],
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
