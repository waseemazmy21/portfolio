import React from 'react';
import movies from '@/public/movies.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'home',
    hash: '#home',
  },
  {
    name: 'about',
    hash: '#about',
  },
  {
    name: 'projects',
    hash: '#projects',
  },
  {
    name: 'skills',
    hash: '#skills',
  },
  {
    name: 'experience',
    hash: '#experience',
  },
  {
    name: 'contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Movie Watch List App',
    description:
      'A responsive web application for managing your movie watch list and keeping track of watched movies. Integrates with the OMDb API to fetch movie details.',
    tags: ['React', 'Tailwind CSS', 'Daisy UI', 'OMDb API'],
    imageUrl: movies,
  },

  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'c++',
  'JavaScript',
  'TypeScript',
  'Python',
  'React.js',
  'next.js',
  'Node.js',
  'HTML',
  'CSS',
  'Git',
  'Tailwind',
  'Framer Motion',
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree in Computer Science",
    location: 'Sohag University',
    description:
      'Currently pursuing a education in Computer Science at Sohag University, with an expected graduation date in 2024. Engaging in a diverse range of courses and projects to build a strong foundation in the field.',
    date: '2020-2024 (Expected)',
    icon: React.createElement(LuGraduationCap),
  },
] as const;
