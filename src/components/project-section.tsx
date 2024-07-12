'use client';

import Divider from '@/components/divider';
import { motion } from 'framer-motion';
import ProjectImage from './project-image';

export default function ProjectSection({title, text, image} : {
    title: string,
    text: string,
    image?: string,
}) {
    
    return (<motion.section id={title.toLowerCase()} className='scroll-mt-28 flex flex-col items-center gap-8 w-full'
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Divider heading={title} />
        <div dangerouslySetInnerHTML={{__html: text}} className='md:text-center w-full md:w-3/5 px-8 md:px-0'
        ></div>
        {image && <ProjectImage image={image} />}
    </motion.section>)
}
