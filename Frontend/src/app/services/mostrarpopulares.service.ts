import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostrarpopularesService {

  constructor(private http:HttpClient) { }

  getPopulares():Observable <any> {
    return this.http.get('http://localhost:3000/peliculas/mostrarpopulares')
  }
}
