'use client';

import React from 'react';
import { Button } from '../ui/button';
import { IconDownload } from '@tabler/icons-react';

interface ResumeProps {
  className?: string;
}

const Resume: React.FC<ResumeProps> = ({ className }) => {
  const handlePdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/saatvik_resume.pdf';
    link.download = 'Saatvik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={className}>
      <Button
        className='border-2 border-emerald-500 text-white font-bold text-lg'
        onClick={handlePdfDownload}
      >
        Resume <IconDownload className='h-6 w-6' />
      </Button>
    </div>
  );
};

export default Resume;
