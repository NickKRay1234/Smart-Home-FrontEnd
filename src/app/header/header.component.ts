import { Component, inject, NgZone, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { User } from '../shared/models/account/user';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private _ngZone: NgZone) {}
  user?: User;

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (response) => {
        this.user = response;
      }
    });

    this.user = this.authService.retrieveStorageUser();
  }

  private router = inject(Router);
  authService = inject(AccountService);

  onLogout() {
    this.authService.logout();
    this._ngZone.run(() => {
      this.router.navigate(['/']).then(() => window.location.reload())
    })
  }
}
