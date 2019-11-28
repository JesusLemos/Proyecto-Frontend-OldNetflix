import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilUsuario } from '../models/userProfile.model';

@Injectable({
  providedIn: 'root'
})
export class VerperfilService {
private perfil:PerfilUsuario;
  constructor(private http:HttpClient) { }
  obtPerfil(perfil: PerfilUsuario):Observable<object>{
    return this.http.post('http://localhost:3000/usuario/perfil', perfil)
  }

  getPerfil(): PerfilUsuario {
    return this.perfil;
  }
}
