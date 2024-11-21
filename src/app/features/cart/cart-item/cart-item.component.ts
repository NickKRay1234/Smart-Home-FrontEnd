import { Component, inject, input, InputSignal, output } from '@angular/core';
import { PricePipe } from '@core/pipes/price.pipe';
import { CartStorageService } from '@core/services/cart-storage.service';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { icons } from '@shared/configs/icons';
import { CartItems } from '@shared/models/product/cart';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [SvgIconComponent, PricePipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cart: InputSignal<CartItems | undefined> = input<CartItems | undefined>();
  updateCart = output<CartItems[]>();

  private cartStorage = inject(CartStorageService);

  icons = icons;

  deleteItem(prodId: number | undefined) {
    if (prodId) {
      this.cartStorage.deleteItemCartStorage(prodId);

      this.updateCart.emit(this.cartStorage.getCartStorage());
    }
  }

  decrease(productId: number | undefined) {
    if (productId) {
      this.cartStorage.decreaseCartStorage(productId);
      this.updateCart.emit(this.cartStorage.getCartStorage());
    }
  }

  increase(productId: number | undefined) {
    if (productId) {
      this.cartStorage.increaseCartStorage(productId);
      this.updateCart.emit(this.cartStorage.getCartStorage());
    }
  }
}
