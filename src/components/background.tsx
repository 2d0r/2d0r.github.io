'use client';

import { useEffect } from 'react';
import clsx from 'clsx';
import { useSessionContext } from '@/context/session-context';
import Rain from './rain/rain';
import SunrayEffect from './sunray-effect';

export default function Background() {
  const { bgIsBlue, setBgIsBlue } = useSessionContext();

  // Change weather background
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIsBlue(prev => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='background' className='absolute top-0 left-0 w-full h-full z-0'>
      {/* Clear skies */}
      <div className={clsx(
        'absolute inset-0 transition-opacity duration-[3000ms] ease-in-out',
        bgIsBlue ? 'opacity-100' : 'opacity-0',
        'bg-gradient-to-b from-blue-500 to-blue-300'
      )}/>
      {/* Stormy skies */}
      <div className={clsx(
        'absolute inset-0 transition-opacity duration-[3000ms] ease-in-out',
        bgIsBlue ? 'opacity-0' : 'opacity-100',
        'bg-gradient-to-b from-slate-800 to-slate-500'
      )}>
        <div className='animate-lightning w-full h-full'></div>
        <Rain />
      </div>
      <SunrayEffect />
    </div>
  );
}
