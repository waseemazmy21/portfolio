'use client';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const { ref } = useSectionInView('projects', .3);

  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeading>my projects</SectionHeading>
      <div>
        {projectsData.map((projectData) => (
          <Project key={projectData.title} {...projectData} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
