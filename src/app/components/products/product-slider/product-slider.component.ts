import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

import { AdvSlider, advSlider } from '@shared/configs/adv-slider.config';
import { PricePipe } from '@core/pipes/price.pipe';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [NgClass, PricePipe],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent implements OnInit, OnDestroy {
  selectedIdx!: number;
  advProducts: AdvSlider[] = [];
  private timerId!: ReturnType<typeof setInterval>;
  private isBrowser!: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.advProducts = advSlider;
    this.selectedIdx = 0;
  }

  ngOnInit(): void {
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