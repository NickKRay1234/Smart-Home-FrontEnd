import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartItems } from '@shared/models/product/cart';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  private items: WritableSignal<CartItems[]> = signal([]);

  updateItems(values: CartItems) {
    this.items.update((i) => [...i, values]);
  }

  clearCartItems() {
    this.items.set([]);
  }

  getCartItems() {
    return this.items();
  }
}
