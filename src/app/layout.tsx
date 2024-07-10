import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';
import CloudAnimation from '@/components/cloud-animation';

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
      </head>
      <body className={`file:flex min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll hide-scrollbar pt-12`}>
          <ActiveSectionContextProvider>
            <Header />
            <div className={clsx('z-10 w-[min(900px,100%)] flex flex-col gap-8 items-center justify-start text-white font-regular mt-8', museoModerno.className)}>
              {children}
            </div>
            <Footer />
            <Toaster position='bottom-right'/>
            <CloudAnimation />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
