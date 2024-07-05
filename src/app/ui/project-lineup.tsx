'use client';

import Link from 'next/link';
import Divider from './divider';
import { useState } from 'react';
import Hero from './hero';

export default function ProjectLineup () {
    const [ heroContent, setHeroContent ] = useState<string>('twdor');

    const handleHover = (hover: boolean) => {
        setHeroContent(hover ? '' : 'twdor');
    };

    return (<>
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
            {/* Hero */}
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
    </>);
}