import localFont from 'next/font/local';
import { projectsData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import Divider from '@/app/ui/divider';
import Tools from '@/app/ui/tools';

const museoModernoFont = localFont({ src: '../../../../public/fonts/museoModerno.ttf'});

export default async function Page({params} : {params: any}) {
    const projectData = getProjectData(params.id);

    if (!projectData.props) {
        notFound();
    }

    const project = projectData.props.project;

    return (<main className='z-10 file:flex min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll hide-scrollbar py-12'>
        {/* Wrapper */}
        <div className={`min-w-[900px] h-screen flex flex-col gap-4 items-center justify-start text-white ${museoModernoFont.className}`}>
            <div className='text-9xl -pb-4 -mb-4 font-regular tracking-widest'>{project.title}</div>
            <Divider heading='Overview' />
            <div className='w-full'>{project.text[0]}</div>
            <Divider heading='Tools' />
            {/* <Tools tools={project.tags || []} /> */}
            <div className='w-full border-white border rounded-3xl h-[300px]'></div>
        </div>
    </main>);
}

// Generate all possible paths at build time
export function generateStaticParams() {
    // Return an array of params objects, each containing an id
    return projectsData.map(project => ({
        id: project.id.toString(),
    }));
}

// Fetch data for each generated path
export function getProjectData(id: string) {
    const project = projectsData.find(proj => proj.id === String(id));

    // If no project found, return 404
    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: { project },
    };
}