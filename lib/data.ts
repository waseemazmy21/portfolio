import React from "react";
import movies from "@/public/movies.png";
import massimo from "@/public/massimo.png";
import budget from "@/public/budget.png";
import herafy from "@/public/herafy.jpg";
import amlak from "@/public/amlak.png";
import medsync from "@/public/medsync.png";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import { Project } from "@/lib/types";

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "Amlak",
    description:
      "Developed a full-stack Real State platform with secure authentication, property listings, and user management.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Shadcn", "TS"],
    imageUrl: amlak,
    githubRepo_1: "https://github.com/waseemazmy21/amlak-client",
    githubRepo_2: "https://github.com/waseemazmy21/amlak-backend",
    live: "https://amlak-client.vercel.app/home",
  },
  {
    title: "MedSync",
    description:
      "Backend for hopsital management system with secure authentication, role-based access control, appointments, notifications, and user management.",
    tags: ["Node.js", "NestJS", "Express.js", "MongoDB", "Socket.io", "TypeScript", "JWT", "Swagger API Docs"],
    imageUrl: medsync,
    githubRepo_1: "https://github.com/waseemazmy21/medSync-backend",
    live: "https://medsync-backend-production.up.railway.app/api",
  },
  {
    title: "Herafy",
    description:
      "Developed a full-stack freelance platform connecting clients and craftsmen with secure authentication, job, proposals, and user management.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Shadcn", "TS"],
    imageUrl: herafy,
    githubRepo_1: "https://github.com/waseemazmy21/herafy-client",
    githubRepo_2: "https://github.com/waseemazmy21/herafy-back-end",
  },
  {
    title: "Massimo",
    description:
      "Developed a responsive restaurant web app with a polished interface and an intuitive shopping cart system for a seamless user experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: massimo,
    githubRepo_1: "https://github.com/waseemazmy21/massimo_resturant",
    live: "https://waseemazmy21.github.io/massimo_resturant/",
  },
  {
    title: "Movie Watch List App",
    description:
      "A responsive web application for managing your movie watch list and keeping track of watched movies. Integrates with the OMDb API to fetch movie details.",
    tags: ["React", "Tailwind CSS", "Daisy UI", "OMDb API"],
    imageUrl: movies,
    githubRepo_1: "https://github.com/waseemazmy21/movie-watchlist-app",
    live: "https://waseemazmy21.github.io/movie-watchlist-app/",
  },
  {
    title: "Budget app",
    description:
      "Created a user-friendly application enabling users to efficiently manage their budgets by adding, tracking, and categorizing expenses within specified budget categories",
    tags: ["React", "React Bootstrap"],
    imageUrl: budget,
    githubRepo_1: "https://github.com/waseemazmy21/budget-app",
    live: "https://waseemazmy21.github.io/budget-app/",
  },
];

export const skillsData = [
  "c++",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "next.js",
  "Node.js",
  "NestJS",
  "Express.js",
  "MongoDB",
  "SQL",
  "AWS",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer Trainee",
    location: "ITI, Sohag, Egypt",
    description:
      "Hands-on training in full-stack web development, covering front-end and back-end technologies, databases, version control, and deployment. Gained practical experience through projects and collaborative work.",
    date: "Feb 2025 – Aug 2025",
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Android Developer Intern",
    location: "Coptic Orphans, Cairo, Egypt",
    description:
      "Contributed to the development of Android applications using Jetpack Compose and Kotlin. Implemented Clean Architecture and MVVM patterns, integrated REST APIs with Retrofit, and wrote unit and UI tests to ensure quality and scalability.",
    date: "Jul 2024 – Aug 2024",
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Front-End Freelance Developer",
    location: "Upwork (Remote)",
    description:
      "Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript. Built dynamic components with React.js, collaborated with clients, and delivered high-quality results aligned with client requirements and deadlines.",
    date: "Aug 2023 – Present",
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Bachelor's Degree in Computer Science",
    location: "Sohag University",
    description:
      "Graduated with a Bachelor's Degree in Computer Science, specializing in Artificial Intelligence, with a GPA of 3.53/4. Built a strong foundation in algorithms, data structures, and programming, complemented by hands-on experience through academic and personal projects.",
    date: "Oct 2020 - Jul 2024",
    icon: React.createElement(LuGraduationCap),
  },
] as const;
