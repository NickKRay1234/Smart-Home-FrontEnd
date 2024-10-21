import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { SessionStorageService } from 'ngx-webstorage';
import { environment } from '../../../environments/environment.development';
import { Address } from 'cluster';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { LoginRequest } from '../../shared/models/account/login-request.model';
import { LoginResponse } from '../../shared/models/account/login-response.model';
import { User } from '../../shared/models/account/user';
import { ExternalAuth } from '../../shared/models/account/external-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private cookies = inject(SsrCookieService);
  private session = inject(SessionStorageService);
  private http = inject(HttpClient);
  private location = inject(Location);

  private authChangeSub = new Subject<boolean>();
  
  authChanged = this.authChangeSub.asObservable();
  isExternalAuth: boolean = false;

  private baseUrl = environment.apiUrl;
  $user = new BehaviorSubject<User | undefined>(undefined);
  token: string = '';

  sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  externalLogin(request: ExternalAuth): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + 'accounts/ExternalLogin', {
      provider: request.provider,
      idToken: request.idToken
    });
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + 'accounts/login', {
      email: request.email,
      password: request.password,
      clientURI: this.location.path()
    });
  }

  register(values: any) {
    return this.http.post(this.baseUrl + 'accounts/registration', values)
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'accounts/user-info/?addAuth=true').pipe(map(user => {
      this.$user.next(user);
      return user;
    }));
  }

  setStorageUser(user: User) {
    this.$user.next(user);
    this.session.store('email', user.email);
    this.session.store('roles', user.roles);
    this.session.store('name', user.firstName);
    this.session.store('last', user.lastName);
  }

  retrieveStorageUser(): User | undefined {
    const email = this.session.retrieve('email');
    const roles = this.session.retrieve('roles');
    const name = this.session.retrieve('name');
    const last = this.session.retrieve('last');

    if (email && roles) {
      const user: User = {
        firstName: name!,
        lastName: last!,
        email: email,
        roles: roles?.split(',')
      }

      return user;
    }

    return undefined;
  }

  updateAddress(address: Address) {
    return this.http.post(this.baseUrl + 'accounts/address', address);
  }

  user(): Observable<User | undefined> {
    return this.$user.asObservable();
  }

  logout() {
    this.cookies.delete('Authorization', '/');
    this.session.clear();
    this.$user.next(undefined);
    this.sendAuthStateChangeNotification(false);
  }
}
