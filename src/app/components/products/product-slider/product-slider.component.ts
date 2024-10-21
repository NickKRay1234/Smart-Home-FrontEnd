import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent {
  isActive(idx: number) {}
}
