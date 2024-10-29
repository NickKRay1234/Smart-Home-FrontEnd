import { Component, inject, NgZone } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlMessagesComponent } from '../../../shared/control-messages/control-messages.component';
import { ValidationService } from '../../../core/services/validation.service';
import { AccountService } from '../../../core/services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-test-login',
  standalone: true,
  imports: [ReactiveFormsModule, ControlMessagesComponent, RouterLink],
  templateUrl: './test-login.component.html',
  styleUrl: './test-login.component.css'
})
export class TestLoginComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AccountService);
  private cookies = inject(SsrCookieService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  returnUrl = '';
  loginForm: any;

  constructor(private _ngZone: NgZone) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if (url) this.returnUrl = url;
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
    this.authService.login(this.loginForm).subscribe({
      next: (response) => {
        this.cookies.set('Authorization', `Bearer ${response.token}`, undefined, '/', undefined, true, 'Strict');
        this.authService.getUserInfo().subscribe({
          next: (user) => {
            this.authService.setStorageUser(user);
          }
        });
        this.router.navigateByUrl(this.returnUrl);
      },
      error(err: HttpErrorResponse) {
         alert(err.error.errorMessage);
      }
    });
  }

   async handleCredentialResponse(response: CredentialResponse) {
    this.authService.externalLogin({
       idToken: response.credential,
       provider: "google"
     }).subscribe({
       next: (resp) => {
        // if (resp.isAuthSuccessful = false) {
        //   this.showError = true;
        //   this.errorMessage = resp.errorMessage;
        // }

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
