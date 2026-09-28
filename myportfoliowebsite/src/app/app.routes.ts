import { Routes } from '@angular/router';

import { ROUTE_PATHS } from './core/navigation/navigation';

export const routes: Routes = [
    {
        path: ROUTE_PATHS.home,
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
    },
    {
        // Páginas internas: sidebar + conteúdo. O `title` de cada rota é uma chave i18n.
        path: '',
        loadComponent: () =>
            import('./core/layout/inner-layout/inner-layout').then((m) => m.InnerLayout),
        children: [
            {
                path: ROUTE_PATHS.about,
                title: 'nav.about',
                loadComponent: () => import('./features/about/about').then((m) => m.About),
            },
            {
                path: ROUTE_PATHS.resume,
                title: 'nav.resume',
                loadComponent: () => import('./features/resume/resume').then((m) => m.Resume),
            },
            {
                path: ROUTE_PATHS.portfolio,
                title: 'nav.portfolio',
                loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
            },
            {
                path: ROUTE_PATHS.contact,
                title: 'nav.contact',
                loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
            },
        ],
    },
    // Qualquer caminho desconhecido volta para a Home.
    { path: '**', redirectTo: ROUTE_PATHS.home },
];
