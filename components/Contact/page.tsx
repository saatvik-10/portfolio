'use client';

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import {
  ContactInput,
  contactInputValidator,
} from '@/validators/contact.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { BackgroundGradient } from '../ui/background-gradient';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';

const ContactSection = () => {
  return (
    <main className='py-20'>
      <span className='text-emerald-500 mb-16 text-7xl font-bold'>
        Contact Me
      </span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='grid grid-cols-2 gap-y-2 pt-14'>
          <Link
            href='https://www.linkedin.com/in/saatvik-madan-9ab4a32a9/'
            className='flex items-center'
            target='_blank'
          >
            <IconBrandLinkedin className='social text-zinc-300 size-28' />
          </Link>

          <Link
            href='mailto:yello@itsaatvik.dev'
            className='flex items-center'
            target='_blank'
          >
            <IconMail className='social text-zinc-300 size-28' />
          </Link>

          <Link
            href='https://github.com/saatvik-10'
            className='flex items-center'
            target='_blank'
          >
            <IconBrandGithub className='social text-zinc-300 size-28' />
          </Link>

          <Link
            href='https://x.com/saatvik__10?t=xfxKasWQvlAi-SBV_agM8Q&s=09'
            className='flex items-center'
            target='_blank'
          >
            <IconBrandTwitter className='social text-zinc-300 size-28' />
          </Link>
        </div>

        <form></form>
      </div>
    </main>
  );
};

export default ContactSection;
