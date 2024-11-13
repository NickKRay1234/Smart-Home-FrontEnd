import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '@core/services/cart.service';
import { CartItems } from '@shared/models/product/cart';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { Router } from '@angular/router';
import { PricePipe } from '@core/pipes/price.pipe';
import { CartEmptyComponent } from '../cart-empty/cart-empty.component';
import { CartStorageService } from '@core/services/cart-storage.service';
import { postCartReq } from '@shared/tools/post-cart-req';

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
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  iconClose = './assets/images/svg/tabler-icon-x.svg';

  carts: CartItems[] = [];
  total = 0;

  ngOnInit(): void {
    this.cartService
      .getCart()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((cart) => {
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

  makeOrder() {}
}
