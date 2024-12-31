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
      href: '#',
    },

    {
      title: 'Projects',
      icon: <IconComponents className='h-full w-full text-zinc-300' />,
      href: '#',
    },
    {
      title: 'Skills',
      icon: <IconGitBranch className='h-full w-full text-zinc-300' />,
      href: '#',
    },
    {
      title: 'Services',
      icon: <IconDevicesCheck className='h-full w-full text-zinc-300' />,
      href: '#',
    },

    {
      title: 'Testimonials',
      icon: <IconMessageStar className='h-full w-full text-zinc-300' />,
      href: '#',
    },
    {
      title: 'Contact Me',
      icon: <IconAddressBook className='h-full w-full text-zinc-300' />,
      href: '#',
    },
  ];
  return (
    <div className='flex items-start py-20 justify-center w-full'>
      <FloatingDock mobileClassName='translate-y-20' items={links} />
    </div>
  );
}
