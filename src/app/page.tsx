'use client';

import React from 'react';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { useState } from 'react';
import Hero from './ui/hero';
import Tools from './ui/tools';

const DxGraphikFont = localFont({ src: '../../public/fonts/dxgrafik-semibold.otf'});
const FunkyChokyFont = localFont({src: '../../public/fonts/funkychoky-regular.ttf'});
const HipnoumaFont = localFont({src: '../../public/fonts/hipnouma.otf'});

export default function Page() {

    const [ heroContent, setHeroContent ] = useState<string>('twdor');

    const handleHover = (hover: boolean) => {
        setHeroContent(hover ? '' : 'twdor');
    }

    return (<main className='z-10 file:flex min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll hide-scrollbar py-12'>
        {/* Wrapper */}
        <div className={`max-w-[900px] h-screen flex flex-col gap-4 items-center justify-start text-white ${DxGraphikFont.className}`}>
            {/* Hero */}
            {/* <div className='h-[20vh] w-auto'></div> */}
            {/* Festival name */}
            <div className={`relative flex flex-col gap-4 justify-center items-center ${
                heroContent === 'twdor' ? '' : 'text-transparent pointer-events-none'
            }`} style={{
                color: heroContent === 'twdor' ? '' : 'transparent',
                pointerEvents: heroContent === 'twdor' ? 'auto' : 'none'
            }}>
                <div className='text-uppercase'>Welcome to</div>
                <div className='flex items-center relative'>
                    <div className='text-9xl -pb-4 -mb-4 font-regular tracking-widest highlight'>TWDOR</div>
                    <div className='text-md font-medium highlight'>
                        Sometimes<br/>known as<br/>Tudor Popescu<br/>(Contact)
                    </div>
                </div>
                {heroContent !== 'twdor' && 
                <div className='absolute inset-0 z-30'>
                    <Hero content={heroContent} />
                </div>
                }
            </div>
            {/* Line up divider */}
            <div className='flex justify-center items-center w-full gap-2'>
                <div className='h-[1px] bg-white w-full'></div>
                <div className='text-xl font-semibold w-auto'>Lineup</div>
                <div className='h-[1px] bg-white w-full'></div>
            </div>
            {/* Headliners */}
            <div className='flex gap-8'>
                <div className='text-8xl font-regular highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Kronos</div>
                <div className='text-8xl font-regular highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>WeJam</div>
            </div>
            {/* Tier 2 */}
            <div className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
                <div className='text-5xl font-regular highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Wolfpack NFT</div>
                <div className='text-5xl font-regular highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Beach Volley Romania</div>
            </div>
            {/* Tier 3 - by stage */}
            <div className='flex gap-8 justify-center w-full text-center mt-2'>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex justify-center items-center w-full gap-2'>
                        <div className='h-[1px] bg-white w-full'></div>
                        <div className='text-xl font-semibold w-auto'>UX Stage</div>
                        <div className='h-[1px] bg-white w-full'></div>
                    </div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Wolf Mentorship</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Soundr Landing</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Counsellor Landing</div>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex justify-center items-center w-full gap-2'>
                        <div className='h-[1px] bg-white w-full'></div>
                        <div className='text-xl font-semibold w-auto'>Logo Stage</div>
                        <div className='h-[1px] bg-white w-full'></div>
                    </div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Finish That Track</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Dreams & Monsters</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Mixing & Mastering Mentorship</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>VoSports</div>
                    <div></div>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex justify-center items-center w-full gap-2'>
                        <div className='h-[1px] bg-white w-full'></div>
                        <div className='text-xl font-semibold w-auto'>Graphic Design Stage</div>
                        <div className='h-[1px] bg-white w-full'></div>
                    </div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Album Artworks</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Soundr Poster</div>
                    <div className='text-3xl font-bold highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>{'Wolfy\'s Posters'}</div>
                </div>
            </div>
            {/* Tools divider */}
            <div className='flex justify-center items-center w-full gap-2'>
                <div className='h-[1px] bg-white w-full'></div>
                <div className='text-xl font-semibold w-auto'>Tools</div>
                <div className='h-[1px] bg-white w-full'></div>
            </div>
            <Tools tools={['react', 'next', 'figma', 'github', 'pixelmator']}/>
        </div>
    </main>);
}