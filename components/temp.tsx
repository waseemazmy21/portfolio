'use client';

import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { type } from 'os';

type projectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: projectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className='max-w-sm md:max-w-xl rounded-lg bg-white shadow-xl flex flex-col md:flex-row-reverse md:even:flex-row gap-4 text-center md:text-left overflow-hidden'>
        <Image
          src={imageUrl}
          alt={`${title} project cover image`}
          className='h-[220px] md:w-1/2 md:h-auto  object-cover rounded-t-xl md:rounded-t-none md:rounded-r-xl '
        />
        <div className='p-5 md:p-8 flex flex-col items-center gap-4 md:w-1/2'>
          {' '}
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className=' text-gray-700 leading-relaxed mb-4'>{description}</p>
          <ul className='flex flex-wrap justify-center gap-2 mb-2'>
            {tags.map((tag, index) => (
              <li
                className=' bg-white shadow-md shadow-black/[.07]  px-3 py-1 borderBlack text-[0.7rem] uppercase tracking-wider rounded-full'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className=' flex gap-2 justify-center '>
            <a
              href=''
              className='btn flex gap-1 items-center bg-white shadow-md shadow-black/[.07]  px-3 py-1 borderBlack rounded-full'
            >
              source
              <FiGithub />
            </a>
            <a
              href=''
              className='btn flex gap-1 items-center bg-white shadow-md shadow-black/[.07]  px-3 py-1 borderBlack rounded-full'
            >
              live
              <HiOutlineExternalLink />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
