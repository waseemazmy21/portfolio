import { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  githubRepo_1?: string;
  githubRepo_2?: string;
  live?: string;
};
