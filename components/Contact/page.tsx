'use client';

import React from 'react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import {
  ContactInput,
  contactInputValidator,
} from '@/validators/contact.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';
import { SendBtn } from './SendBtn';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactInputValidator),
  });
  const handleFormSubmit = async (data: ContactInput) => {
    // try {
    //     await axios.post('/api/contact', data)
    //     toast({ title: 'Your message was send successfully!' })
    // } catch (err) {
    //     console.error(err)
    //     toast({
    //         title: 'Error Sending Message!',
    //     })
    // }
    console.log(data);
  };

  return (
    <main className='py-20'>
      <span className='text-emerald-500 mb-16 text-7xl font-bold'>
        Contact Me
      </span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-14'>
        <div className='grid grid-cols-2 gap-y-8'>
          <Link
            href='https://www.linkedin.com/in/saatvik-madan-9ab4a32a9/'
            target='_blank'
          >
            <IconBrandLinkedin className='social text-zinc-300 size-28' />
          </Link>

          <Link href='mailto:yello@itsaatvik.dev' target='_blank'>
            <IconMail className='social text-zinc-300 size-28' />
          </Link>

          <Link href='https://github.com/saatvik-10' target='_blank'>
            <IconBrandGithub className='social text-zinc-300 size-28' />
          </Link>

          <Link
            href='https://x.com/saatvik__10?t=xfxKasWQvlAi-SBV_agM8Q&s=09'
            target='_blank'
          >
            <IconBrandTwitter className='social text-zinc-300 size-28' />
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className='form w-full h-full overflow-hidden flex-col flex gap-5'
        >
          <Input
            {...register('name')}
            type='text'
            placeholder='Name'
            className='text-zinc-300'
          />
          {errors.name && (
            <p className='text-red-500 -mt-3 -mb-2'>Please enter your name</p>
          )}
          <Input
            {...register('email')}
            type='email'
            placeholder='Email'
            className='text-zinc-300'
          />
          {errors.email && (
            <p className='text-red-500 -mt-3 -mb-2'>
              Please enter a valid email address
            </p>
          )}
          <Textarea
            {...register('message')}
            placeholder='Type your message here.'
            className='resize-none flex-1 h-screen text-zinc-300'
          />
          {errors.message && (
            <p className='text-red-500 -mt-3 -mb-2'>Please enter a message</p>
          )}
          <SendBtn />
        </form>
      </div>
    </main>
  );
};

export default ContactSection;
