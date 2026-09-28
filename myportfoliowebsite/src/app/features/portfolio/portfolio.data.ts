/**
 * Projetos do portfólio. Título e descrição ficam em pt.json/en.json, em
 * `portfolio.projects.<id>`; aqui só o que não muda com o idioma.
 */

export type ProjectCategory = 'dotnet' | 'angular' | 'fullstack';

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = ['dotnet', 'angular', 'fullstack'];

export interface Project {
    readonly id: string;
    readonly category: ProjectCategory;
    readonly tags: readonly string[];
    readonly url: string;
}

export const PROJECTS: readonly Project[] = [
    {
        id: 'portfolio',
        category: 'angular',
        tags: ['Angular', 'TypeScript', 'SSR'],
        url: 'https://github.com/jonathandotore/myportfoliowebsite',
    },
    {
        id: 'educaApp',
        category: 'dotnet',
        tags: ['.NET', 'Web API', 'Redis'],
        url: 'https://github.com/jonathandotore/EducaApp',
    },
];
