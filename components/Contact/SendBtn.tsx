'use client';
import React from 'react';
import { Modal, ModalTrigger } from '../ui/animated-modal';
import { IconMail } from '@tabler/icons-react';

export function SendBtn() {
  return (
    <div className='flex items-center justify-end'>
      <Modal>
        <ModalTrigger className='bg-white text-emerald-500 flex justify-center group/modal-btn w-full'>
          <span className='group-hover/modal-btn:translate-x-80 text-center transition duration-500 font-extrabold'>
            Send Message
          </span>
          <div className='-translate-x-80 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-zinc-300 z-20'>
            <IconMail className='size-10 text-emerald-500' />
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}
