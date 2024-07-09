import { links, projectsData, skillsData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type Project = (typeof projectsData)[number];
export type ProjectTitle = (typeof projectsData)[number]["title"];
export type ProjectId = (typeof projectsData)[number]["id"];
export type HeroId = (ProjectId | 'twdor');