import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  Component,
  Inject,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

import { PricePipe } from '@core/pipes/price.pipe';
import { randomAdv } from '@shared/tools/random-adv';
import { Product } from '@shared/models/product/product';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [NgClass, PricePipe],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent implements OnInit, OnDestroy {
  selectedIdx!: number;
  advProducts: Product[] = [];
  private timerId!: ReturnType<typeof setInterval>;
  private isBrowser!: boolean;
  products: InputSignal<Product[]> = input<Product[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.selectedIdx = 0;
  }

  ngOnInit(): void {
    this.advProducts = randomAdv(this.products());
    if (this.isBrowser) {
      this.autoPlay();
    }
  }

  autoPlay(): void {
    this.timerId = setInterval(
      () =>
        (this.selectedIdx = (this.selectedIdx + 1) % this.advProducts.length),
      3000
    );
  }

  stopAutoPlay() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  isActive(idx: number): void {
    this.selectedIdx = idx;
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }
}
