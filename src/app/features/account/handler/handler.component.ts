import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalAuth } from '../../../shared/models/account/external-auth.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-handler',
  standalone: true,
  imports: [],
  templateUrl: './handler.component.html',
  styleUrl: './handler.component.css'
})
export class HandlerComponent implements OnInit {
  private authService = inject(AccountService);
  private cookies = inject(SsrCookieService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  externalAuth: ExternalAuth = {
    provider: 'Google',
    idToken: this.cookies.get('test')
  }

  returnUrl = '';
  errorMessage: string = '';
  showError: boolean = false;

  constructor() {
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if (url) this.returnUrl = url;
  }
  ngOnInit(): void {
    this.validateExternalAuth(this.externalAuth);
  }

  private validateExternalAuth(externalAuth: ExternalAuth) {
    externalAuth = {
      provider: 'Google',
      idToken: this.cookies.get('test')
    };
    this.authService.externalLogin(externalAuth).subscribe({
      next: (response) => {
        this.cookies.set('Authorization', `Bearer ${response.token}`, undefined, '/', undefined, true, 'Strict');
        this.authService.sendAuthStateChangeNotification(response.isAuthSuccessful);
        this.authService.getUserInfo().subscribe({
          next: (user) => {
            this.authService.setStorageUser(user);
          }
        });
        this.router.navigateByUrl(this.returnUrl);
      },

      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
        this.authService.signOutExternal();
      }
    });
  }
}
