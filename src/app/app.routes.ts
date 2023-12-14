import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'pages',
        loadChildren: () =>  import('./pages/pages.module').then(m  => m.PagesModule)
    },
    {
        path: 'admin',
        loadChildren: () =>  import('./pages/admin/admin.module').then(m  => m.AdminModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
