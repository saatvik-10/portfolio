'use client';

import React from 'react';
import { Button } from '../ui/button';
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

const ContactSection = () => {
  return (
    <main className='py-20'>
      <span className='text-emerald-500 mb-16 text-7xl'>Contact Me</span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        
        <div className='grid grid-cols-2 gap-2 pt-14'>
            
        </div>

        <form>

        </form>

      </div>
    </main>
  );
};

export default ContactSection;
