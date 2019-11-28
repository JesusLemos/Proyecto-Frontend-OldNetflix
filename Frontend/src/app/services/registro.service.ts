import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistroUsuario } from '../models/registro.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RegistroService {
 private registro:RegistroUsuario;
  constructor(private http:HttpClient) { }
  crearUsuario(registro: RegistroUsuario):Observable<any> {
    return this.http.post('http://localhost:3000/usuario/registro', registro)
  }

  getRegistro(): RegistroUsuario {
    return this.registro;
  }
}


