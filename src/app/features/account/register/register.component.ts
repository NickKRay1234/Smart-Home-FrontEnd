import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { RegisterRequest } from '../../../shared/models/account/register-request.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AccountService);

  returnUrl = '';
  model: RegisterRequest;
  errorMessage: any;
  showError: boolean = false;

  constructor() {
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if (url) this.returnUrl = url;
    this.model = {
      firstName: '', lastName: '', email: '', password: '', clientURI: ''
    };
  }

  onFormSubmit() {
    this.authService.register(this.model).subscribe({
      next: (response) => {
        if (response.isSuccessfullRegistration = false) {
          this.showError = true;
          this.errorMessage = response.errors;
        }
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }
}
