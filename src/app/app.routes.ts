import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/products/product.routing').then(
            (r) => r.PRODUCT_ROUTING
          ),
      },
    ],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/routes').then((r) => r.accountRoutes),
  },
];
