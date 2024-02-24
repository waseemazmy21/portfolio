import React from 'react';
import movies from '@/public/movies.png';
import massimo from '@/public/massimo.png';
import budget from '@/public/budget.png';
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
    title: 'Massimo',
    description:
      'Developed a responsive restaurant web application, ensuring a polished and user-friendly interface for a seamless and enjoyable customer experience. Implemented an intuitive Shopping Cart System',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: massimo,
    githubRepo: 'https://github.com/waseemazmy21/massimo_resturant',
    live: 'https://waseemazmy21.github.io/massimo_resturant/',
  },
  {
    title: 'Movie Watch List App',
    description:
      'A responsive web application for managing your movie watch list and keeping track of watched movies. Integrates with the OMDb API to fetch movie details.',
    tags: ['React', 'Tailwind CSS', 'Daisy UI', 'OMDb API'],
    imageUrl: movies,
    githubRepo: 'https://github.com/waseemazmy21/movie-watchlist-app',
    live: 'https://waseemazmy21.github.io/movie-watchlist-app/',
  },
  {
    title: 'Budget app',
    description:
      'Created a user-friendly application enabling users to efficiently manage their budgets by adding, tracking, and categorizing expenses within specified budget categories',
    tags: ['React', 'React Bootstrap'],
    imageUrl: budget,
    githubRepo: 'https://github.com/waseemazmy21/budget-app',
    live: 'https://waseemazmy21.github.io/budget-app/',
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
