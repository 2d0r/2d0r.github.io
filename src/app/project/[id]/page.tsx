import localFont from 'next/font/local';
import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import Divider from '@/components/divider';
import { getProjectData } from '@/lib/utils';
import SkillsSection from '@/components/skills';

const museoModernoFont = localFont({ src: '../../../../public/fonts/museoModerno.ttf'});

export default function Page({params} : {params: any}) {
    const projectData = getProjectData(params.id);

    if (!projectData.props) {
        notFound();
    }

    const project = projectData.props.project;

    return (<>
        <div className='text-9xl -pb-4 -mb-4 font-regular tracking-widest'>{project.title}</div>
        <Divider heading='Overview' />
        <div className='w-full'>{project.text[0]}</div>
        <SkillsSection skills={project.tags} folderLevel={2} />
        <div className='w-full border-white border rounded-3xl h-[300px]'></div>
    </>);
}

// Generate all possible paths at build time
export function generateStaticParams() {
    // Return an array of params objects, each containing an id
    return projectsData.map(project => ({
        id: project.id.toString(),
    }));
}