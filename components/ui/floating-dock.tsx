'use client';

import { cn } from '@/lib/utils';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

const scrollToElement = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(href);
    setOpen(false);
  };

  return (
    <div
      className={cn(
        ' md:hidden flex z-50 ml-4',
        className
      )}
    >
      {/* <AnimatePresence>
        {open && (
          <motion.div
            layoutId='nav'
            className='absolute left-full inset-x-0 flex gap-2'
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(item.href, e)}
                  className='h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center'
                >
                  <div className='h-4 w-4'>{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className='h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center'
      >
        <IconLayoutNavbarCollapse className='h-5 w-5 text-zinc-300 rotate-90' />
      </button> */}
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-neutral-900 dark:bg-neutral-900 px-4 pb-3 border-2 border-emerald-500 fixed top-16 left-1/2 -translate-x-1/2 z-[50]',
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='aspect-square rounded-full bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center relative'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className='px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border dark:bg-emerald-500 dark:border-neutral-900 dark:text-emerald-500 border-emerald-500 text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className='flex items-center justify-center'
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
