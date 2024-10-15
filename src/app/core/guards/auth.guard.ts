import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AccountService } from "../services/account.service";
import { jwtDecode } from 'jwt-decode'
import { SsrCookieService } from "ngx-cookie-service-ssr";

export const authGuard: CanActivateFn = (route, state) => {
    const cookie = inject(SsrCookieService);
    const authService = inject(AccountService);
    const router = inject(Router);
    const user = authService.retrieveStorageUser();

    let token = cookie.get('Authorization');

    if (token && user) {
        token = token.replace('Bearer ', '');
        const decodedToken: any = jwtDecode(token);

        const expDate = decodedToken.exp * 1000;
        const currentTime = new Date().getTime();

        if (expDate < currentTime) {
            authService.logout();
            return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
        }

        else {
            if (user.roles.includes('Admin')) return true;

            else {
                alert('Unauthorized');
                return false;
            }
        }
    }

    else {
        authService.logout();
        return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
    }
};