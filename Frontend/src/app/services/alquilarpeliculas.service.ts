import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlquilerPeliculas } from '../models/alquilarpeliculas.model';

@Injectable({
  providedIn: 'root'
})
export class AlquilarpeliculasService {
private alquiler:AlquilerPeliculas;
  constructor(private http:HttpClient) { }

alquilarpeliculas(alquiler:AlquilerPeliculas):Observable<object>{
  console.log(alquiler)  
  return this.http.post('http://localhost:3000/peliculas/entregarpelicula', alquiler)
  }
getAlquiler(): AlquilerPeliculas{
  return this.alquiler;
}
}
