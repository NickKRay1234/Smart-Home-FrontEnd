import {
  Component,
  input,
  InputSignal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../../shared/models/product/product';
import { CutStringPipe } from '../../../core/pipes/cut-string.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CutStringPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnChanges {
  productsInput: InputSignal<Product[]> = input.required();
  start: InputSignal<number> = input.required();
  end: InputSignal<number> = input.required();
  products: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.products = this.productsInput()?.slice(this.start(), this.end());

    for (const change in changes) {
      const current = changes[change].currentValue;
      if (!isNaN(current)) {
        console.log(current);
      }
    }
  }
}
