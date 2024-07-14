'use client';

import Divider from '@/components/divider';
import { motion } from 'framer-motion';
import ProjectImage from './project-image';
import '../app/globals.css';
import clsx from 'clsx';

export default function ProjectSection({title, text, image, alignImage = 'right'} : {
    title: string,
    text: string,
    image?: string,
    alignImage?: ('left' | 'right'),
}) {
    
    return (<motion.section id={title.toLowerCase()} className='z-10 scroll-mt-28 flex flex-col items-center gap-8 w-full'
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Divider heading={title} />
        <div className={clsx('flex flex-col md:flex-row gap-12 w-full justify-between items-center', 
        alignImage === 'left' && 'md:flex-row-reverse',
        )}>
            <div dangerouslySetInnerHTML={{__html: text}} 
            className='w-full md:w-3/5 px-0 project-text'></div>
            {image && <ProjectImage image={image} />}
        </div>
    </motion.section>)
}
