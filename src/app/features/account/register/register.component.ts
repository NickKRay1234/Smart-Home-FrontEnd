import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { RegisterRequest } from '../../../shared/models/account/register-request.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AccountService);

  returnUrl = '';
  model: RegisterRequest;
  validationErrors?: string[];
  showError: boolean = false;

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
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (err) => {
        this.showError = true;
        this.validationErrors = err.error;
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
