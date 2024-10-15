import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AccountService } from '../../../core/services/account.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '../../../shared/models/account/login-request.model';
import { ExternalAuth } from '../../../shared/models/account/external-auth.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AccountService);
  private cookies = inject(SsrCookieService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  returnUrl = '';
  model: LoginRequest;
  errorMessage: string = '';
  showError: boolean = false;

  constructor() {
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if (url) this.returnUrl = url;
    this.model = {
      email: '', password: '', clientURI: ''
    };
  }

  onFormSubmit() {
    this.authService.isExternalAuth = false;
    this.authService.login(this.model).subscribe({
      next: (response) => {
        this.cookies.set('Authorization', `Bearer ${response.token}`, undefined, '/', undefined, true, 'Strict');
        this.authService.getUserInfo().subscribe({
          next: (user) => {
            this.authService.setStorageUser(user);
          }
        });
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }

  externalLogin = () => {
    this.showError = false;
    this.authService.signInGoogle();
    const externalAuth: ExternalAuth = {
      provider: 'Google',
      idToken: this.authService.getToken()
    };
    // this.validateExternalAuth(externalAuth);
    this.cookies.set('test', externalAuth.idToken);
  }

  // private validateExternalAuth(externalAuth: ExternalAuth) {
  //   this.authService.externalLogin(externalAuth).subscribe({
  //     next: (response) => {
  //       this.cookies.set('Authorization', `Bearer ${response.token}`, undefined, '/', undefined, true, 'Strict');
  //       this.authService.sendAuthStateChangeNotification(response.isAuthSuccessful);
  //       this.authService.getUserInfo().subscribe({
  //         next: (user) => {
  //           this.authService.setStorageUser(user);
  //         }
  //       });
  //       this.router.navigateByUrl(this.returnUrl);
  //     },

  //     error: (err: HttpErrorResponse) => {
  //       this.errorMessage = err.message;
  //       this.showError = true;
  //       this.authService.signOutExternal();
  //     }
  //   });
  // }
}
