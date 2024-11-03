import { Component, inject } from '@angular/core';
import { PricePipe } from '@core/pipes/price.pipe';
import { CartStoreService } from '@core/services/cart-store.service';
import { CartService } from '@core/services/cart.service';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { Cart, CartItems } from '@shared/models/product/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SvgIconComponent, PricePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService],
})
export class CartComponent {
  private cartService = inject(CartService);

  carts: CartItems[] = [];
  closeIcon = 'assets/images/svg/tabler-icon-x.svg';
  deleteIcon = 'assets/images/svg/tabler-icon-trash.svg';
  minusIcon = 'assets/images/svg/tabler-icon-minus.svg';
  plusIcon = 'assets/images/svg/tabler-icon-plus.svg';

  constructor() {
    this.cartService.getCart().subscribe((cart: Cart) => {
      this.carts = cart.items;
      console.log(cart);
    });
  }

  close() {}
}
