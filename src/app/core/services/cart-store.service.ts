import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartItems } from '@shared/models/product/cart';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  private items: WritableSignal<CartItems[]> = signal([]);

  updateItems(values: CartItems, action: 'add' | 'remove') {
    this.items.update((i) => {
      i.forEach((item) => {
        if (action === 'remove' && item.productId === values.productId) {
          item.quantity -= 1;
          item.price -= item.price / item.quantity;
        }

        if (action === 'add' && item.productId === values.productId) {
          item.quantity += 1;
          item.price += item.price;
        }
      });

      return [...i, values];
    });
  }

  clearCartItems() {
    this.items.set([]);
  }

  getCartItems() {
    return this.items();
  }
}
