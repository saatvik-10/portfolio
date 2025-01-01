import Skills from './Skills';

const SkillsSection = () => {
  return (
    <section id='skills'>
      <main className='py-20'>
        <span className='text-emerald-500 mb-16 text-7xl font-bold'>
          My Skills
        </span>
        <div>
          <Skills />
        </div>
      </main>
    </section>
  );
};

export default SkillsSection;
