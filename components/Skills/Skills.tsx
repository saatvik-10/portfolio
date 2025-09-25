'use client';
import React, { useState, useEffect } from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import IconCloud from '@/components/ui/icon-cloud';
import { SkillsList } from '@/data/SkillsList';

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='relative flex md:size-96 max-w-lg items-center justify-center overflow-hidden'>
          <IconCloud
            imageArray={[
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
              '/skills/golang.png',
              '/skills/aws.png',
              '/skills/drizzle.png',
              '/skills/rust.png',
              '/skills/sol.svg',
            ]}
          />
        </div>
        <div className='flex flex-col justify-center text-center text-zinc-300'>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-8 place-content-center'>
            {SkillsList.map((skill, index) => (
              <BackgroundGradient
                className='rounded-[22px] bg-neutral-800 px-3 py-1 cursor-pointer'
                key={`skill-${index}`}
              >
                <li>{skill.name}</li>
              </BackgroundGradient>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
