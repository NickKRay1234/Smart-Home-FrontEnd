import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { CartService } from '@core/services/cart.service';
import { Cart, CartItems } from '@shared/models/product/cart';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { PricePipe } from '@core/pipes/price.pipe';
import { CartEmptyComponent } from '../cart-empty/cart-empty.component';
import { CartStorageService } from '@core/services/cart-storage.service';
import { postCartReq } from '@shared/tools/post-cart-req';
import { icons } from '@shared/configs/icons';
import { CheckoutService } from '@core/services/checkout.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CartEmptyComponent, SvgIconComponent, PricePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers: [CartService],
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);
  private cartStorage = inject(CartStorageService);
  private checkOutService = inject(CheckoutService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private cart!: Cart;
  icons = icons;

  carts: CartItems[] = [];
  total = 0;

  ngOnInit(): void {
    this.cartService
      .getCart()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((cart) => {
        this.cart = cart;
        this.cartStorage.setCartStorage(cart.items);
        this.carts = this.cartStorage.getCartStorage();
        this.cartStorage.countTotal(this.carts);
        this.total = this.cartStorage.getTotal();
      });
  }

  updateItem(event: CartItems[]) {
    this.cartService
      .addToCart(postCartReq(event))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();

    this.cartStorage.countTotal(this.cartStorage.getCartStorage());
    this.total = this.cartStorage.getTotal();
    this.carts = this.cartStorage.getCartStorage();
  }

  close() {
    this.router.navigate([{ outlets: { cart: null } }]);
  }

  makeOrder() {
    console.log(this.cart);
    this.checkOutService.checkOut(this.cart);
  }
}
