import { Component, DestroyRef, HostListener, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../core/services/product.service';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe } from '@angular/common';
import { Product } from '@shared/models/product/product';
import { slide } from '@shared/tools/slide';
import { tap } from 'rxjs';

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
  private slideDiscount: any;
  private slideNew: any;
  private slideBest: any;
  private step = 5;
  products!: Product[];

  startDisc = 0;
  endDisc = this.step;
  startNew = 0;
  endNew = this.step;
  startBest = 0;
  endBest = this.step;

  @HostListener('window:resize') onResize() {
    this.resize(this.products);
  }

  constructor() {
    this.productService
      .getProducts()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((prod) => {
          this.resize(prod);
        })
      )
      .subscribe((prod: Product[]) => (this.products = prod));
  }

  resize(prod: Product[]) {
    const width = window.innerWidth;
    if (width > 1280) {
      this.step = 5;
      this.slideDiscount = slide(prod.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    } else if (width > 744) {
      this.step = 3;
      this.slideDiscount = slide(prod.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    } else {
      this.step = 2;
      this.slideDiscount = slide(prod.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    }
  }

  moreDiscount(): void {
    const { start, end } = this.slideDiscount();
    this.startDisc = start;
    this.endDisc = end;
  }

  moreNew(): void {
    const { start, end } = this.slideNew();
    this.startNew = start;
    this.endNew = end;
  }

  moreBest(): void {
    const { start, end } = this.slideBest();
    this.startBest = start;
    this.endBest = end;
  }
}
