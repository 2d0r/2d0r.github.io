import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import { getProjectsData } from '@/lib/utils';
import SkillsSection from '@/components/skills';
import CloudAnimation from '@/components/cloud-animation';
import ProjectSection from '@/components/project-section';

export default function Page({params} : {params: any}) {
    const projectData = getProjectsData(params.id);

    if (!projectData.props) {
        notFound();
    }

    const project = projectData.props.project;

    return (<>
        <div className='text-8xl md:text-9xl -pb-4 -mb-4 font-semibold'>{project.title}</div>
        <SkillsSection skills={project.tools} folderLevel={2} title={'Tools'} linkToHeader={false} />
        { project.sections.map((section, idx) => {
            return <ProjectSection section={section} alignImage={idx % 2 ? 'left' : 'right'} key={`${project.id}-section-${idx}`} />
        })}
        <CloudAnimation clouds={2} />
    </>);
}

// Generate all possible paths at build time
export function generateStaticParams() {
    // Return an array of params objects, each containing an id
    return projectsData.map(project => ({
        id: project.id.toString(),
    }));
}