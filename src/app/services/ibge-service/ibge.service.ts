import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UF } from './ibge.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private ibgeUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

  constructor(public http: HttpClient) {
    console.log('IbgeService');
  }

  getUF(): Observable<UF[]> {
    return this.http.get<UF[]>(this.ibgeUrl);
  }
}
