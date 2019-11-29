import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private login:Login;
  constructor(private http: HttpClient) { }
  conectar(login:Login): Observable<object>{
    return this.http.post('http://localhost:3000/usuario/login', login)
  }
  getLogin(): Login {
    return this.login;
  }
}
