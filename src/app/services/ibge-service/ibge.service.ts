import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, UF } from './ibge.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private ibgeUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';
  private orderByName = '?orderBy=nome';
  private ufPath = '/estados';
  private citiesPath = '/municipios';

  constructor(public http: HttpClient) {
    console.log('IbgeService');
  }

  getUF(): Observable<UF[]> {
    return this.http.get<UF[]>(this.ibgeUrl + this.ufPath + this.orderByName);
  }

  getCities(ufID: String): Observable<City[]> {
    let ufIDPath = '/' + ufID;
    return this.http.get<City[]>(this.ibgeUrl + this.ufPath + ufIDPath + this.citiesPath + this.orderByName);
  }
}
