import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { AuxiliaryFieldModel } from '../../models/auxiliary-field-model';
import { Endpoints } from 'src/app/core/constants/endpoints';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { toCamel } from 'src/app/core/utils/toCamel';

@Injectable()
export class FieldService {
  get auxiliaryFieldsCategories() { return auxiliaryFieldsCategories }

  constructor(
    private http: HttpClient,
  ) { }

  getPaginatedFieldList(forKey: string, page: number): Observable<ApiResponse> {
    const pathModel = auxiliaryFields[toCamel(forKey)]
    var params = !page ? null : {
      params: new HttpParams()
        .set('page', page.toString())
    }
    return this.http.get(environment.baseApiUrl + pathModel.endpoint, params).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list common field Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  getField(forKey: string, id: number): Observable<ApiResponse> {
    const pathModel = auxiliaryFields[toCamel(forKey)]
    return this.http.get(environment.baseApiUrl + pathModel.endpoint + `/${id}`).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list common field Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  updateField(forKey: string, id: number, field: any): Observable<ApiResponse> {
    const pathModel = auxiliaryFields[toCamel(forKey)]
    return this.http.put(environment.baseApiUrl + pathModel.endpoint + `/${id}`, field).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list common field Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  createField(forKey: string, field: any): Observable<ApiResponse> {
    const pathModel = auxiliaryFields[toCamel(forKey)]
    return this.http.post(environment.baseApiUrl + pathModel.endpoint, field).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list common field Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }

  deleteField(forKey: string, id: number): Observable<ApiResponse> {
    const pathModel = auxiliaryFields[toCamel(forKey)]
    return this.http.delete(environment.baseApiUrl + pathModel.endpoint + `/${id}`).pipe(
      map(
        data => ApiResponse.fromJSON(data)
      ),
      catchError(
        err => {
          console.log(`Has ocurred error on list common field Request`, err);
          return throwError(ApiResponse.fromJSON(err.error))
        }
      )
    );
  }
}

const auxiliaryFields: { [Key: string]: AuxiliaryFieldModel } = {
  job: { name: 'Cargo / Função', endpoint: Endpoints.JOBS, path: RoutePath.job },
  institution: { name: 'Instituição', endpoint: Endpoints.INSTITUTIONS, path: RoutePath.institution },
  ocupation: { name: 'Ocupação', endpoint: Endpoints.OCUPATIONS, path: RoutePath.ocupation },
  religion: { name: 'Religião (Credo)', endpoint: Endpoints.RELIGIONS, path: RoutePath.religion },
  nationality: { name: 'Nacionalidade', endpoint: Endpoints.NATIONALITIES, path: RoutePath.nationality },
  conduct: { name: 'Conduta', endpoint: Endpoints.CONDUCTS, path: RoutePath.conduct },
  instrument: { name: 'Meio ou Instrumento', endpoint: Endpoints.INSTRUMENTS, path: RoutePath.instrument },
  crime: { name: 'Tipo de Crime', endpoint: Endpoints.CRIMES, path: RoutePath.crime },
  natureLesion: { name: 'Natureza', endpoint: Endpoints.NATURE_LESION, path: RoutePath.natureLesion },
  source: { name: 'Tipo de Fonte', endpoint: Endpoints.SOURCE_KINDS, path: RoutePath.sourceType },
  deponent: { name: 'Tipo de Depoente', endpoint: Endpoints.DEPONENT_KINDS, path: RoutePath.deponentType },
  article: { name: 'Artigos', endpoint: Endpoints.ARTICLES, path: RoutePath.article },
}

const auxiliaryFieldsCategories = [
  {
    category: 'Autor',
    fields: <AuxiliaryFieldModel[]>[
      { name: 'Cargo / Função', endpoint: Endpoints.JOBS, path: RoutePath.job },
      { name: 'Instituição', endpoint: Endpoints.INSTITUTIONS, path: RoutePath.institution }
    ]
  },
  {
    category: 'Vítima',
    fields: <AuxiliaryFieldModel[]>[
      { name: 'Ocupação', endpoint: Endpoints.OCUPATIONS, path: RoutePath.ocupation },
      { name: 'Religião (Credo)', endpoint: Endpoints.RELIGIONS, path: RoutePath.religion },
      { name: 'Nacionalidade', endpoint: Endpoints.NATIONALITIES, path: RoutePath.nationality },
    ]
  },
  {
    category: 'Lesão',
    fields: <AuxiliaryFieldModel[]>[
      { name: 'Conduta', endpoint: Endpoints.CONDUCTS, path: RoutePath.conduct },
      { name: 'Meio ou Instrumento', endpoint: Endpoints.INSTRUMENTS, path: RoutePath.instrument },
      { name: 'Tipo de Crime', endpoint: Endpoints.CRIMES, path: RoutePath.crime },
      { name: 'Natureza', endpoint: Endpoints.NATURE_LESION, path: RoutePath.natureLesion },
    ]
  },
  {
    category: 'Fonte / Depoimento',
    fields: <AuxiliaryFieldModel[]>[
      { name: 'Tipo de Fonte', endpoint: Endpoints.SOURCE_KINDS, path: RoutePath.sourceType },
      { name: 'Tipo de Depoente', endpoint: Endpoints.DEPONENT_KINDS, path: RoutePath.deponentType },
      { name: 'Artigos', endpoint: Endpoints.ARTICLES, path: RoutePath.article },
    ]
  },
];