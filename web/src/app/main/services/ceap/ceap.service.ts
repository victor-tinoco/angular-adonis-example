import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response';
import { environment } from 'src/environments/environment';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CeapService {
  constructor(private http: HttpClient) { }

  public getAll(page: number = 1): Observable<ApiResponse> {
    return this.http.get(environment.baseApiUrl + Endpoints.CEAP, {
      params: new HttpParams()
        .set('page', page.toString())
    }).pipe(
      map(
        data => {
          return ApiResponse.fromJSON(data)
        }
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list Ceap Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }
}
