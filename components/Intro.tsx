'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/contexts/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/avatar.png"
              alt=""
              quality="95"
              priority={true}
              width={192}
              height={192}
              className="h-24 w-24 rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-10 font-bold sm:text-4xl">Hi, I'm Waseem</h1>
        <span className="block">
          I'm an undergraduate student studying CS, and I have a passion for
          software development and problem-solving
        </span>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection('contact');
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group btn bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-950 "
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group btn bg-white  dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full borderBlack"
          href="/resume.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="btn bg-white dark:bg-white/10 p-4 text-gray-700 hover:text-gray-950  dark:hover:text-white/80   dark:text-white/60 flex items-center gap-2 rounded-full  borderBlack"
          href="https://www.linkedin.com/in/waseemazmy/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="btn bg-white  dark:bg-white/10 p-4 text-gray-700  dark:text-white/60 flex items-center gap-2 text-[1.35rem] rounded-full hover:text-gray-950 dark:hover:text-white/80 borderBlack"
          href="https://github.com/waseemazmy21"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
