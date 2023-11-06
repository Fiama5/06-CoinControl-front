import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl= 'http://localhost:8080/user'

  constructor( private http: HttpClient) { }

  //Metodo para realizar un registro
  singUpUser(user: User){

    const url = `${this.baseUrl}/add`

    return this.http.post(url, user)
  } 
}
