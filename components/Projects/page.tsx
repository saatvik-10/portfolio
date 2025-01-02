import { Projects } from '@/components/Projects/Projects';
import { ProjectsList } from '../../data/ProjectsList';

const ProjectsSection = () => {
  return (
    <section id='projects'>
    <main className='flex flex-col py-20'>
      <span className='text-emerald-500 mb-8 md:mb-16 text-6xl text-center md:text-start md:text-7xl font-bold'>
        My Projects
      </span>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {ProjectsList.map((project, index) => (
          <Projects
            key={index}
            title={project.title}
            href={project.href}
            name={project.name}
            desc={project.desc}
            img={project.img}
          />
        ))}
      </div>
    </main>
    </section>
  );
};

export default ProjectsSection;
