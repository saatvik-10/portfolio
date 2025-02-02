import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <div className={cn('relative p-[4px] group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#10B981,transparent),radial-gradient(circle_farthest-side_at_100%_0,#059669,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#34D399,transparent),radial-gradient(circle_farthest-side_at_0_0,#6EE7B7,#064E3B)]'
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#10B981,transparent),radial-gradient(circle_farthest-side_at_100%_0,#059669,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#34D399,transparent),radial-gradient(circle_farthest-side_at_0_0,#6EE7B7,#064E3B)]'
        )}
      />

      <div className={cn('relative', className)}>{children}</div>
    </div>
  );
};
