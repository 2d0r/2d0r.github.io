'use client';

import { projectsData } from '@/lib/data';
import { HeroId, Project } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from './project-card';
import { AnimatePresence } from 'framer-motion';

interface ProjectLinkProps {
    projectId: HeroId,
    className?: string,
}

export default function ProjectLink({ projectId, className } : ProjectLinkProps) {

    const [ showCard, setShowCard ] = useState<boolean>(false);
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const handleHover = (hover: boolean) => {
        if (isMobile) {
            setShowCard(false);
        } else {
            setShowCard(hover);
        }
    }
    const handleClick = (e: any) => {
        if (isMobile) {
            e.preventDefault(); // Prevent the default action on the first click
            setShowCard( !showCard );
        }
    }
    const project = projectsData.find(proj => proj.id === projectId);

    // Hook to detect when user clicks outside of ProjectCard
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowCard(false);
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (<div className='md:relative w-full md:w-auto flex flex-col justify-center align-center'>
        <Link href={`./${projectId}`} 
            className={clsx(className, 'highlight text-center')} 
            onMouseOver={() => handleHover(true)} 
            onMouseOut={isMobile ? () => {} : () => handleHover(false)}
            onClick={handleClick}
        >{project?.title}</Link>
        <div ref={ref}>
            <AnimatePresence>
                {showCard && <ProjectCard project={project || {} as Project} />}
            </AnimatePresence>
        </div>
    </div>);
}
