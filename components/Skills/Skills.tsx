'use client';
import React from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import IconCloud from '@/components/ui/icon-cloud';
import skills from '@/components/Skills/skills.json';

const Skills = () => {
  return (
    <section>
      <span>My SKills</span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='relative flex md:size-96 max-w-lg items-center justify-center overflow-hidden'>
          <IconCloud
            imageArray={[
              '/skills/ex.png',
              '/skills/typescript.png',
              '/skills/hono.png',
              '/skills/java.png',
              '/skills/mongo.png',
              '/skills/nextjs.png',
              '/skills/postgres.png',
              '/skills/prisma.png',
              '/skills/react.png',
              '/skills/tailwind.png',
              '/skills/js.png',
              '/skills/nodejs.png',
            ]}
          />
        </div>
        <div className='flex flex-col justify-center text-center text-zinc-300'>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-8 place-content-center'>
            {skills.map((skill, index) => (
              <BackgroundGradient className="rounded-[22px] bg-neutral-800 px-3 py-1" key={index}>
                <li key={index}>{skill.name}</li>
              </BackgroundGradient>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
