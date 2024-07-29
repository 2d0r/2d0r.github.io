'use client';

import { projectsData } from '@/lib/data';
import { HeroId, Project } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link'
import React, { useState } from 'react'
import ProjectCard from './project-card';
import { AnimatePresence } from 'framer-motion';

interface ProjectLinkProps {
    projectId: HeroId,
    className?: string,
}

export default function ProjectLink({ projectId, className } : ProjectLinkProps) {

    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const handleHover = (hover: boolean) => {
        if (window.innerWidth < 768) {
            setShowTooltip(false);
        } else {
            setShowTooltip(hover);
        }
    }
    const handleClick = (e: any) => {
        if (window.innerWidth < 768) {
            e.preventDefault(); // Prevent the default action on the first click
            setShowTooltip( !showTooltip );
        }
    }
    const handleBlur = () => {
        setShowTooltip(false);
    }
    const project = projectsData.find(proj => proj.id === projectId);

    return (<div className='md:relative w-full md:w-auto flex flex-col justify-center align-center'>
        <Link href={`./${projectId}`} 
            className={clsx(className, 'highlight text-center')} 
            onMouseOver={() => handleHover(true)} 
            onMouseOut={() => handleHover(false)}
            onClick={handleClick}
        >{project?.title}</Link>
        <AnimatePresence>
            {showTooltip && <ProjectCard project={project || {} as Project} onBlur={handleBlur} />}
        </AnimatePresence>
    </div>);
}
