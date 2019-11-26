import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MostrarpeliculasService {

  constructor(private http:HttpClient) { }
  getPeliculas():Observable <object>{
    return this.http.get('http://localhost:3000/peliculas/mostrartodo')
  }
}
