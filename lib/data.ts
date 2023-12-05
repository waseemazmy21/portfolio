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
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Git',
  'Tailwind',
  'Framer Motion',
] as const;

export const experiencesData = [
  {
    title: 'Bachelor degree in Computer Science',
    location: 'Sohag University',
    description: '',
    date: '2020-2024 (Expexted)',
    icon: React.createElement(LuGraduationCap),
  },
] as const;
