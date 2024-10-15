import { Routes } from "@angular/router";

export const accountRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((mod) => mod.LoginComponent)
    },

    {
        path: 'handler',
        loadComponent: () => import('./handler/handler.component').then((mod) => mod.HandlerComponent)
    }
];