import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import { getProjectData } from '@/lib/utils';
import SkillsSection from '@/components/skills';
import ProjectSection from '@/components/project-section';
import CloudAnimation from '@/components/cloud-animation';

export default function Page({params} : {params: any}) {
    const projectData = getProjectData(params.id);

    if (!projectData.props) {
        notFound();
    }

    const project = projectData.props.project;

    return (<>
        <div className='text-8xl md:text-9xl -pb-4 -mb-4 font-semibold'>{project.title}</div>
        <SkillsSection skills={project.tags} folderLevel={2} title={'Tools'} linkToHeader={false} />
        <ProjectSection title='Overview' text={project.text[0]} image={project.images[0]} />
        <ProjectSection title='Features' text={project.text[1]} image={project.images[1]} alignImage='left' />
        <ProjectSection title='Next Steps' text={project.text[2]} image={project.images[2]} />
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