import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, PreloadAllModules, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideNgxWebstorage, withSessionStorage } from 'ngx-webstorage';
import { provideOAuthClient } from 'angular-oauth2-oidc'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withPreloading(PreloadAllModules)),
  provideClientHydration(),
  provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
  provideNgxWebstorage(withSessionStorage()),
  provideOAuthClient(),
  // {
  //   provide: 'SocialAuthServiceConfig',
  //   useValue: {
  //     autoLogin: false,
  //     providers: [
  //       {
  //         id: GoogleLoginProvider.PROVIDER_ID,
  //         provider: new GoogleLoginProvider(
  //           '947828801124-8usg2d325e03v6ujig6rpjjtmcv32i1e.apps.googleusercontent.com'
  //         )
  //       },
  //     ],
  //     onError: (err) => {
  //       console.error(err);
  //     }
  //   } as SocialAuthServiceConfig,
  // }
  ]
};
