import Spotlight from '@/components/Bg/Spotlight';
import './globals.css';
import { Navbar } from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import { Noto_Sans_Anatolian_Hieroglyphs } from 'next/font/google';
// import Footer from '@/components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const inter = Noto_Sans_Anatolian_Hieroglyphs({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
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
          {/* <Footer />
          <ToastContainer /> */}
        </Spotlight>
      </body>
    </html>
  );
}
