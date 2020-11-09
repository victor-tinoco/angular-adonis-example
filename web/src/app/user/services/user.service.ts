import { Observable, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFormModel } from '../models/user-form-model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  public getAll(page: number = 1): Observable<ApiResponse> {
    return this.http.get(environment.baseApiUrl + Endpoints.USERS, {
      params: new HttpParams()
        .set('page', page.toString())
    }).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list User Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  public get(id: number): Observable<ApiResponse> {
    return this.http.get(environment.baseApiUrl + Endpoints.USERS + `/${id}`).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on show User Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  public update(id: number, user: UserFormModel): Observable<ApiResponse> {
    return this.http.put(environment.baseApiUrl + Endpoints.USERS + `/${id}`, user).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on User Update Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    )
  }

  public create(user: UserFormModel): Observable<ApiResponse> {
    return this.http.post(environment.baseApiUrl + Endpoints.USERS, user).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on User Add Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    )
  }
}
