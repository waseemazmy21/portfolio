"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("about");

  return (
    <motion.section
      ref={ref}
      id="about"
      className=" max-w-[45rem] mb-28 sm:mb-40 scroll-mt-28 text-center leading-8"
    >
      <SectionHeading>about me</SectionHeading>
      <p>
        I am a recent Computer Science graduate with a strong foundation in
        software development, data structures, and algorithms. I have a passion
        for solving complex challenges by designing scalable and efficient
        solutions. With hands-on experience in building full-stack applications,
        I am eager to contribute to impactful, large-scale projects while
        continuously learning and working with cutting-edge technologies in
        dynamic, collaborative environments.
      </p>
    </motion.section>
  );
};

export default About;
