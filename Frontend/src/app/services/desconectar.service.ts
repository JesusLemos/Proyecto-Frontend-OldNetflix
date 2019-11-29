import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesconectarService {
  private usuario: Usuario;
  constructor(private http: HttpClient) { }

  desconectarUsuario(usuario:Usuario): Observable<object>{
    return this.http.post('http://localhost:3000/usuario/desconectar', usuario)
  }
  getUsuario(): Usuario {
    return this.usuario;
  }
}

