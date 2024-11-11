import { Component } from '@angular/core';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-cart-empty',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './cart-empty.component.html',
  styleUrl: './cart-empty.component.scss',
})
export class CartEmptyComponent {
  iconCrying = 'assets/images/svg/iconCryingFace.svg';
}
