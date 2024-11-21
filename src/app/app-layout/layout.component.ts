import { Component, effect, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class AppLayoutComponent implements OnDestroy {
  alert = inject(AlertService);
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
