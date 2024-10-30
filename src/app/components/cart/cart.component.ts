import { Component, inject } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { Cart } from '@shared/models/product/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService],
})
export class CartComponent {
  private cartService = inject(CartService);
  carts: Cart[] = [];
  closeIcon = 'assets/images/svg/tabler-icon-x.svg';

  constructor() {
    this.cartService.getCart().subscribe((cart: Cart[]) => (this.carts = cart));
  }

  close() {}
}
