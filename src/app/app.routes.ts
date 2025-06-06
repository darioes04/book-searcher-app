import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'search',
        loadComponent: () => import('./books/pages/search-page/search-page.component')
    },

    {
        path: 'search/:bookid',
        loadComponent: () => import('./books/pages/info-page/info-page.component')
    },
    
    {

        path: '**',
        redirectTo: 'search'
    } 

];
