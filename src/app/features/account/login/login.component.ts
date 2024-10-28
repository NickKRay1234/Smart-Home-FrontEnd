import { Component, inject, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AccountService } from '../../../core/services/account.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../../../shared/models/account/login-request.model';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { environment } from '../../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private authService = inject(AccountService);
  private cookies = inject(SsrCookieService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  returnUrl = '';
  model: LoginRequest;
  errorMessage: any;
  showError: boolean = false;

  constructor(private _ngZone: NgZone) {
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if (url) this.returnUrl = url;
    this.model = {
      email: '', password: '', clientURI: ''
    };
  }

  ngOnInit(): void {
    // @ts-ignore 
    google.accounts.id.initialize({
      client_id: environment.clientId,
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
      use_fedcm_for_prompt: true
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById('google'),
      { type: 'icon', theme: "outline", size: "medium", shape: 'pill' }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => { });
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

   async handleCredentialResponse(response: CredentialResponse) {
    this.authService.externalLogin({
       idToken: response.credential,
       provider: "google"
     }).subscribe({
       next: (resp) => {
        if (resp.isAuthSuccessful = false) {
          this.showError = true;
          this.errorMessage = resp.errorMessage;
        }

         this.cookies.set('Authorization', `Bearer ${resp.token}`, undefined, '/', undefined, true, 'Strict');
         this.authService.sendAuthStateChangeNotification(resp.isAuthSuccessful);
         this.authService.getUserInfo().subscribe({
           next: (user) => {
             this.authService.setStorageUser(user);
           }
         });
         this._ngZone.run(() => {
           this.router.navigateByUrl(this.returnUrl);
         });
       }
     });
  }
}
