import { NgClass } from '@angular/common';
import {
  ApplicationRef,
  Component,
  Inject,
  InjectionToken,
  OnInit,
  signal,
} from '@angular/core';

import { AdvSlider, advSlider } from '@shared/configs/adv-slider.config';
import { PricePipe } from '@core/pipes/price.pipe';
import { first } from 'rxjs';

const store = new InjectionToken<AdvSlider[]>('Storage', {
  providedIn: 'root',
  factory: () => advSlider,
});
@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [NgClass, PricePipe],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent implements OnInit {
  selectedIdx = 0;

  constructor(
    @Inject(store) public advProducts: AdvSlider[],
    private appRef: ApplicationRef
  ) {
    this.advProducts = advSlider;
  }

  ngOnInit(): void {
    this.appRef.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      setInterval(
        () =>
          (this.selectedIdx = (this.selectedIdx + 1) % this.advProducts.length),
        500
      );
    });
  }

  isActive(idx: number): void {
    this.selectedIdx = idx;
  }
}
