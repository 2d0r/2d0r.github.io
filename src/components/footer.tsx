'use client';

import { useWindowDimensions } from '@/lib/use-window-dimensions';
import { imageLoader } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';

export default function Footer () {

    const gradientFooter = [];

    const {windowWidth} = useWindowDimensions();
    if (windowWidth && windowWidth < 768) {
        // For mobile and tablet
        for (let i = 60; i >= 0; i -= 3) {
            gradientFooter.push(<div key={i}>
                <div className='w-full bg-white' style={{height: `${1}px`}}></div>
                <div className='w-full h-[6px] flex justify-center items-center' style={{height: `${i}px`}}>
                    {i === 60 && <span className='text-sm text-white text-center'>
                        Built by Tudor in Next.js, Typescript and Tailwind.
                    </span>}
                </div>
            </div>);
        }
    } else {
        // For desktop
        for (let i = 60; i >= 0; i -= 3) {
            gradientFooter.push(<div key={i} >
                {i === 60 && 
                <div className='w-full h-[6px] flex justify-center items-end text-sm text-white text-center relative' style={{height: `${i}px`}}>
                    Built by Tudor in Next.js, Typescript and Tailwind.
                    <div className='absolute w-full flex justify-center top-full z-50'>
                        <Image src='/images/2d0r-logo-w.svg' alt='2d0r logo' loader={imageLoader} width={120} height={0} 
                        className='w-[8vw]' />
                    </div>
                </div>
                }
                <Image src='/images/cloud-line.svg' alt='cloud' loader={imageLoader} width={1496} height={0}
                    style={{ marginTop: i !== 60 ? `calc(-14.7vw + ${i * 0.06}vw)` : '-4vw' }} />
            </div>);
        }
    }
    
    return (<div className='w-full flex-col items-center mt-24 overflow-hidden md:h-[43vw]'> 
        {gradientFooter}
    </div>)
}