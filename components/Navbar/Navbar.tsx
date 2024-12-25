import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';

export function Navbar() {
  const links = [
    {
      title: 'About',
      icon: (
        <IconHome className='h-full w-full text-neutral-400' />
      ),
      href: '#',
    },

    {
      title: 'Projects',
      icon: (
        <IconTerminal2 className='h-full w-full text-neutral-400' />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <IconNewSection className='h-full w-full text-neutral-400' />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <IconExchange className='h-full w-full text-neutral-400' />
      ),
      href: '#',
    },

    {
      title: 'Twitter',
      icon: (
        <IconBrandX className='h-full w-full text-neutral-400' />
      ),
      href: '#',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className='h-full w-full text-neutral-400' />
      ),
      href: '#',
    },
  ];
  return (
    <div className='flex items-start py-20 justify-center w-full'>
      <FloatingDock mobileClassName='translate-y-20' items={links} />
    </div>
  );
}
