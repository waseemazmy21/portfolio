'use client';

import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('about');

  return (
    <motion.section
      ref={ref}
      id='about'
      className=' max-w-[45rem] mb-28 sm:mb-40 scroll-mt-28 text-center leading-8'
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
