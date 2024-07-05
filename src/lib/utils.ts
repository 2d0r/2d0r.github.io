import { projectsData } from './data';

export function imageLoader({ src }: { src: string }) {
    return `${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
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