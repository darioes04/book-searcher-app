import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'search',
        loadComponent: () => import('./pages/search-page/search-page.component')
    },
    {

        path: '**',
        redirectTo: 'search'
    }

];
