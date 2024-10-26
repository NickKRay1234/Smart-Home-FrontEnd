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
import { AsyncPipe } from '@angular/common';
import { Product } from '@shared/models/product/product';
import { slide } from '@shared/tools/slide';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductSliderComponent, ProductCardComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);
  private slideDiscount: any;
  private slideNew: any;
  private slideBest: any;
  private step = 5;

  products!: Product[] | undefined;

  startDisc = 0;
  endDisc = this.step;
  startNew = 0;
  endNew = this.step;
  startBest = 0;
  endBest = this.step;

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
      .subscribe((prod: Product[]) => (this.products = prod));
  }

  resize(prod: Product[], width: number) {
    if (width > 1280 && prod?.length) {
      this.step = 5;
      this.slideDiscount = slide(prod.length, this.step);
      this.slideBest = slide(prod.length, this.step);
      this.slideNew = slide(prod.length, this.step);
    } else if (width > 744 && prod?.length) {
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
