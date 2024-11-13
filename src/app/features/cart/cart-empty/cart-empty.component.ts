import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-cart-empty',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './cart-empty.component.html',
  styleUrl: './cart-empty.component.scss',
})
export class CartEmptyComponent {
  private router = inject(Router);
  iconCrying = 'assets/images/svg/iconCryingFace.svg';

  close() {
    this.router.navigate([{ outlets: { cart: null } }]);
  }
}
