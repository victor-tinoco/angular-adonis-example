import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../../models/login-model';
import { AuthTokenModel } from '../../models/auth-token-model';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { ApiResponse } from 'src/app/core/models/api-response';

@Injectable()
export class AuthService {
  private readonly _TOKEN_KEY = 'authentication';
  private _currentUser?: AuthTokenModel;
  // when guard redirect to login he back to last accessed page with this var bellow
  public redirectURL: string;

  constructor(private http: HttpClient) {
    this._currentUser = JSON.parse(localStorage.getItem(this._TOKEN_KEY));
  }

  public get currentUser(): AuthTokenModel {
    return JSON.parse(localStorage.getItem(this._TOKEN_KEY));
  }

  public login(user: LoginModel): Observable<ApiResponse> {
    return this.http.post(environment.baseApiUrl + Endpoints.SESSION, user).pipe(
      map(
        data => {
          let res = ApiResponse.fromJSON(data)
          if (res.data) localStorage.setItem(this._TOKEN_KEY, JSON.stringify(res.data));
          return res
        }),
      catchError(
        err => {
          console.log(`Has ocurred error on Login Request\nError -> ${err}`);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  public logout(): void {
    this._currentUser = null;
    localStorage.removeItem(this._TOKEN_KEY);
    location.reload(true);
  }
}
