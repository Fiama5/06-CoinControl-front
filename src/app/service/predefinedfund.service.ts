import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PredefinedFund } from '../model/predefined-fund';

@Injectable({
  providedIn: 'root'
})
export class PredefinedfundService {
  private baseUrl = 'http://localhost:8080/predefinedFund'

  constructor(private http: HttpClient) { }

  //Metodo para obtener todos los fondos predefinidos
  getPredefinedFund(): Observable<PredefinedFund[]> {
    return this.http.get<PredefinedFund[]>(`${this.baseUrl}/all`);
  }

}
