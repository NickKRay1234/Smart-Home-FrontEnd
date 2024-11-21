import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { CartItems } from '@shared/models/product/cart';
import { Product } from '@shared/models/product/product';
import { ProductStorageService } from './product-storage.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  private cartStorage: WritableSignal<CartItems[]> = signal<CartItems[]>([]);
  private total = signal(0);
  private productStorage = inject(ProductStorageService);
  private alertService = inject(AlertService);

  getCartStorage(): CartItems[] {
    return this.cartStorage();
  }

  setCartStorage(carts: CartItems[]): void {
    this.cartStorage.set(carts);
  }

  updateCartStorage(productItem: Product): void {
    this.cartStorage.update((carts: CartItems[]) => {
      let isInStor = false;
      carts.forEach((item: CartItems) => {
        if (item.productId === productItem.productId) {
          item.quantity += 1;
          item.price = productItem.productPrice * item.quantity;
          isInStor = true;
        }
      });

      return isInStor
        ? [...carts]
        : [
            ...carts,
            {
              productId: productItem.productId,
              productName: productItem.productName,
              price: productItem.productPrice,
              quantity: 1,
              pictureUrl: productItem.images[0].imageUrl,
              productPrice: productItem.productPrice,
            },
          ];
    });
  }

  decreaseCartStorage(productId: number) {
    this.cartStorage.update((items: CartItems[]) => {
      items.forEach((item) => {
        if (item.productId === productId) {
          if (item.quantity > 1) {
            const price = item.price / item.quantity;
            item.quantity -= 1;
            item.price = item.quantity * price;
          }
        }
      });
      this.countTotal(this.cartStorage());
      return [...items];
    });
  }

  increaseCartStorage(productId: number) {
    const inStock = this.productStorage
      .getProductsStorage()
      .find((prod) => prod.productId === productId)?.quantityInStock;

    this.cartStorage.update((items: CartItems[]) => {
      items.forEach((item) => {
        if (
          inStock &&
          inStock <= item.quantity &&
          productId === item.productId
        ) {
          this.alertService.setAlert({
            message: 'Досягнуто максимальної кількості',
            status: 'warn',
          });
        }
        if (inStock && inStock > item.quantity) {
          if (item.productId === productId) {
            const price = item.price / item.quantity;
            item.quantity += 1;
            item.price = item.quantity * price;
          }
        }
      });
      this.countTotal(this.cartStorage());
      return [...items];
    });
  }

  deleteItemCartStorage(prodId: number) {
    this.cartStorage.update((items) =>
      items.filter((item) => item.productId !== prodId)
    );

    this.countTotal(this.cartStorage());
  }

  countTotal(items: CartItems[]): void {
    const total = items.reduce((a, b) => a + b.price, 0);

    this.total.set(total);
  }

  getTotal(): number {
    return this.total();
  }
}
