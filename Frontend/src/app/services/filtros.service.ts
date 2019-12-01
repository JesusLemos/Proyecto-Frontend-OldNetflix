import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroGenero } from '../models/filtrogenero.model';
import { Observable } from 'rxjs';
import { FiltroId } from '../models/filtroid.model';
import { FiltroTitulo } from '../models/filtroTitulo.model';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  genero:FiltroGenero={
    genre:''
  }
  id:FiltroId={
    idpeliculas:0
  }
  titulo:FiltroTitulo={
    title:''
  }

  constructor(private http:HttpClient) { }

  obtenerPeliculaGenero(genero:FiltroGenero):Observable<object>{
    console.log(genero.genre)
    return this.http.get('http://localhost:3000/peliculas/mostrargenero/'+genero.genre)
  }

  getGenero(): FiltroGenero {
    return this.genero;
  }
  obtenerPeliculaId(id:FiltroId):Observable<object>{
    return this.http.get('http://localhost:3000/peliculas/mostrarid/'+id.idpeliculas)
  }
  getId(): FiltroId {
    return this.id;
  }

  obtenerPeliculaTitulo(titulo:FiltroTitulo):Observable<object>{
    return this.http.get('http://localhost:3000/peliculas/mostrartitulo/'+titulo.title)
  }
  getTitulo(): FiltroTitulo {
    return this.titulo;
  }
 }

