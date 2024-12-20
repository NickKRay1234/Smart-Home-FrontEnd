import { Route } from '@angular/router';

export const PRODUCT_ROUTING: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
