import {
  Component,
  DestroyRef,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../core/services/product.service';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe, NgClass, NgStyle } from '@angular/common';
import { Product } from '@shared/models/product/product';
import { Slide, slide } from '@shared/tools/slide';
import { CartComponent } from 'app/components/cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductSliderComponent,
    ProductCardComponent,
    NgClass,
    AsyncPipe,
    CartComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
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
      this.cutDiscountProducts = this.resize(
        this.discountProducts,
        window.innerWidth
      );
      this.cutNewProducts = this.resize(this.newProducts, window.innerWidth);
      this.cutBestProducts = this.resize(this.bestProducts, window.innerWidth);
    }
  }
  @HostListener('window:load') onLoad() {
    this.cutDiscountProducts = this.resize(
      this.discountProducts,
      window.innerWidth
    );
    this.cutNewProducts = this.resize(this.newProducts, window.innerWidth);
    this.cutBestProducts = this.resize(this.bestProducts, window.innerWidth);
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prod: Product[]) => {
        this.newProducts = prod;
        this.bestProducts = prod;
      });

    this.productService
      .getDiscountProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prod: Product[]) => {
        this.discountProducts = prod;
      });
  }

  resize(prod: Product[], width: number): Product[] {
    const step = 5;
    if (width > 1280 && prod?.length) {
      return prod.slice(0, step);
    } else if (width > 744 && prod?.length) {
      return prod.slice(0, step - 2);
    } else {
      return prod.slice(0, step - 3);
    }
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
