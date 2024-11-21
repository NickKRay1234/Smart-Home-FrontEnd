import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { icons } from '@shared/configs/icons';

@Component({
  selector: 'app-cart-empty',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './cart-empty.component.html',
  styleUrl: './cart-empty.component.scss',
})
export class CartEmptyComponent {
  private router = inject(Router);
  icons = icons;

  close() {
    this.router.navigate([{ outlets: { cart: null } }]);
  }
}
