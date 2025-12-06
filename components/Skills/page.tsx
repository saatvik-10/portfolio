import Skills from './Skills';

const SkillsSection = () => {
  return (
    <section id='skills'>
      <main className='py-20'>
        <div className='text-emerald-500 md:mb-16 text-5xl md:text-7xl text-center md:text-start font-bold'>
          Skills
        </div>
        <div>
          <Skills />
        </div>
      </main>
    </section>
  );
};

export default SkillsSection;
