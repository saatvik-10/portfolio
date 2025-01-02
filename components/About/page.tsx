import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import Image from 'next/image';

const fwords = ['WEB DEVELOPER', 'CREATIVE DESIGNER', 'PROBLEM SOLVER'];

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 text-emerald-500 gap-10 pt-8 pb-14 text-center md:text-start'>
        <div className='flex flex-col items-start gap-y-2'>
          <h1 className='text-center md:text-start text-6xl md:text-7xl font-bold'>
            Saatvik Madan
          </h1>
          <span className='text-3xl '>
            <FlipWords
              words={fwords}
              className='px-2 text-zinc-600 font-bold'
            />
            <p className='text-6xl pt-14 text-zinc-300 '>
              Turning Your Ideas Into Impactful Designs
            </p>
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            alt=''
            src='/pfp.png'
            width='300'
            height='300'
            className='drop-shadow-[0.10px_-0.25px_0.5px_rgba(16,185,129,1)]'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
