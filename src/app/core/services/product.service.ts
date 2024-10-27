import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { Product, ProductRes } from '../../shared/models/product/product';

@Injectable()
export class ProductService {
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductRes>(`${environment.apiUrl}Products?PageSize=100000`)
      .pipe(map((product: ProductRes) => product.data));
  }

  getDiscountProducts(): Observable<Product[]> {
    return this.http
      .get<ProductRes>(`${environment.apiUrl}Products?Sort=saleDesc`)
      .pipe(
        map((product: ProductRes) => {
          console.log(product);
          return product.data;
        })
      );
  }
}
