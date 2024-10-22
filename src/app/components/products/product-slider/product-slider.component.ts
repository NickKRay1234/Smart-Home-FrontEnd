import { NgClass } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
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
export class ProductSliderComponent implements AfterViewInit, OnDestroy {
  advProducts: AdvSlider[] = advSlider;
  advCurrentProduct: AdvSlider = this.advProducts[0];
  selectedIdx = 0;
  interval = 3000;
  private autoPlayInterval!: ReturnType<typeof setInterval>;

  constructor(private changeRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.autoPlay();
  }

  isActive(idx: number): void {
    this.selectedIdx = idx;
    this.advCurrentProduct = this.advProducts[idx];
  }

  private play(): void {
    if (this.selectedIdx >= this.advProducts.length - 1) {
      this.selectedIdx = 0;
    } else {
      this.selectedIdx++;
    }
    this.advCurrentProduct = this.advProducts[this.selectedIdx];
  }

  autoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.play();
      clearInterval(this.autoPlayInterval);
    }, this.interval);
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
