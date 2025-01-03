'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  // Use useEffect to set initial state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  // Only render content after initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  // Memoize the rotation value for each testimonial
  const getRotation = (index: number) => {
    const seed = (index * 17) % 21; // Deterministic random-like value
    return seed - 10;
  };

  useEffect(() => {
    if (autoplay && mounted) {
      const interval = setInterval(handleNext, 7000);
      return () => clearInterval(interval);
    }
  }, [autoplay, mounted]);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  return (
    <div className='max-w-sm md:max-w-5xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10'>
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div>
          <div className='relative h-80 w-full z-0'>
            <AnimatePresence mode='wait'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className='absolute inset-0 origin-bottom'
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className='h-full w-full rounded-3xl object-cover object-center border-2 border-emerald-500'
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className='flex justify-between flex-col py-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
            >
              <h3 className='text-2xl font-bold text-zinc-300'>
                {testimonials[active].name}
              </h3>
              <motion.p className='text-lg text-zinc-500 mt-8'>
                {testimonials[active].quote.split(' ').map((word, index) => (
                  <motion.span
                    key={`${active}-${index}`}
                    initial={{
                      filter: 'blur(10px)',
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: 'blur(0px)',
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut',
                      delay: 0.02 * index,
                    }}
                    className='inline-block'
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className='flex gap-4 pt-12 md:pt-4'>
            <button
              onClick={handlePrev}
              className='h-7 w-7 rounded-full bg-zinc-300 flex items-center justify-center group/button'
              aria-label='Previous testimonial'
            >
              <IconArrowLeft className='h-5 w-5 text-zinc-500 group-hover/button:rotate-12 transition-transform duration-300' />
            </button>
            <button
              onClick={handleNext}
              className='h-7 w-7 rounded-full bg-zinc-300 flex items-center justify-center group/button'
              aria-label='Next testimonial'
            >
              <IconArrowRight className='h-5 w-5 text-zinc-500 group-hover/button:-rotate-12 transition-transform duration-300' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
