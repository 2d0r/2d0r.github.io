'use client';

import { projectsData, skillsData } from '@/lib/data';
import { ProjectId } from '@/lib/types';
import { imageLoader } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
    projectId: ProjectId,
}

export default function Hero ({projectId}: HeroProps) {

    const project = projectsData.find(proj => proj.id === projectId);

    const skillsDisplay = project?.tags?.slice(0, 4).map(skillName => {
        const skillIcon = skillsData.find(skill => skill.name === skillName)?.icon;
        console.log('skillIcon', skillIcon);

        return(<div key={skillName} className='rounded-lg h-[55px] w-[55px] flex items-center justify-center'>
            <Image src={skillIcon || ''} alt={skillName} 
            height={48} width={48} loader={imageLoader}
            />
        </div>);
    })

    return (<div className='flex flex-col h-full pt-4'>
        <div className='flex items-center justify-center content-center gap-6 h-full w-auto'>
            {/* Skills Columns */}
            {/* <div className='flex flex-col h-[120px] justify-between'>
                {skillsDisplay?.[0] || ''}
                {skillsDisplay?.[1] || ''}
            </div> */}
            <div className='border border-white rounded-xl flex flex-wrap w-[160px] h-[160px] gap-4 p-4 text-white'>{project?.description}</div>
            {/* Center cards */}
            {/* <div className='border-white border rounded-lg h-[120px] w-full'></div> */}
            <div className='border-white border rounded-lg h-full w-auto flex items-center justify-center overflow-clip'>
                <Image src={`./images/${project?.id}-1.png`} alt={'kronos-1-image'} 
                height={120} width={400} loader={imageLoader} className='h-full w-auto bg-fit'
                />
            </div>
            {/* <div className='border-white border rounded-lg h-[120px] w-full'></div> */}
            {/* Skills Columns */}
            {/* <div className='flex flex-col h-[120px] justify-between'>
                {skillsDisplay?.[2] || ''}
                {skillsDisplay?.[3] || ''}
            </div> */}
            <div className='border border-white rounded-xl flex flex-wrap w-[160px] h-[160px] gap-3 p-4'>{skillsDisplay}</div>
        </div>
        {/* <div className='h-1/6 text-white w-full p-4 text-center'>{project?.description}</div> */}
    </div>);
}