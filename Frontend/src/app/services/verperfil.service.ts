import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AlquilerPeliculas } from '../models/alquilarpeliculas.model';

@Injectable({
  providedIn: 'root'
})
export class VerperfilService {

private peliculasAlquiladas:AlquilerPeliculas;
  constructor(private http:HttpClient) { }
  // obtPerfil(perfil: PerfilUsuario):Observable<object>{
  //   return this.http.post('http://localhost:3000/usuario/perfil', perfil)
  // }


  obtPeliculasAlquiladas(peliculasAlquiladas:AlquilerPeliculas):Observable<object>{
    return this.http.get('http://localhost:3000/peliculas/verpeliculasalquiladas/'+peliculasAlquiladas)
  }
  getPeliculasAlquiladas(): AlquilerPeliculas {
    return this.peliculasAlquiladas;
  }

}
