import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable } from 'rxjs';
import { Product, ProductRes } from '../../shared/models/product/product';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class ProductService {
  private http = inject(HttpClient);
  private errorHandler = inject(ErrorHandlerService);

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductRes>(`${environment.apiUrl}Products`).pipe(
      map((product: ProductRes) => product.data),
      catchError(
        this.errorHandler.handleError<Product[]>('Помилка отримання продуктів!')
      )
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<ProductRes>(`${environment.apiUrl}Products?PageSize=50`)
      .pipe(
        map((product: ProductRes) => product.data),
        catchError(
          this.errorHandler.handleError<Product[]>(
            'Помилка отримання продуктів!'
          )
        )
      );
  }

  getDiscountProducts(): Observable<Product[]> {
    return this.http
      .get<ProductRes>(`${environment.apiUrl}Products?Sort=saleDesc`)
      .pipe(
        map((product: ProductRes) => {
          return product.data.filter((p) => p.productDiscount !== 0);
        }),
        catchError(
          this.errorHandler.handleError<Product[]>(
            'Помилка отримання продуктів зі знижкою!'
          )
        )
      );
  }
}
