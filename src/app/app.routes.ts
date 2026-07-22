import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic pages pipes basicos',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'custom',
    title: 'Custom pages pipes personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'number',
    title: 'Number pages pipes numericos',
    loadComponent: () => import('./pages/number-page/number-page'),
  },
  {
    path: 'uncommon',
    title: 'Uncommon pages pipes poco comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
