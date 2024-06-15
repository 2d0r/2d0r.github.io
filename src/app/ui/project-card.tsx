import React from 'react';
import '@/app/globals.css'

interface ProjectCardProps {
    text: string,
    title: string,
    projectId: string,
    onMouseOver: (projectId: string)=>void,
    selected?: string,
}

export default function ProjectCard ({
    text, title, projectId, onMouseOver, selected,
}: ProjectCardProps) {

    const handleOnMouseOver = (over: boolean) => {
        onMouseOver(over ? projectId : '');
    }

    return (<div 
        className='flex group gap-8 h-[200px] text-black justify-between' 
        onMouseOver={() => handleOnMouseOver(true)}
        onMouseOut={() => handleOnMouseOver(false)}
    >
        <div className='w-2/5 bg-violet-400 relative'>
            <div className='absolute top-0 inset-0 bg-gray-100 group-hover:scale-y-0 transition-transform origin-top'></div>
        </div>
        <h1 className='text-3xl font-bold [writing-mode:vertical-rl] text-center'>{title}</h1>
        {/* <div className='w-2/5 block overflow-hidden'>{text}</div> */}
        <div className='w-2/5 bg-violet-400 relative'>
            <div className='absolute top-0 inset-0 bg-gray-100 group-hover:scale-y-0 transition-transform origin-top'></div>
        </div>
    </div>)
}