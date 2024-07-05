import React from 'react';

interface ProjectSkillsProps {
    skills?: string[],
    onMouseOver: (projectId: string) => void,
    projectId: string,
    selected?: string,
}

export default function ProjectSkills ({
    skills, onMouseOver, projectId, selected,
}: ProjectSkillsProps) {

    const handleOnMouseOver = (over: boolean) => {
        onMouseOver && onMouseOver(over ? projectId : '');
    }

    return (<div 
        className='flex flex-wrap justify-between h-[200px]'
        onMouseOver={() => handleOnMouseOver(true)}
        onMouseOut={() => handleOnMouseOver(false)}
    >
        {/* <div className='bg-gray-100 h-[60px] w-[60px]'></div> */}
        <div className='h-[60px] w-[60px] bg-violet-400 relative' >
            <div className='absolute top-0 inset-0 bg-gray-100 origin-top transition' style={{
                transform: selected === projectId ? 'scaleY(0)' : ''
            }}></div>
        </div>
        <div className='h-[60px] w-[60px] bg-violet-400 relative' >
            <div className='absolute top-0 inset-0 bg-gray-100 origin-top transition' style={{
                transform: selected === projectId ? 'scaleY(0)' : ''
            }}></div>
        </div>
        <div className='h-[60px] w-[60px] bg-violet-400 relative' >
            <div className='absolute top-0 inset-0 bg-gray-100 origin-top transition' style={{
                transform: selected === projectId ? 'scaleY(0)' : ''
            }}></div>
        </div>
        <div className='h-[60px] w-[60px] bg-violet-400 relative' >
            <div className='absolute top-0 inset-0 bg-gray-100 origin-top transition' style={{
                transform: selected === projectId ? 'scaleY(0)' : ''
            }}></div>
        </div>
    </div>);
}