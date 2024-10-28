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
import { NgClass, NgIf } from '@angular/common';
import { PricePipe } from '@core/pipes/price.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CutStringPipe, SvgIconComponent, NgClass, NgIf, PricePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnChanges {
  productsInput: InputSignal<Product[]> = input.required();
  start: InputSignal<number> = input.required();
  end: InputSignal<number> = input.required();

  products: Product[] = [];
  currentImage = 0;
  currentIdx: number | null = null;
  heart = 'assets/images/svg/heart.svg';
  arrowLeft = 'assets/images/svg/left-arrow.svg';
  arrowRight = 'assets/images/svg/right-arrow.svg';

  onMouseEnter(i: number) {
    this.currentIdx = i;
  }

  onMouseLeave(i: number) {
    this.currentIdx = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productsInput()?.length) {
      this.products = this.productsInput()?.slice(this.start(), this.end());
    }
  }

  slideLeft(idx: number) {
    if (this.currentImage - 1 >= 1) {
      this.currentImage -= 1;
    } else {
      if (this.products?.length) {
        this.currentImage = this.products[idx].images.length - 1;
      }
    }
  }

  slideRight(idx: number) {
    if (
      this.products?.length &&
      this.currentImage + 1 < this.products[idx].images.length
    ) {
      this.currentImage += 1;
    } else {
      this.currentImage = 0;
    }
  }

  addFavorite(id: number, idx: number) {
    if (id === this.products[idx].productId && !this.products[idx].favorite) {
      this.products[idx].favorite = true;
    } else {
      this.products[idx].favorite = false;
    }
  }
}
