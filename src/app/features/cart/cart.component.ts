import { Component, inject } from '@angular/core';
import { PricePipe } from '@core/pipes/price.pipe';
import { CartService } from '@core/services/cart.service';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { Cart, CartItems } from '@shared/models/product/cart';
import { localStorDel, totalInCart } from '@shared/tools/localStor';
import { postCartReq } from '@shared/tools/post-cart-req';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SvgIconComponent, PricePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers: [CartService],
})
export class CartComponent {
  private cartService = inject(CartService);

  carts: CartItems[] = [];
  total = 0;
  closeIcon = 'assets/images/svg/tabler-icon-x.svg';
  deleteIcon = 'assets/images/svg/tabler-icon-trash.svg';
  minusIcon = 'assets/images/svg/tabler-icon-minus.svg';
  plusIcon = 'assets/images/svg/tabler-icon-plus.svg';

  constructor() {
    this.cartService.getCart().subscribe((cart: Cart) => {
      this.carts = cart.items;
      localStorage.setItem('items', JSON.stringify(this.carts));
      console.log(JSON.parse(localStorage.getItem('items')!));
      this.total = totalInCart();
    });
  }

  close() {}

  deleteItem(idx: number) {
    this.carts = localStorDel(this.carts[idx]);
    this.cartService.addToCart(postCartReq(this.carts));
  }

  decrease(quantity: number, idx: number) {
    if (quantity - 1 > 0) {
      this.carts[idx].quantity = quantity - 1;
      this.total = totalInCart();
    } else {
      this.carts[idx].quantity = 1;
      this.total = totalInCart();
    }
  }

  increase(quantity: number, idx: number) {
    this.carts[idx].quantity = quantity + 1;
    this.total = totalInCart();
  }
}