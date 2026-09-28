import { Routes } from '@angular/router';

import { ROUTE_PATHS } from './core/navigation/navigation';

export const routes: Routes = [
  {
    path: ROUTE_PATHS.home,
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  // Páginas internas ainda não implementadas: redirecionam para a Home até ganharem rota própria.
  { path: '**', redirectTo: ROUTE_PATHS.home },
];
