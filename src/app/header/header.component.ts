import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { User } from '../shared/models/account/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {  

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
    this.router.navigateByUrl('/');
  }
}
