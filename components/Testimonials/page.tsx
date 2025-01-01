import { Testimonials } from './Testimonials';

const TestimonialsSection = () => {
  return (
    <section id='testimonials'>
      <main className='py-20'>
        <span className='text-emerald-500 mb-16 text-7xl font-bold'>
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
