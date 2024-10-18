import { Component, DestroyRef, inject } from '@angular/core';
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
  products!: Product[];
  private slideDiscount: any;
  private slideNew: any;
  private slideBest: any;
  private step = 5;

  startDisc = 0;
  endDisc = this.step;
  startNew = 0;
  endNew = this.step;
  startBest = 0;
  endBest = this.step;

  constructor() {
    this.productService
      .getProducts()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((prod) => {
          this.slideDiscount = slide(prod.length, this.step);
          this.slideBest = slide(prod.length, this.step);
          this.slideNew = slide(prod.length, this.step);
        })
      )
      .subscribe((prod: Product[]) => (this.products = prod));
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
