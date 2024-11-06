import { Routes } from "@angular/router";

export const accountRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((mod) => mod.TestLoginComponent)
    },

    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then((mod) => mod.RegisterComponent)
    },

    {
        path: 'confirmEmail',
        loadComponent: () => import('./account-interaction/account-interaction.component').then((mod) => mod.AccountInteractionComponent)
    }
];