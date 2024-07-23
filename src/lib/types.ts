import { links, projectsData, skillsData } from './data';

export type SectionName = (typeof links)[number]['name'];
export type Project = (typeof projectsData)[number];
export type ProjectTitle = (typeof projectsData)[number]['title'];
export type ProjectId = (typeof projectsData)[number]['id'];
export type Skill = (typeof skillsData)[number]['name'];
export type HeroId = (ProjectId | 'twdor');

export type ProjectDataType = {
    id: string,
    title: string, 
    description: string,
    text: string[],
    images: string[],
    tags: Skill[],
};

export type ProjectSectionType = {
    title: string,
    text?: string,
    images?: string[],
};
export type ProjectData2Type = {
    id: string,
    title: string, 
    description: string,
    thumbnail: string,
    sections: ProjectSectionType[],
    tools: Skill[],
    link?: {
        name: string,
        href: string,
    },
};