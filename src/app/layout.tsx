import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import localFont from 'next/dist/compiled/@next/font/dist/local';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });
// const museoModerno = localFont({ src: 'public/fonts/museoModerno.ttf'});

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
      <body className={`${inter.className} z-10 file:flex min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll hide-scrollbar pt-12`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='bottom-right'/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
