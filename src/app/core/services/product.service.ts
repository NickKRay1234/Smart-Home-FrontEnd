import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { Product, ProductRes } from '../../shared/models/product/product';

@Injectable()
export class ProductService {
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductRes>(`${environment.apiUrl}/api/Products?saleDesc`)
      .pipe(map((product: ProductRes) => product.data));
  }
}
