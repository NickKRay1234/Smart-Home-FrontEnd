import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/layout.component';

export const routes: Routes = [
   { path: '', component: AppLayoutComponent },
   { path: 'account', loadChildren: () => import('./features/account/routes').then(r => r.accountRoutes)},
];
