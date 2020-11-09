import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { Strings } from '../../constants/strings';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authService.logout();
          location.reload(true);
        }

        if (err.statusText == 'Unknown Error') err.message = Strings.DEFAULT_ERROR_MESSAGE

        return throwError(err);
      })
    )
  }
}
