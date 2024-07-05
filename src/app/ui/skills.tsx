import Image from 'next/image';
import { imageLoader } from '../lib/utils';
import '@/app/globals.css';
import { skillsData } from '../lib/data';

export default function Skills ({ skills, folderLevel }: { skills: string[], folderLevel?: number }) {
    const skillsDisplay = skills.map(tool => {
        return (<div className='tooltip-container relative' key={tool}>
            <Image src={`${skillsData.find(el => el.name === tool)?.icon || ''}`} alt={tool} 
                height={48} width={48} loader={imageLoader}
            />
            <div className='tooltip absolute top-[50px] left-auto right-auto bg-white/30 backdrop-blur-xl rounded-lg text-white px-2 py-1'>{tool}</div>
        </div>);
    });

    return (<div className='flex flex-wrap items-start justify-center gap-12 w-4/5'>
        {skillsDisplay}
    </div>);
}