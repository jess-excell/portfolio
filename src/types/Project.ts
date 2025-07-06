import type { technology } from "./Technology";

export type Project = {
    title: string,
    technologies: technology[],
    description: string
};