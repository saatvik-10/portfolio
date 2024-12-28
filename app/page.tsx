import React from 'react';
import AboutSection from '@/components/About/page';
import ProjectsSection from '@/components/Projects/page';
import ServicesSection from '@/components/Services/page';
import SkillsSection from '@/components/Skills/page';
import TestimonialsSection from '@/components/Testimonials/page';

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
