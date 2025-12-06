import { MeCard } from './Me';

const MeSection = () => {
  return (
    <section id='me'>
      <main className='py-20'>
        <div className='text-emerald-500 md:mb-16 text-5xl text-center md:text-start md:text-7xl font-bold'>
          Me ?
        </div>
        <div>
          <MeCard />
        </div>
      </main>
    </section>
  );
};

export default MeSection;
