import React from 'react';
import AboutSection from '@/components/About/page';
import ProjectsSection from '@/components/Projects/page';
import ServicesSection from '@/components/Services/page';
import SkillsSection from '@/components/Skills/page';
import TestimonialsSection from '@/components/Testimonials/page';
import ContactSection from '@/components/Contact/page';
import Resume from '@/components/Asset/Resume';

export default function Home() {
  return (
    <div className='relative'>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Resume className='fixed md:hidden bottom-3 right-3 z-50' />
    </div>
  );
}
