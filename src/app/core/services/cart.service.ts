import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart, CartResponse } from '@shared/models/product/cart';
import { environment } from 'environments/environment';
import { catchError, map, Observable, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class CartService {
  private apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);
  private errorHandler = inject(ErrorHandlerService);

  getCart(): Observable<Cart> {
    return this.httpClient
      .get<CartResponse>(`${this.apiUrl}ShoppingCart?id=as12`)
      .pipe(
        map((res: CartResponse) => res.data),
        catchError(this.errorHandler.handleError<Cart>('Cart error'))
      );
  }

  addToCart(req: Cart): Observable<Cart> {
    return this.httpClient
      .post<CartResponse>(`${this.apiUrl}ShoppingCart`, req)
      .pipe(
        map((res: CartResponse) => res.data),
        catchError(this.errorHandler.handleError<Cart>("Wasn't added to cart"))
      );
  }
}
