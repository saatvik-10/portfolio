import AboutSection from '@/components/About/page';
import ProjectsSection from '@/components/Projects/page';
import ServicesSection from '@/components/Services/page';
import SkillsSection from '@/components/Skills/page';

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
    </div>
  );
}
