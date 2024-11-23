import { Component, HostListener, inject, NgZone, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccountService } from '../core/services/account.service';
import { User } from '../shared/models/account/user';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { icons } from '../shared/configs/icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    SvgIconComponent,
    FormsModule,
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private _ngZone: NgZone) {}
  user?: User;
  icons = icons;
  activeSearch = false;
  inputSearch = '';
  isCollapsed = false;

  @HostListener('click', ['$event.target']) onClick(event: HTMLElement) {
    const values = Object.values(event.classList);
    if (values.includes('input__search')) {
      this.activeSearch = true;
    }
  }

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (response) => {
        this.user = response;
      },
    });

    this.user = this.authService.retrieveStorageUser();
  }

  private router = inject(Router);
  authService = inject(AccountService);

  onLogout() {
    this.authService.logout();
    this._ngZone.run(() => {
      this.router.navigate(['/']).then(() => window.location.reload());
    });
  }

  search() {
    this.activeSearch = !this.activeSearch;
    if (this.inputSearch) {
      console.log(this.inputSearch);
      this.inputSearch = '';
    }
  }

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
