import { projectsData } from '@/lib/data';
import { HeroId, Project, ProjectId, ProjectTitle } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link'
import React, { useState } from 'react'
import ProjectCard from './project-card';

interface ProjectHeadingProps {
    projectId: HeroId,
    className?: string,
    onHover: (projectId: HeroId) => void,
}

export default function ProjectHeading({ projectId, className, onHover } : ProjectHeadingProps) {

    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const handleHover = (hover: boolean) => {
        hover ? onHover(projectId) : onHover('twdor');
        setShowTooltip(hover);
    }
    const project = projectsData.find(proj => proj.id === projectId);

    return (<div className='relative'>
        <Link href={`./project/${projectId}`} className={clsx(className, 'highlight')} onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>{project?.title}</Link>
        {showTooltip && <ProjectCard project={project || {} as Project} />}
    </div>);
}
