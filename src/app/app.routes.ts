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
          import('./features/products/product.routing').then(
            (r) => r.PRODUCT_ROUTING
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/cart/cart/cart.component').then(
            (c) => c.CartComponent
          ),
        outlet: 'cart',
      },
    ],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/routes').then((r) => r.accountRoutes),
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
