import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import Image from 'next/image';

const fwords = ['WEB DEVELOPER', 'CREATIVE DESIGNER', 'PROBLEM SOLVER'];

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 text-emerald-500 gap-10'>
      <div className='flex flex-col items-start gap-y-2'>
        <span className='text-3xl'>Yello...</span>
        <h1 className='text-7xl font-semibold text-zinc-300'>Saatvik Here!</h1>
        <span className='text-2xl'>
          A passionate
          <FlipWords words={fwords} className='px-2 text-zinc-300 font-bold' />
          <p className='text-base'>
            Specializing in building interactive web applications. I thrive on
            solving complex problems and delivering user-centric designs that
            leave a lasting impression. I enjoy collaborating with teams to
            bring ideas to life, embracing new challenges, and staying updated
            with the latest industry trends. Driven by a commitment to
            excellence, I aim to create digital experiences that are innovative,
            efficient, and impactful.
          </p>
        </span>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          alt=''
          src='/pfp.png'
          width='270'
          height='270'
          className='drop-shadow-[0.10px_-0.25px_0.5px_rgba(16,185,129,1)]'
        />
      </div>
    </div>
  );
};

export default About;
