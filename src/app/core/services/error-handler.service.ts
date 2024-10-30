import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private alert = inject(AlertService);

  handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      if (typeof result === 'function') {
        console.log(result(error));
      }
      this.alert.clearAlert();
      this.alert.setAlert({
        message: error.error.title ? error.error.title : operation,
        status: 'warn',
      });
      console.error(error.error.title);
      console.error(error.error.errors.id[0]);
      return of(result as T);
    };
  }
}
