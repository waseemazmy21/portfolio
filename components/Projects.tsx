'use client';
import { projectsData } from '@/lib/data';
import Project from './Project';

import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeading>my projects</SectionHeading>
      <div className='flex flex-col gap-y-8'>
        {projectsData.map((projectData) => (
          <Project key={projectData.title} {...projectData} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
