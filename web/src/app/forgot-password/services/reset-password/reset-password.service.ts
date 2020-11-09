import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { ApiResponse } from 'src/app/core/models/api-response';

@Injectable()
export class ResetPasswordService {
  private readonly _REDIRECT_URL_TOKEN_KEY = `${environment.pcviUrl}forgot-password/step-3`

  constructor(private http: HttpClient) { }

  public sendToken(email: string): Observable<ApiResponse> {
    return this.http.post(environment.baseApiUrl + Endpoints.LOGIN_RESET_PASSWORD, { email: email, redirect_url: this._REDIRECT_URL_TOKEN_KEY }).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on Reset Pswd Request\nError -> ${err}`);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    )
  }

  public resetPassword(pswd: string, token: string): Observable<ApiResponse> {
    return this.http.put(environment.baseApiUrl + Endpoints.LOGIN_RESET_PASSWORD, { password: pswd, token: token }).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on Reset Pswd Request\nError-> ${err}`);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    )
  }
}
