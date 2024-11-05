import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { RegisterRequest } from '../../../shared/models/account/register-request.model';
import { FormsModule } from '@angular/forms';
import { AccountInteractionComponent } from '../account-interaction/account-interaction.component';
import { log } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, AccountInteractionComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AccountService);

  returnUrl = '';
  model: RegisterRequest;
  validationEmail?: string[];
  validationPassword?: string[];
  showError: boolean = false;
  emailConfirm: boolean = false;

  constructor() {
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if (url) this.returnUrl = url;
    this.model = {
      firstName: '', lastName: '', email: '', password: '', clientURI: ''
    };
  }

  onFormSubmit() {
    var space = this.findSpace(this.model.firstName);
    var name = this.splitUsername(this.model.firstName, 0, space);
    var surname = this.splitUsername(this.model.firstName, space);

    this.model.firstName = name;
    this.model.lastName = surname;

    this.authService.register(this.model).subscribe({
      next: (response) => {
        //add shared component;
        //this.router.navigateByUrl('/email');
        if (response.isSuccessfullRegistration === true) this.emailConfirm = true;
      },
      error: (err) => {
        if (err.error.errors?.Email) this.validationEmail = err.error.errors.Email;
        if (err.error.errors?.Password) this.validationPassword = err.error.errors.Password;
        this.showError = true;
      }
    });
  }

  private findSpace(user: string) {
    var index = user.search(" ");
    return index;
  }

  private splitUsername(user: string, start: number, end?: number) {
    return user.substring(start, end);
  }
}
