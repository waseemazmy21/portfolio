'use client';

import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id='about'
      className=' max-w-[45rem] mb-28 sm:mb-40 scroll-mt-28 text-center leading-8'
      // initial={{ opacity: 0, y: 100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 1 }}
    >
      <SectionHeading>about me</SectionHeading>
      <p>
        Hello, I'm Waseem, a final-year Computer Science student. My academic
        journey has been focused on the fascinating world of software
        development, and currently, I'm delving into the realm of web
        development. Exploring React and building projects have become my recent
        passions. Excitingly, I've also begun venturing into the dynamic space
        of freelance work, eager to contribute my skills and creativity to
        real-world projects.
      </p>
    </motion.section>
  );
};

export default About;
