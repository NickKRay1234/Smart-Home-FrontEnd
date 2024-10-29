import { Routes } from "@angular/router";

export const accountRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((mod) => mod.LoginComponent)
    },

    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then((mod) => mod.RegisterComponent)
    },

    {
        path: 'test-login',
        loadComponent: () => import('./test-login/test-login.component').then((mod) => mod.TestLoginComponent)
    }
];