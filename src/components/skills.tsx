'use client';

import Image from 'next/image';
import { skillsData } from '../lib/data';
import Divider from './divider';
import { imageLoader } from '../lib/utils';
import '@/app/globals.css';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';

export default function SkillsSection ({skills, folderLevel} : {
    skills?: readonly ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"], 
    folderLevel?: number // 1 is the app folder, 2 is a contained folder
}) {
    const skillsForDisplay = skills ? skills : skillsData.map(skill => skill.name);
    const skillsDisplay = skillsForDisplay.map(skill => {
        return (<div className='tooltip-container relative' key={skill}>
            <Image src={`${(folderLevel ? '../'.repeat(folderLevel - 1) : '')}${skillsData.find(el => el.name === skill)?.icon || ''}`} alt={skill} 
                height={48} width={48} loader={imageLoader}
            />
            <div className='tooltip absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-xl rounded-lg text-white px-2 py-1'>{skill}</div>
        </div>);
    });
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Skills');
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (<section id='skills' ref={ref} className='scroll-mt-28 flex flex-col items-center gap-8'>
        <Divider heading='Skills' />
        <div className='flex flex-wrap items-start justify-center gap-12 w-4/5'>
            {skillsDisplay}
        </div>
    </section>);
}