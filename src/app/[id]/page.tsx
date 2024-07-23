import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import { getAdjacentProjects, getProjectsData } from '@/lib/utils';
import SkillsSection from '@/components/skills';
import CloudAnimation from '@/components/cloud-animation';
import ProjectSection from '@/components/project-section';
import ScrollToTop from '@/components/scroll-to-top';
import clsx from 'clsx';
import ProjectNav from '@/components/project-nav';

export default function Page({params} : {params: any}) {
    const projectData = getProjectsData(params.id);
    if (!projectData.props) { notFound(); }
    const project = projectData.props.project;
    const adjacentProjects = getAdjacentProjects(params.id);

    return (<>
        <div className={clsx('text-8xl md:text-9xl text-center -pb-4 mt-4 md:-mb-4 font-semibold',
            project.title.length > 8 ? 'longTitle' : 'shortTitle',
        )} >
            {project.title}
        </div>
        <SkillsSection skills={project.tools} folderLevel={2} title={'Tools'} linkToHeader={false} />
        { project.sections.map((section, idx) => {
            if (section.title === '') return <></>;
            return <ProjectSection section={section} alignImage={idx % 2 ? 'left' : 'right'} key={`${project.id}-section-${idx}`} />
        })}
        <ProjectNav project1={adjacentProjects[0]} project2={adjacentProjects[1]} />
        <CloudAnimation clouds={2} />
        <ScrollToTop />
    </>);
}

// Generate all possible paths at build time
export function generateStaticParams() {
    // Return an array of params objects, each containing an id
    return projectsData.map(project => ({
        id: project.id.toString(),
    }));
}