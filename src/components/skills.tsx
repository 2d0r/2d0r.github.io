'use client';

import Image from 'next/image';
import { skillsData } from '../lib/data';
import Divider from './divider';
import { imageLoader } from '../lib/utils';
import '@/app/globals.css';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

export default function SkillsSection ({skills, folderLevel, title, linkToHeader = true} : {
    skills?: Skill[], 
    folderLevel?: number, // 1 is the app folder, 2 is a contained folder
    title?: string,
    linkToHeader?: boolean,
}) {
    const skillsForDisplay = skills ? skills : skillsData.map(skill => skill.name);
    const skillsDisplay = skillsForDisplay.map(skill => {
        return (<div className='tooltip-container relative' key={skill}>
            <Image src={`${(folderLevel ? '../'.repeat(folderLevel - 1) : '')}${skillsData.find(el => el.name === skill)?.icon || ''}`} alt={skill} 
                height={48} width={48} loader={imageLoader}
                className='hover:scale-110 transition'
            />
            <motion.div className='tooltip absolute top-full mt-2 left-1/2 
            bg-white/30 backdrop-blur-xl rounded-lg text-white px-2 py-1'
                initial={{ opacity: 0, y: 20, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }}>
                {skill}
            </motion.div>
        </div>);
    });
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(linkToHeader ? 'Skills' : undefined);
        }
    }, [inView, setActiveSection, timeOfLastClick, linkToHeader]);

    const fadeInAnimationVariant = {
        initial: { opacity: 0, y: 100 }, 
        animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }),
    }

    return (<section id='skills' ref={ref} className='z-10 w-full scroll-mt-28 flex flex-col items-center gap-8'>
        <Divider heading={title || 'Skills'} />
        <div className='flex flex-wrap items-start justify-center gap-12 w-full md:w-4/5'>
            {skillsDisplay}
        </div>
    </section>);
}