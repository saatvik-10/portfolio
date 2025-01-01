import { ServicesCard } from './Services';

const ServicesSection = () => {
  return (
    <section id='services'>
      <main className='py-20'>
        <span className='text-emerald-500 mb-16 text-7xl font-bold'>
          My Services
        </span>
        <div>
          <ServicesCard />
        </div>
      </main>
    </section>
  );
};

export default ServicesSection;
