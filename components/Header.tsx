'use client';

import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { useActiveSectionContext } from '@/contexts/active-section-context';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='fixed top-0 sm:top-7 left-0 right-0 sm:mx-auto sm:w-min z-[999] bg-white sm:rounded-full'
    >
      <ul className='p-2 sm:px-3 sm:py-2 flex items-center justify-center flex-wrap sm:flex-nowrap gap-1 sm:gap-5 text-[0.9rem] font-medium text-gray-500 capitalize'>
        {links.map((link) => (
          <motion.li
            key={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href={link.hash}
              className={`block relative ${
                activeSection == link.name ? 'text-gray-950' : ''
              } hover:text-gray-950 px-2 py-1.5 sm:px-3 sm:py-2`}
            >
              {link.name}
              {activeSection == link.name && (
                <motion.span
                  className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                  layoutId='activeSection'
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.header>
  );
};

export default Header;
