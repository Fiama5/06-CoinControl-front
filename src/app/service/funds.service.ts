import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funds } from '../model/funds';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  // Método para obtener la lista de fondos
  getFunds(): Observable<Funds[]> {
    return this.http.get<Funds[]>(`${this.baseUrl}/funds/all`);
  }

  //Metodo para obtener la lista de fondos por el id del usuario
  getFundsByUserId(userId: number): Observable<Funds[]> {
    return this.http.get<Funds[]>(`${this.baseUrl}/funds/find/user/${userId}`)
  }

//Metodo pora agregar un nuevo fondo, pasando por parametros el id del fondo predefinido
  addFund(fund: Funds, predefindfundId: number): Observable<Funds> {
    fund.predefinedFund.id = predefindfundId;
    return this.http.post<Funds>(`${this.baseUrl}/funds/add`, fund)
  }

}
