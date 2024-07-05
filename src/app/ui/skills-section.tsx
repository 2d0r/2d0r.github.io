'use client';

import Image from 'next/image';
import { skillsData } from '../lib/data';
import Divider from './divider';
import Skills from './skills';
import { imageLoader } from '../lib/utils';

export default function SkillsSection ({skills, folderLevel} : {
    skills?: string[], 
    folderLevel?: number // 1 is the app folder, 2 is a contained folder
}) {
    const skillsForDisplay = skills ? skills : skillsData.map(skill => skill.name);
    const skillsDisplay = skillsForDisplay.map(skill => {
        return (<div className='tooltip-container relative' key={skill}>
            <Image src={`${(folderLevel ? '../'.repeat(folderLevel - 1) : '')}${skillsData.find(el => el.name === skill)?.icon || ''}`} alt={skill} 
                height={48} width={48} loader={imageLoader}
            />
            <div className='tooltip absolute top-[50px] left-auto right-auto bg-white/30 backdrop-blur-xl rounded-lg text-white px-2 py-1'>{skill}</div>
        </div>);
    });

    return (<>
        <Divider heading='Skills' />
        <div className='flex flex-wrap items-start justify-center gap-12 w-4/5'>
            {skillsDisplay}
        </div>
    </>);
}