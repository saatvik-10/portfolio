import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';

const fwords = ['WEB DEVELOPER', 'CREATIVE DESIGNER', 'PROBLEM SOLVER'];

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 text-emerald-500 gap-10'>
      <div className='flex flex-col items-start gap-y-2'>
        <span className='text-xl'>Yello...</span>
        <h1 className='text-6xl'>Saatvik Here!</h1>
        <span className='text-xl'>
          A passionate
          <FlipWords words={fwords} className='' />
        </span>
        <p className='text-base'>
          Specializing in building interactive web applications. I thrive on
          solving complex problems and delivering user-centric designs that
          leave a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default About;
