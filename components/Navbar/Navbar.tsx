import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconAddressBook,
  IconComponents,
  IconDevicesCheck,
  IconDownload,
  IconGitBranch,
  IconHome,
  IconMessageStar,
} from '@tabler/icons-react';
import { Button } from '../ui/button';
import Resume from '../Asset/Resume';

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
      title: 'Me',
      icon: <IconDevicesCheck className='h-full w-full text-zinc-300' />,
      href: '#me',
    },

    {
      title: 'Testimonials',
      icon: <IconMessageStar className='h-full w-full text-zinc-300' />,
      href: '#testimonials',
    },
    {
      title: 'Contact Me',
      icon: <IconAddressBook className='h-full w-full text-zinc-300' />,
      href: '#contact',
    },
  ];
  return (
    <div className='flex items-start md:py-20 md:justify-center w-full'>
      <FloatingDock
        mobileClassName='translate-y-0'
        items={links}
        desktopClassName='z-[100]'
      />
      <Resume className='z-50 hidden md:flex fixed my-14 hover:bg-emerald-500/20' />
    </div>
  );
}
