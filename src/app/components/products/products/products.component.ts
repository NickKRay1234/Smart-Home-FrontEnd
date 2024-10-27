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
  private slideDiscount!: Slide;
  private slideNew!: Slide;
  private slideBest!: Slide;
  private step = 5;

  products: Product[] = [];
  discountProducts: Product[] = [];

  startDisc = 0;
  endDisc = this.step;
  startNew = 0;
  endNew = this.step;
  startBest = 0;
  endBest = this.step;
  disabled = false;

  @HostListener('window:resize') onResize() {
    if (window?.innerWidth && this.products?.length) {
      this.resize(this.products, window.innerWidth);
      this.moreDiscount();
      this.moreNew();
      this.moreBest();
    }
  }
  @HostListener('window:load') onLoad() {
    if (this.products?.length) {
      this.resize(this.products, window.innerWidth);
      this.moreDiscount();
      this.moreNew();
      this.moreBest();
    }
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((prod: Product[]) => {
        this.products = prod;
        this.discountProducts = prod.filter((p) => p.productDiscount !== 0);
      });
  }

  resize(prod: Product[], width: number) {
    if (width > 1280 && prod?.length) {
      this.step = 5;
      this.slideDiscount = slide(this.discountProducts.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    } else if (width > 744 && prod?.length) {
      this.step = 3;
      this.slideDiscount = slide(this.discountProducts.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    } else {
      this.step = 2;
      this.slideDiscount = slide(this.discountProducts.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    }
  }

  moreDiscount(): void {
    const { start, end, disabled } = this.slideDiscount();
    this.startDisc = start;
    this.endDisc = end;
    this.disabled = disabled;
  }

  moreNew(): void {
    const { start, end, disabled } = this.slideNew();
    this.startNew = start;
    this.endNew = end;
  }

  moreBest(): void {
    const { start, end, disabled } = this.slideBest();
    this.startBest = start;
    this.endBest = end;
  }
}
