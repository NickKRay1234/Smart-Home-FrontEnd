import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

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
  advProducts: AdvSlider[] = advSlider;
  advCurrentProduct: AdvSlider = this.advProducts[0];
  selectedIdx = 0;
  private intervalId!: ReturnType<typeof setInterval>;

  ngOnInit(): void {}

  autoPlay(): void {
    this.intervalId = setInterval(() => {
      if (this.selectedIdx >= this.advProducts.length) {
        this.selectedIdx = 0;
        this.advCurrentProduct = this.advProducts[this.selectedIdx];
      } else {
        this.selectedIdx++;
        this.advCurrentProduct = this.advProducts[this.selectedIdx];
      }
    }, 3000);
  }

  isActive(idx: number): void {
    this.selectedIdx = idx;
    this.advCurrentProduct = this.advProducts[idx];
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
