import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, Names, UF } from './ibge.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private localidadesUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';
  private namesUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/leonardo?localidade=';
  private orderByName = '?orderBy=nome';
  private ufPath = '/estados';
  private citiesPath = '/municipios';

  constructor(public http: HttpClient) {
    console.log('IbgeService');
  }

  getUF(): Observable<UF[]> {
    return this.http.get<UF[]>(this.localidadesUrl + this.ufPath + this.orderByName);
  }

  getCities(ufID: String): Observable<City[]> {
    let ufIDPath = '/' + ufID;
    return this.http.get<City[]>(this.localidadesUrl + this.ufPath + ufIDPath + this.citiesPath + this.orderByName);
  }

  getNumberOfLeos(placeID: Number): Observable<Names[]> {
    console.log(this.namesUrl + placeID)
    return this.http.get<Names[]>(this.namesUrl + placeID);
  }
}
