'use client';
import React, { useState, useEffect } from 'react';
import { Modal, ModalTrigger } from '../ui/animated-modal';
import { IconMail } from '@tabler/icons-react';
import { MultiStepLoader as Loader } from '../ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { FieldErrors } from 'react-hook-form';
import { ContactInput } from '@/validators/contact.validator';

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

interface SendBtnProps {
  err: FieldErrors<ContactInput>;
}

export function SendBtn({ err }: SendBtnProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const totalDuration = loadingStates.length * 2000;
      const timeout = setTimeout(() => {
        setLoading(false);
      }, totalDuration);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  const handleSend = () => {
    if (Object.keys(err).length === 0) {
      setLoading(true);
    }
  };

  return (
    <div className='flex items-center justify-end'>
      <Modal>
        {loading && (
          <div className='fixed inset-0 z-[1000]'>
            <Loader
              loadingStates={loadingStates}
              loading={loading}
              duration={2000}
            />
          </div>
        )}
        <button
          onClick={handleSend}
          disabled={Object.keys(err).length > 0}
          className={`bg-white py-1 rounded-lg text-emerald-500 flex justify-center group/modal-btn w-full relative ${
            Object.keys(err).length > 0 ? 'opacity-10 cursor-not-allowed' : ''
          }`}
        >
          <span className='group-hover/modal-btn:translate-x-80 text-center transition duration-500 font-extrabold'>
            Send Message
          </span>
          <div className='-translate-x-80 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-zinc-300 z-20'>
            <IconMail className='size-10 text-emerald-500' />
          </div>
        </button>
      </Modal>
    </div>
  );
}
