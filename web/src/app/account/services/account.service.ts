import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiResponse } from 'src/app/core/models/api-response';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { NewPasswordFormModel } from '../models/new-password-form-model';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) { }

  public getProfileData(): Observable<ApiResponse> {
    return this.http.get(environment.baseApiUrl + Endpoints.PROFILE).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on Account Request\nError -> ${err}`);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  public changePassword(newPassword: NewPasswordFormModel): Observable<ApiResponse> {
    return this.http.put(environment.baseApiUrl + Endpoints.PROFILE_PASSWORD, {
      password: newPassword.new_password,
      oldPassword: newPassword.old_password,
      password_confirmation: newPassword.password_confirmation
    }).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on Account Update Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    )
  }
}
