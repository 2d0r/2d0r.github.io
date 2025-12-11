import type { Metadata } from 'next';
import '@/app/globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import SessionContextProvider from '@/context/session-context';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';
import Background from '@/components/background';

const museoModerno = localFont({ src: '../../public/fonts/museoModerno.ttf'});

export const metadata: Metadata = {
  title: 'Tudor | Portfolio',
  description: 'Tudor is a Front-End Developer with 3 years experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en' className={clsx('!scroll-smooth ')}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#3b82f6' />
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
      </head>
      <body className='overscroll-none overflow-x-hidden relative w-full z-10 file:flex flex flex-col items-center justify-center pt-12 animate-skychange'>
        <SessionContextProvider>
          <Header />
          <div id='content' className={clsx(
              'z-10 w-[min(900px,100%)] flex flex-col gap-8 items-center justify-start text-white font-regular md:mt-2 p-4 md:p-8 pb-12', 
              'md:border border-white/60 md:outline outline-8 outline-offset-8 outline-white/60 rounded-xl bg-pattern-zigzag3d', 
              museoModerno.className
            )}>
            {children}
          </div>
          <Footer />
          <Toaster position='bottom-right'/>
          <Background />
        </SessionContextProvider>
      </body>
    </html>
  );
}
