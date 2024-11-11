import {
  Component,
  DestroyRef,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

import { ProductService } from '@core/services/product.service';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '@shared/models/product/product';
import { resize } from '@shared/tools/resize';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductSliderComponent, ProductCardComponent, NgClass, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  discountProducts: Product[] = [];
  newProducts: Product[] = [];
  bestProducts: Product[] = [];
  cutDiscountProducts: Product[] = [];
  cutNewProducts: Product[] = [];
  cutBestProducts: Product[] = [];

  @HostListener('window:resize') onResize() {
    if (window?.innerWidth) {
      this.cutDiscountProducts = resize(
        this.discountProducts,
        window.innerWidth
      );
      this.cutNewProducts = resize(this.newProducts, window.innerWidth);
      this.cutBestProducts = resize(this.bestProducts, window.innerWidth);
    }
  }
  @HostListener('window:load') onLoad() {
    this.cutDiscountProducts = resize(this.discountProducts, window.innerWidth);
    this.cutNewProducts = resize(this.newProducts, window.innerWidth);
    this.cutBestProducts = resize(this.bestProducts, window.innerWidth);
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prod: Product[]) => {
        this.newProducts = prod;
        this.bestProducts = prod.slice(5);
      });

    this.productService
      .getDiscountProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prod: Product[]) => {
        this.discountProducts = prod;
      });
  }

  moreDiscount(): void {
    this.router.navigate(['/discount']);
  }

  moreNew(): void {
    this.router.navigate(['/new']);
  }

  moreBest(): void {
    this.router.navigate(['/discount']);
  }
}
