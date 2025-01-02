import { ServicesCard } from './Services';

const ServicesSection = () => {
  return (
    <section id='services'>
      <main className='py-20'>
      <div className='text-emerald-500 md:mb-16 text-6xl text-center md:text-start md:text-7xl font-bold'>
        My Services
      </div>
        <div>
          <ServicesCard />
        </div>
      </main>
    </section>
  );
};

export default ServicesSection;
