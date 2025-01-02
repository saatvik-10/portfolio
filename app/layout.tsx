import Spotlight from '@/components/Bg/Spotlight';
import './globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import { ADLaM_Display } from 'next/font/google';

const inter = ADLaM_Display({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Spotlight>
          <Navbar />
          <main className='mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Spotlight>
      </body>
    </html>
  );
}
