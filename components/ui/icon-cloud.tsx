'use client';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud';

export type DynamicCloudProps = {
  iconSlugs?: string[];
  imageArray?: string[];
};

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = '#D4D4D8';
  const fallbackHex = '#D4D4D8';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({
  iconSlugs = [],
  imageArray = [],
}: DynamicCloudProps) {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<Awaited<
    ReturnType<typeof fetchSimpleIcons>
  > | null>(null);
  const { theme, systemTheme } = useTheme();

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch icons data
  useEffect(() => {
    if (mounted && iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs, mounted]);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const renderedIcons = useMemo(() => {
    if (!data || !mounted) return [];
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, currentTheme || 'light')
    );
  }, [data, currentTheme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>
        {renderedIcons.length > 0 && <>{renderedIcons}</>}
        {imageArray.map((image, index) => (
          <a
            key={`img-${index}`}
            href='#'
            onClick={(e) => e.preventDefault()}
            className='block'
          >
            <img
              height='56'
              width='56'
              alt={`Skill icon ${index + 1}`}
              src={image}
              className='object-contain'
            />
          </a>
        ))}
      </>
    </Cloud>
  );
}
