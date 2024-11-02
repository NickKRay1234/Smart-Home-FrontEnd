import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/layout.component';
import { AccountInteractionComponent } from './shared/account-interaction/account-interaction.component';

export const routes: Routes = [
   { path: '', component: AppLayoutComponent },
   { path: 'account', loadChildren: () => import('./features/account/routes').then(r => r.accountRoutes)},
   { path: 'email', component: AccountInteractionComponent },
];
