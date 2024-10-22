import {
  Component,
  input,
  InputSignal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '@shared/models/product/product';
import { CutStringPipe } from '../../../core/pipes/cut-string.pipe';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CutStringPipe, SvgIconComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnChanges {
  productsInput: InputSignal<Product[]> = input.required();
  start: InputSignal<number> = input.required();
  end: InputSignal<number> = input.required();
  products: Product[] = [];
  currentImage = 0;
  heart = '/assets/images/svg/heart.svg';
  arrowLeft = '/assets/images/svg/left-arrow.svg';
  arrowRight = '/assets/images/svg/right-arrow.svg';

  ngOnChanges(changes: SimpleChanges): void {
    this.products = this.productsInput()?.slice(this.start(), this.end());
  }

  slideLeft(idx: number) {
    if (this.currentImage - 1 >= 1) {
      this.currentImage -= 1;
    } else {
      this.currentImage = this.products[idx].images.length - 1;
    }
  }

  slideRight(idx: number) {
    if (this.currentImage + 1 < this.products[idx].images.length) {
      this.currentImage += 1;
    } else {
      this.currentImage = 0;
    }
  }
}
