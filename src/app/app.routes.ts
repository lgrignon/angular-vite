import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin',
        loadChildren: () =>  import('./admin/admin.module').then(m  => m.AdminModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
