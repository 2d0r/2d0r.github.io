'use client';

import Divider from '@/components/divider';
import { motion } from 'framer-motion';
import ProjectImage from './project-image';
import '../app/globals.css';
import clsx from 'clsx';
import { ProjectSectionType } from '@/lib/types';

export default function ProjectSection({section, alignImage = 'right'} : {
    section: ProjectSectionType,
    alignImage?: ('left' | 'right'),
}) {
    return (
        <motion.section id={section.title.toLowerCase()} className='z-10 scroll-mt-28 flex flex-col items-center gap-8 w-full'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Divider heading={section.title} />
            <div className={clsx('flex flex-col md:flex-row gap-12 w-full justify-between items-center', 
            alignImage === 'left' && 'md:flex-row-reverse',
            )}>
                <div dangerouslySetInnerHTML={{__html: section.text || ''}} 
                className='w-full md:w-3/5 px-0 project-text'></div>
                { section.images?.map((image, idx) => {
                    return <ProjectImage image={image} key={idx} />
                })}
            </div>
        </motion.section>
    );
}
