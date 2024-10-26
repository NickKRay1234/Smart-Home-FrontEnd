import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart } from '@shared/models/product/cart';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {
  private apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  getCart(): Observable<Cart> {
    return this.httpClient.get<Cart>(`${this.apiUrl}ShoppingCart`);
  }
}
