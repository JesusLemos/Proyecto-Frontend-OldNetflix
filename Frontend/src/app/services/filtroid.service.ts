import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroId } from '../models/filtroid.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroidService {
private id:FiltroId;
  constructor(private http:HttpClient) { }

    obtenerPeliculaId(id:FiltroId):Observable<object>{
     
      console.log(id)
      return this.http.get('http://localhost:3000/peliculas/mostrarid/'+id.idpeliculas)
    }
    getId(): FiltroId {
      return this.id;
    }
}
