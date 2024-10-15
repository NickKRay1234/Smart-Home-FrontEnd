import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookie = inject(SsrCookieService);

  if (req.urlWithParams.indexOf('addAuth=true', 0) > -1? true: false) {
    const authRequest = req.clone({
      setHeaders: {
        'Authorization': cookie.get('Authorization')
      }
    });

    return next(authRequest);
  }

  else {
    return next(req);
  }
};
