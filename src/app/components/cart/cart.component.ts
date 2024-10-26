import { Component, inject } from '@angular/core';
import { CartService } from '@core/services/cart.service';

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

  constructor() {
    this.cartService.getCart().subscribe((cart) => console.log(cart));
  }
}
