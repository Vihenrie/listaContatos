import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'ctt1',
    loadComponent: () => import('./ctt1/ctt1.page').then( m => m.Ctt1Page)
  },
  {
    path: 'ctt2',
    loadComponent: () => import('./ctt2/ctt2.page').then( m => m.Ctt2Page)
  },
  {
    path: 'ctt3',
    loadComponent: () => import('./ctt3/ctt3.page').then( m => m.Ctt3Page)
  },
  {
    path: 'ctt4',
    loadComponent: () => import('./ctt4/ctt4.page').then( m => m.Ctt4Page)
  },
  {
    path: 'ctt5',
    loadComponent: () => import('./ctt5/ctt5.page').then( m => m.Ctt5Page)
  },
  {
    path: 'ctt6',
    loadComponent: () => import('./ctt6/ctt6.page').then( m => m.Ctt6Page)
  },

];
