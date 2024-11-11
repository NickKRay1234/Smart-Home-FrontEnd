import {
  Component,
  DestroyRef,
  inject,
  input,
  InputSignal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

import { Product } from '@shared/models/product/product';
import { CutStringPipe } from '@core/pipes/cut-string.pipe';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { PricePipe } from '@core/pipes/price.pipe';
import { CartService } from '@core/services/cart.service';
import { postCartReq } from '@shared/tools/post-cart-req';
import { CartStorageService } from '@core/services/cart-storage.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CutStringPipe, SvgIconComponent, NgClass, PricePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [CartService],
})
export class ProductCardComponent implements OnChanges {
  productsInput: InputSignal<Product[]> = input.required();

  private cartService = inject(CartService);
  private cartStorage = inject(CartStorageService);
  private destroyRef = inject(DestroyRef);

  products: Product[] = [];
  currentImage = 0;
  currentIdx: number | null = null;
  heart = 'assets/images/svg/heart.svg';
  arrowLeft = 'assets/images/svg/left-arrow.svg';
  arrowRight = 'assets/images/svg/right-arrow.svg';
  stars = [
    'assets/images/svg/star-fill.svg',
    'assets/images/svg/star-fill.svg',
    'assets/images/svg/star-fill.svg',
    'assets/images/svg/star-fill.svg',
    'assets/images/svg/star.svg',
  ];
  rating = Math.floor(500 / 115);
  color = '#FADC93';
  iconUrl = 'url(#gradient)';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productsInput()?.length) {
      this.products = this.productsInput();
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

  addToCart(idx: number): void {
    this.cartStorage.updateCartStorage(this.products[idx]);

    this.cartService
      .addToCart(postCartReq(this.cartStorage.getCartStorage()))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
