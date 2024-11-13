import { Component, effect, inject, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { AlertService } from '@core/services/alert.service';
import { NgClass } from '@angular/common';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, NgClass, SvgIconComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class AppLayoutComponent implements OnDestroy {
  alert = inject(AlertService);
  iconClose = 'assets/images/svg/tabler-icon-x.svg';
  private timeoutId!: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      if (this.alert.getAlert().message) {
        this.timeoutId = setTimeout(() => this.close(), 3000);
      }
    });
  }

  close(): void {
    this.alert.clearAlert();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
