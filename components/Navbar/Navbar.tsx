import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconAddressBook,
  IconComponents,
  IconDevicesCheck,
  IconGitBranch,
  IconHome,
  IconMessageStar,
} from '@tabler/icons-react';

export function Navbar() {
  const links = [
    {
      title: 'About',
      icon: <IconHome className='h-full w-full text-zinc-300' />,
      href: '#about',
    },

    {
      title: 'Projects',
      icon: <IconComponents className='h-full w-full text-zinc-300' />,
      href: '#projects',
    },
    {
      title: 'Skills',
      icon: <IconGitBranch className='h-full w-full text-zinc-300' />,
      href: '#skills',
    },
    {
      title: 'Services',
      icon: <IconDevicesCheck className='h-full w-full text-zinc-300' />,
      href: '#services',
    },

    {
      title: 'Testimonials',
      icon: <IconMessageStar className='h-full w-full text-zinc-300' />,
      href: '#testimonials',
    },
    {
      title: 'Contact Me',
      icon: <IconAddressBook className='h-full w-full text-zinc-300' />,
      href: '#contactMe',
    },
  ];
  return (
    <div className='flex items-start py-20 justify-center w-full'>
      <FloatingDock mobileClassName='translate-y-20' items={links} />
    </div>
  );
}
