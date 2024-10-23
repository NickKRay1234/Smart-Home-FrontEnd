import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { AdvSlider, advSlider } from '@shared/configs/adv-slider.config';
import { PricePipe } from '@core/pipes/price.pipe';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [NgClass, PricePipe],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent {
  @Input() autoSlide = false;

  advProducts: AdvSlider[] = advSlider;
  advCurrentProduct: AdvSlider = this.advProducts[0];
  selectedIdx = 0;

  isActive(idx: number): void {
    this.selectedIdx = idx;
    this.advCurrentProduct = this.advProducts[idx];
  }
}
