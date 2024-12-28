'use client';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';
import Image from 'next/image';

interface ProjectsProps {
  title: string;
  href: string;
  name: string;
  desc: string;
  img: string;
}

export function Projects({ title, href, name, desc, img }: ProjectsProps) {
  return (
    <div className='py-4 w-full flex items-center justify-center'>
  <PinContainer title={title} href={href}>
    <div className='flex basis-full flex-col p-4 tracking-tight text-zinc-100/50 sm:basis-1/2 w-[20rem] h-[20rem]'>
      <h3 className='max-w-xs !pb-2 !m-0 font-bold text-base text-zinc-300'>
        {name}
      </h3>
      <p className='text-base !p-0 font-normal mb-4 text-zinc-500'>{desc}</p>
      <div>
        <Image
          alt=''
          src={img}
          height='200'
          width='200'
          className='w-full'
        />
      </div>
    </div>
  </PinContainer>
</div>
  )}