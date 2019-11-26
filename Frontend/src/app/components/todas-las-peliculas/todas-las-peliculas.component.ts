import { Component, OnInit } from '@angular/core';
import { MostrarpeliculasService } from 'src/app/services/mostrarpeliculas.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-todas-las-peliculas',
  templateUrl: './todas-las-peliculas.component.html',
  styleUrls: ['./todas-las-peliculas.component.scss']
})
export class TodasLasPeliculasComponent implements OnInit {
url= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
peliculas:Array<Movie>=[];
  constructor(private mostrarPeliculas:MostrarpeliculasService) { }

  ngOnInit() {
    this.mostrarPeliculas.getPeliculas().subscribe(res => this.peliculas = res['peliculas'])
  }

}
