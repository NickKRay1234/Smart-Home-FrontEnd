import { Component, input, InputSignal } from '@angular/core';
import { Product } from '../../../shared/models/product/product';
import { CutStringPipe } from '../../../core/pipes/cut-string.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CutStringPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  products: InputSignal<Product[] | null> = input.required();
}
