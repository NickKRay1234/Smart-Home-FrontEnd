import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '@shared/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductStorageService {
  private products: WritableSignal<Product[]> = signal<Product[]>([]);

  setProductStorage(products: Product[]): void {
    this.products.set(products);
  }

  getProductsStorage(): Product[] {
    return this.products();
  }

  findProductStorageById(id: number): Product | undefined {
    return this.products().find((prod) => prod.productId === id);
  }
}
