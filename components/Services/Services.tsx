import { HoverEffect } from '../ui/card-hover-effect';

export function ServicesCard() {
  return (
    <div className='w-5xl mx-auto'>
      <HoverEffect items={Services} />
    </div>
  );
}
export const Services = [
  {
    img: '/services/1.jpeg',
    title: 'Full-Stack Development',
    description:
      'Seamlessly bring your ideas to life with end-to-end development solutions. From robust backends to dynamic frontends, I create scalable and responsive web applications tailored to your needs.',
    link: '#1',
  },
  {
    img: '/services/2.jpeg',
    title: 'Frontend Development',
    description:
      'Crafting visually appealing and user-friendly interfaces. I focus on delivering responsive designs and intuitive user experiences using the latest web technologies.',
    link: '#2',
  },
  {
    img: '/services/4.jpeg',
    title: 'Backend Development',
    description:
      'Building the backbone of your application with secure, scalable, and efficient server-side solutions. Expertise in database management, API development, and server architecture.',
    link: '#3',
  },
];
