'use client';

import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div
      className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    ></motion.div>
  );
};

export default SectionDivider;
