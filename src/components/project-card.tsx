'use client';

import { skillsData } from '@/lib/data';
import { Project } from '@/lib/types'
import { imageLoader } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({project, imageFit = 'cover', onBlur}: {
    project: Project,
    imageFit?: ('cover' | 'contain'),
    onBlur: () => void,
}) {
    const skillsDisplay = project?.tools?.slice(0, 4).map(tool => {
        const skillIcon = skillsData.find(skill => skill.name === tool)?.icon;
        console.log('skillIcon', skillIcon);

        return(<div key={tool} className='rounded-lg h-[20px] w-[20px] flex items-center justify-center'>
            <Image src={skillIcon || ''} alt={tool} 
            height={48} width={48} loader={imageLoader}
            />
        </div>);
    });

    return (
        <motion.div className='md:absolute z-40 md:top-full md:w-[400px] w-full md:left-1/2 mt-3 md:mt-2
        border border-white rounded-xl backdrop-blur-lg bg-white/10 overflow-y-hidden
        text-white shadow-lg shadow-black/[0.03]
        flex flex-col items-start justify-center'
        initial={window.innerWidth >= 768 ? {opacity: 0, y: 10, x: '-50%' } : {opacity: 0, height: 0, y: 0, x: 0}} 
        animate={window.innerWidth >= 768 ? {opacity: 1, y: 0, x: '-50%'} : {opacity: 1, height: 'auto', y: 0, x: 0}}
        exit={window.innerWidth >= 768 ? {} : {opacity: 0, height: 0, y: 0, x: 0, padding: 0, marginTop: 0}}
        // transition={{ duration: 0.3 }}
        key={`${project.title}-card`}
        onBlur={() => onBlur()}>
            <div className='w-full flex gap-2 p-4 items-start justify-center h-48 border-b border-white md:border-none'>
                <div className='flex flex-col min-w-36 w-1/2 h-full justify-between'>
                    <div className='flex flex-col gap-2 overflow-y-clip max-h-[80%]'>
                        <span className='text-xl font-medium text-left hidden md:inline-block'>{project.title}</span>
                        <span className='text-left'>{project.description}</span>
                    </div>
                    <div className='flex gap-3'>{skillsDisplay}</div>
                </div>
                <div className='relative h-full w-1/2'>
                    <Image src={project.thumbnail} alt={`${project}-image-1`} loader={imageLoader}
                    className='rounded-xl h-full w-full' objectFit={imageFit} layout='fill' />
                </div>
            </div>
            <Link href={`/${project.id}`}
            className='md:hidden flex align-center justify-center w-full p-3 text-lg font-medium text-yellow-300'>
                Go to project
            </Link>
        </motion.div>
    );
}
