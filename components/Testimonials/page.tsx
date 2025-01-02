import { Testimonials } from './Testimonials';

const TestimonialsSection = () => {
  return (
    <section id='testimonials'>
      <main className=''>
      <span className='text-emerald-500 md:mb-16 text-6xl text-center md:text-start md:text-7xl font-bold'>
        Testimonials
      </span>
        <div>
          <Testimonials />
        </div>
      </main>
    </section>
  );
};

export default TestimonialsSection;
