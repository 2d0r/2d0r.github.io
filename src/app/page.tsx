'use client';

import React from 'react';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { useState } from 'react';
import Hero from './ui/hero';
import Tools from './ui/tools';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/16/solid';
import Divider from './ui/divider';
import { aboutData, toolsData } from './lib/data';
import Timeline from './ui/timeline';
import ContactForm from './components/contact-form';
import Footer from './ui/footer';

const dxGraphikFont = localFont({ src: '../../public/fonts/dxgrafik-semibold.otf'});
const rowdiesBoldFont = localFont({ src: '../../public/fonts/rowdies-bold.ttf'});
const rowdiesRegularFont = localFont({ src: '../../public/fonts/rowdies-regular.ttf'});
const rowdiesLightFont = localFont({ src: '../../public/fonts/rowdies-light.ttf'});
const museoModerno = localFont({ src: '../../public/fonts/museoModerno.ttf'});


export default function Page() {

    const [ heroContent, setHeroContent ] = useState<string>('twdor');

    const handleHover = (hover: boolean) => {
        setHeroContent(hover ? '' : 'twdor');
    }

    return (<main className='z-10 file:flex min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll hide-scrollbar pt-12'>
        {/* Wrapper */}
        <div className={`max-w-[900px] flex flex-col gap-8 items-center justify-start text-white ${museoModerno.className} font-regular`}>
            {/* Hero */}
            {/* <div className='h-[20vh] w-auto'></div> */}

            {/* Festival name */}
            <div 
                className={`relative flex flex-col gap-2 justify-center items-center ${
                    heroContent === 'twdor' ? '' : 'text-transparent pointer-events-none'
                }`} style={{
                    color: heroContent === 'twdor' ? '' : 'transparent',
                    pointerEvents: heroContent === 'twdor' ? 'auto' : 'none'
                }}
            >
                <div className='flex text-uppercase justify-between items-between w-full z-50'>
                    <Link href='#contact-form' className='highlight w-1/3'>Contact</Link>
                    <span className='w-1/3 text-center cursor-default'>Hi! My name is</span>
                    <Link href='/CV' className='highlight w-1/3 text-right'>Download CV</Link>
                </div>
                <div className='flex flex-col gap-4 items-center relative'>
                    <div className='text-9xl -pb-4 -mb-4 font-semibold text-center cursor-default'>Tudor Popescu</div>
                    <div className='flex gap-8 text-md font-medium'>
                        
                        {/* Sometimes<br/>known as<br/>Tudor Popescu<br/>(Contact) */}
                    </div>
                </div>
                <div className='flex text-center justify-between items-center w-full'>
                    <span>X</span>
                    <span>I am a Front-End Developer with 3 years experience building & designing web apps.</span>
                    <span>X</span>
                    {/* <Link href='/contact' className='w-1/3'>I am a front-end developer</Link>
                    <span className='w-1/3 text-center cursor-default'>with 3 years experience</span>
                    <Link href='/CV' className='w-1/3 text-right'>building & designing web apps</Link> */}
                </div>
                {heroContent !== 'twdor' && 
                <div className='absolute inset-0 z-30'>
                    <Hero content={heroContent} />
                </div>
                }
            </div>
            <Divider heading='Lineup' />

            {/* Headliners */}
            <div className='flex gap-8 font-medium'>
                <Link href='./project/1' className='text-8xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Kronos</Link>
                <div className='text-8xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>WeJam</div>
            </div>

            {/* Tier 2 */}
            <div className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
                <div className='text-5xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Wolfpack NFT</div>
                <div className='text-5xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Beach Volley Romania</div>
            </div>

            {/* Tier 3 - by stage */}
            <div className='flex gap-8 justify-center w-full text-center mt-2'>
                <div className='flex flex-col gap-4 w-full'>
                    <Divider heading='UX Stage' />
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Wolf Mentorship</div>
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Soundr Landing</div>
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Counsellor Landing</div>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <Divider heading='Logo Stage' />
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Finish That Track</div>
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Dreams & Monsters</div>
                    {/* <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Mixing & Mastering Mentorship</div> */}
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>VoSports</div>
                    <div></div>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <Divider heading='Graphic Design Stage' />
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Album Artworks</div>
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>Soundr Poster</div>
                    <div className='text-3xl highlight' onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>{'Wolfy\'s Posters'}</div>
                </div>
            </div>
            <Divider heading='Skills' />
            <Tools tools={toolsData.map(tool => tool.name)}/>
            <Divider heading='About Me' />
            <div dangerouslySetInnerHTML={{__html: aboutData.text}} className='text-center w-3/5'></div>
            <Timeline />
            <Divider heading='Contact' />
            <ContactForm />
        </div>
        <Footer />
    </main>);
}