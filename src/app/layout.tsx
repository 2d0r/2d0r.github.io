import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';

const museoModerno = localFont({ src: '../../public/fonts/museoModerno.ttf'});

export const metadata: Metadata = {
  title: "Tudor | Portfolio",
  description: "Tudor is a Front-End Developer with 3 years experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx('!scroll-smooth ')}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='file:flex min-h-screen flex flex-col items-center justify-center overflow-x-hidden overscroll-none
      bg-gradient-to-b from-blue-500 to-blue-300 hide-scrollbar pt-12'>
          <ActiveSectionContextProvider>
            <Header />
            <div className={clsx('w-[min(900px,96%)] flex flex-col gap-8 items-center justify-start text-white font-regular mt-8 p-4 md:p-0', museoModerno.className)}>
              {children}
            </div>
            <Footer />
            <Toaster position='bottom-right'/>
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
