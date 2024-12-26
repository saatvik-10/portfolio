import Skills from './Skills';

const SkillsSection = () => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-5 gap-8'>
      <Skills name='TypeScript' img='/skills/typescript.png' />
    </div>
  );
};

export default SkillsSection;
