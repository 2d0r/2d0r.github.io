import { skillsData } from '@/lib/data';
import { Project } from '@/lib/types'
import { imageLoader } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({project}: {project: Project}) {
    const skillsDisplay = project?.tags?.slice(0, 4).map(skillName => {
        const skillIcon = skillsData.find(skill => skill.name === skillName)?.icon;
        console.log('skillIcon', skillIcon);

        return(<div key={skillName} className='rounded-lg h-[20px] w-[20px] flex items-center justify-center'>
            <Image src={skillIcon || ''} alt={skillName} 
            height={48} width={48} loader={imageLoader}
            />
        </div>);
    });

    return (
        <motion.div className='absolute z-40 top-full w-[400px] left-1/2 mt-2
        border border-white rounded-xl backdrop-blur-lg bg-white/10 
        text-white shadow-lg shadow-black/[0.03]
        flex gap-2 p-4 items-start justify-center h-48'
        initial={{opacity: 0, y: 10, x: '-50%' }} animate={{opacity: 1, y: 0, x: '-50%'}}>
            <div className='flex flex-col min-w-36 w-1/3 h-full justify-between'>
                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-medium'>{project.title}</span>
                    <span>{project.description}</span>
                </div>
                <div className='flex gap-3'>{skillsDisplay}</div>
            </div>
            <div className='relative h-full w-2/3'>
                <Image src={`./images/${project?.id}-1.png`} alt={`${project}-image-1`} loader={imageLoader}
                className='rounded-xl h-full w-full' objectFit='cover' layout='fill' />
            </div>
        </motion.div>
    );
}
