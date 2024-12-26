import { Projects } from '@/components/Projects/Projects';

const ProjectsSection = () => {
  return (
    <main className='flex flex-col pt-28 text-7xl'>
      <span className='text-emerald-500 mb-16'>My Projects</span>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Projects
          title='Roomify'
          href='https://roomify.itsaatvik.dev/'
          name='Roomify'
          desc='A Room Booking application'
          img='/roomify.png'
        />
        <Projects
          title='Expense Tracker'
          href='https://expense-tracker.itsaatvik.dev/'
          name='Expense Tracker'
          desc='An Expense Tracker'
          img='/expense.png'
        />
        <Projects
          title='Dashboard'
          href='https://admin-dashboard.itsaatvik.dev/'
          name='Dashboard'
          desc='Admin Dashboard'
          img='/dashboard.png'
        />
      </section>
    </main>
  );
};

export default ProjectsSection;
