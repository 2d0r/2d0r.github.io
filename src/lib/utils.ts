import { projectsData } from './data';
import { Project } from './types';

export function imageLoader({ src }: { src: string }) {
    return `${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

// Fetch data for each generated path
export function getProjectsData(id: string) {
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

// Fetch data for each generated path
export function getAdjacentProjects(id: string): [Project | null, Project | null] {
    const projectIdx = projectsData.findIndex(proj => proj.id === String(id));

    let adjacentProjects: [Project | null, Project | null] = [null, null];
    adjacentProjects[0] = projectIdx > 0 ? projectsData[projectIdx - 1] : null;
    adjacentProjects[1] = projectIdx < projectsData.length - 1 ? projectsData[projectIdx + 1] : null;
    
    return adjacentProjects;
}

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if(error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    } else if (typeof error === 'string') {
        message = error;
    } else {
        message = 'Something went wrong';
    }

    return message;
    
}