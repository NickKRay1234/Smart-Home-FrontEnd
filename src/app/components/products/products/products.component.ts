import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../core/services/product.service';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe } from '@angular/common';
import { Product } from '../../../shared/models/product/product';
import { resourceUsage } from 'process';
import { tap } from 'rxjs';

const sortFn = (a: any, b: any) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductSliderComponent, ProductCardComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductService],
})
export class ProductsComponent {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);
  products!: Product[];

  constructor() {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prod: Product[]) => (this.products = prod));
  }

  productsDiscount(): Product[] | null {
    if (this.products?.length) {
      const products = this.products
        .filter((product: Product) => product.productDiscount > 0)
        .slice(0, 5);
      return products;
    }
    return null;
  }

  productsNew(): Product[] | null {
    if (this.products?.length) {
      return this.products.slice(0, 5);
    }
    return null;
  }

  productsBest(): Product[] | null {
    if (this.products?.length) {
      return this.products.slice(0, 5);
    }
    return null;
  }
}
