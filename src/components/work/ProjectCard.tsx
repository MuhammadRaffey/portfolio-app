import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../app/animations/AnimatedTitle";
import AnimatedBody from "../../app/animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";
const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  techNames,
  techLinks,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      className="relative z-10 h-[500px] w-full items-stretch justify-center bg-cover bg-center bg-no-repeat py-0 sm:h-[600px] md:h-[600px] lg:h-[500px]"
      initial="initial"
      animate="animate"
    >
      <Container
        width="100%"
        height="100%"
        borderRadius={25}
        color="rgba(255, 255, 255, 0.1)"
        blur={false}
        grain={true}
        top="0px"
        left="0px"
        angle={0}
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className={`absolute -bottom-2 w-[65%] sm:w-[75%] md:w-[55%] lg:max-w-[50%] ${
            id % 2 === 0 ? "right-0" : "left-0"
          }`}
          priority={true}
        />
        <div
          className={`absolute top-0 text-[#0E1016] ${
            id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
          } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
        >
          {available ? (
            <>
              <Link
                href={github}
                target="_blank"
                aria-label="Open GitHub Repository"
                className="w-[45px] rounded-full bg-white p-3 text-[20px] md:w-[60px] md:p-4 md:text-[24px]"
                data-blobity
                data-blobity-radius="35"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              >
                <SiGithub />
              </Link>
              <Link
                href={demo}
                target="_blank"
                aria-label="Open Live Demo"
                className="w-[45px] rounded-full bg-white p-3 text-[20px] md:w-[60px] md:p-4 md:text-[24px]"
                data-blobity
                data-blobity-radius="35"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              >
                <BsLink45Deg />
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div
          className={`absolute text-white ${
            !(id % 2 === 0)
              ? "right-0 top-28 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-40 lg:mr-4"
              : "left-10 top-28 ml-0 md:mr-12 lg:top-40 lg:ml-4"
          } mb-8 md:mb-12 lg:mb-10`}
        >
          <AnimatedTitle
            text={name}
            className="max-w-[90%] text-[36px] leading-tight text-white md:text-[42px] lg:max-w-[450px] lg:text-[48px]"
            wordSpace="mr-[0.25em]"
            charSpace="-mr-[0.01em]"
          />
          <AnimatedBody
            text={description}
            className="mt-4 w-[90%] max-w-[457px] text-[14px] font-medium text-[#95979D] md:text-[16px]"
          />
          <div className="mt-6 mb-6 grid grid-cols-5 gap-4 md:mt-8 md:mb-8">
            {technologies.map((IconComponent, id) => (
              <div key={id} className="relative">
                <Link
                  href={techLinks[id]}
                  target="_blank"
                  aria-label={`Learn more about ${techNames[id]}`}
                  className="w-[20px] text-[18px] md:w-[24px] md:text-[22px]"
                  title={techLinks[id]}
                  data-blobity-tooltip={techNames[id]}
                  data-blobity-magnetic="false"
                >
                  <IconComponent />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectCard;
