import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart } from '@shared/models/product/cart';
import { subscribe } from 'diagnostics_channel';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private http = inject(HttpClient);

  checkOut(cart: Cart) {
    this.http
      .post(`${environment.apiUrl}Payments/cartId?cartId=${cart.id}`, cart)
      .subscribe((res) => console.log(res));
  }
}
