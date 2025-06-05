import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'search',
        loadComponent: () => import('./pages/search-page/search-page.component')
    },

    {
        path: 'search/:bookid',
        loadComponent: () => import('./pages/info-page/info-page.component')
    },
    
    {

        path: '**',
        redirectTo: 'search'
    } 

];
