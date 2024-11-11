import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { Cart, CartResponse } from '@shared/models/product/cart';
import { environment } from 'environments/environment';
import { catchError, map, Observable, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class CartService {
  private apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);
  private errorHandler = inject(ErrorHandlerService);
  private destroyRef = inject(DestroyRef);

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

  deleteCart(id: string): void {
    this.httpClient
      .delete(`${this.apiUrl}ShoppingCart?id=${id}`)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((res) => console.log(res))
      )
      .subscribe();
  }
}
