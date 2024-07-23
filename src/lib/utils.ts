import { projectsData } from './data';

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