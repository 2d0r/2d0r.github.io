'use client';

import Link from 'next/link';
import Divider from '@/components/divider';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import ProjectLink from './project-link';

export default function Projects () {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Projects');
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (<section id='projects' ref={ref} className='z-40 w-full scroll-mt-[100rem] flex flex-col items-center gap-8'>
        {/* Hero */}
        <motion.div 
            className='relative flex flex-col justify-center items-center'
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
        >
            {/* Overtitle */}
            <div className='flex justify-center md:justify-between items-center w-full z-40 my-6 md:my-0'>
                <span className='md:w-1/3 cursor-default'>Hi! My name is</span>
                <Link href='/files/tudor-popescu-cv.pdf' download className='w-0 md:w-1/3 hidden md:inline highlight text-right'>Download CV</Link>
            </div>
            {/* Title */}
            <div className='text-7xl sm:text-8xl md:text-9xl pt-0 mb-4 font-semibold text-center cursor-default leading-[80px] md:leading-none'>Tudor Popescu</div>
            
            {/* Subtitle */}
            <div className='flex gap-4 text-center justify-between items-center w-full text-lg'>
                <span className='hidden md:inline'>X</span>
                <span className='w-full text-center mt-8 md:mt-0 px-8 md:px-0'>I am a Front-End Developer with 3 years experience building & designing web apps.</span>
                <span className='hidden md:inline'>X</span>
            </div>
        </motion.div>

        <motion.div className='w-full flex flex-col items-center justify-center gap-4 font-medium'
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Divider heading='Headliners' /> 
            {/* Headliners */}
            <div className='flex flex-wrap flex-col md:flex-row gap-x-8 gap-y-4 justify-center'>
                <ProjectLink projectId='kronos' className='text-6xl md:text-8xl' />
                <ProjectLink projectId='wejam' className='text-6xl md:text-8xl' /> 
            </div>

            {/* Tier 2 */}
            <div className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
                <ProjectLink projectId='wolfpack' className='text-6xl md:text-7xl' /> 
                <ProjectLink projectId='bvr' className='text-6xl md:text-7xl' /> 
            </div>
        </motion.div>

        {/* Tier 3 - by stage */}
        <motion.div className='flex flex-wrap md:flex-nowrap gap-8 justify-center w-full text-center mt-2 mb-2'
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <div className='flex flex-col gap-4 w-full'>
                <Divider heading='Web Design Stage' />
                <ProjectLink projectId='wolf-mentorship' className='text-3xl font-medium' />
                <ProjectLink projectId='soundr-landing' className='text-3xl font-medium' />
                <ProjectLink projectId='counselling-site' className='text-3xl font-medium' />
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <Divider heading='Logo Stage' />
                <ProjectLink projectId='ftt' className='text-3xl font-medium' />
                <ProjectLink projectId='dreams-and-monsters' className='text-3xl font-medium' />
                <ProjectLink projectId='vosports' className='text-3xl font-medium' />
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <Divider heading='Graphic Design Stage' />
                <ProjectLink projectId='music-artworks' className='text-3xl font-medium' />
                <ProjectLink projectId='soundr-rebrand' className='text-3xl font-medium' />
                <ProjectLink projectId='wolfys-posters' className='text-3xl font-medium' />
            </div>
        </motion.div>
    </section>);
}