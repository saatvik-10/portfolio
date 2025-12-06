'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// Update the type definition to accept ReactNode for description
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    img: string;
    title?: string;
    description?: React.ReactNode; // Changed from string to ReactNode
    link?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lggrid-cols-2 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className='relative group block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-zinc-300/[0.4] block rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <img src={item.img} alt='' className='w-56 h-56' />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-emerald-500 group-hover:border-emerald-700 relative',
        className
      )}
    >
      <div className='relative'>
        <div className='p-4 flex flex-col items-center'>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn('text-zinc-300 font-bold tracking-wide text-2xl', className)}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mt-2 text-zinc-500 tracking-wide leading-relaxed text-lg',
        className
      )}
    >
      {children}
    </div>
  );
};
