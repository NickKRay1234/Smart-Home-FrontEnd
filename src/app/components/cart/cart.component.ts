import { Component, inject } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Cart } from '@shared/models/product/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService],
})
export class CartComponent {
  private cartService = inject(CartService);
  carts: Cart[] = [];

  constructor() {
    this.cartService.getCart().subscribe((cart: Cart[]) => (this.carts = cart));
  }
}
