'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface SpotlightEffectProps {
  children?: React.ReactNode;
}

// Simple throttle function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const SpotlightEffect: React.FC<SpotlightEffectProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const drawDots = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      const spacing = 40;
      const spotlightRadius = 300;

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          );
          const isInSpotlight = distance < spotlightRadius;
          const opacity = isInSpotlight
            ? Math.max(0, (1 - distance / spotlightRadius) * 0.5)
            : 0;

          if (opacity > 0) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 145, ${opacity})`;
            ctx.fill();

            if (isInSpotlight) {
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(16, 185, 145, ${opacity * 0.2})`;
              ctx.fill();
            }
          }
        }
      }
    },
    [mousePosition]
  );

  const updateSpotlight = useCallback((x: number, y: number) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgb(6 95 70 / 0.15), transparent 80%)`;
    }
  }, []);

  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      updateSpotlight(e.clientX, e.clientY);
    }, 16),
    [updateSpotlight]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          canvas.width = entry.contentRect.width;
          canvas.height = entry.contentRect.height;
          drawDots(ctx, canvas.width, canvas.height);
        }
      }
    });

    resizeObserver.observe(canvas);

    const animationFrame = requestAnimationFrame(() =>
      drawDots(ctx, canvas.width, canvas.height)
    );

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [drawDots]);

  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black'>
      <canvas
        ref={canvasRef}
        className='fixed inset-0 z-0'
        style={{ width: '100%', height: '100%' }}
      />
      <div
        ref={spotlightRef}
        className='pointer-events-none fixed inset-0 z-0'
      />
      <div className='relative z-10'>{children}</div>
    </div>
  );
};

export default SpotlightEffect;
