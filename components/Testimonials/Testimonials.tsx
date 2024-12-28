import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Working with Saatvik has been an absolute pleasure. He not only have strong technical skills but also have an excellent ability to understand complex requirements and turn them into functional, elegant solutions.',
      name: 'Chirag Bhalotia',
      src: '/testimonials/test1.png',
    },
    {
      id: 2,
      quote:
        'I had the chance to collaborate on several projects with Saatvik, and I was always impressed with their professionalism, attention to detail, and ability to meet deadlines. His work is consistently top-notch, and he is an essential part of any team.',
      name: 'Aditya Raj',
      src: '/testimonials/test2.jpeg',
    },
    {
      id: 3,
      quote:
        'I rely heavily on the functionality of the websites and apps I work with. Saatvik has been invaluable in ensuring that the tech side of our campaigns always runs smoothly. His expertise and quick solutions have made a huge difference in our work!',
      name: 'Harsh Malu',
      src: '/testimonials/test3.jpeg',
    },
    {
      id: 4,
      quote:
        'I have worked alongside Saatvik on a number of projects, and their ability to integrate design with functionality is outstanding. His problem-solving skills and innovative approach to development always lead to the best outcomes. Truly a pleasure to work with!',
      name: 'Nevin Abraham',
      src: '/testimonials/test4.jpeg',
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
