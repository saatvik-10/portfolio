'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Modal } from '../ui/animated-modal';
import { MultiStepLoader as Loader } from '../ui/multi-step-loader';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactInput,
  contactInputValidator,
} from '@/validators/contact.validator';
import { Button } from '../ui/button';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const loadingStates = [
    {
      text: 'Connecting to mail server...',
    },
    {
      text: 'This might take a few seconds',
    },
    {
      text: 'Sending your email...',
    },
    {
      text: 'Mail sent successfully!',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactInputValidator),
  });

  const handleFormSubmit = async (data: ContactInput) => {
    try {
      setLoading(true);

      const formData = {
        access_key: process.env.NEXT_PUBLIC_MAIL_ACCESS_KEY,
        ...data,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        formRef.current?.reset();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          location.reload();
        }, 9000);
      } else {
        console.log(errors);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id='contact'>
      <main className='pt-20'>
        <div className='text-emerald-500 mb-8 md:mb-16 text-6xl text-center md:text-start md:text-7xl font-bold'>
          Contact Me
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='grid grid-cols-2 gap-y-8'>
            <Link
              href='https://www.linkedin.com/in/saatvik-madan-9ab4a32a9/'
              target='_blank'
              className='flex justify-center md:justify-start'
            >
              <IconBrandLinkedin className='social text-zinc-300 size-28' />
            </Link>

            <Link
              href='mailto:yello@itsaatvik.dev'
              target='_blank'
              className='flex justify-center md:justify-start'
            >
              <IconMail className='social text-zinc-300 size-28' />
            </Link>

            <Link
              href='https://github.com/saatvik-10'
              target='_blank'
              className='flex justify-center md:justify-start'
            >
              <IconBrandGithub className='social text-zinc-300 size-28' />
            </Link>

            <Link
              href='https://x.com/saatvik__10?t=xfxKasWQvlAi-SBV_agM8Q&s=09'
              target='_blank'
              className='flex justify-center md:justify-start'
            >
              <IconBrandX className='social text-zinc-300 size-28' />
            </Link>
          </div>

          <form
            ref={formRef}
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
            <Modal>
              <div className='flex items-center justify-end' id='contact'>
                {loading && (
                  <div className='fixed inset-0'>
                    <Loader
                      loadingStates={loadingStates}
                      loading={loading}
                      duration={2000}
                    />
                  </div>
                )}
                <Button
                  type='submit'
                  className='bg-white rounded-lg text-emerald-500 flex justify-center group/modal-btn w-full relative'
                >
                  <span className='group-hover/modal-btn:translate-x-80 text-center transition duration-500 font-extrabold'>
                    Send Message
                  </span>
                  <div className='-translate-x-80 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-zinc-300 '>
                    <IconMail className='text-emerald-500' />
                  </div>
                </Button>
              </div>
            </Modal>
          </form>
        </div>
      </main>
    </section>
  );
};

export default ContactSection;
