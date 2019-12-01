import { Component, OnInit } from '@angular/core';
import { MostrarpeliculasService } from 'src/app/services/mostrarpeliculas.service';
import { Movie } from 'src/app/models/movie.model';
import { FiltrosService } from 'src/app/services/filtros.service';
import { FiltroId } from 'src/app/models/filtroid.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todas-las-peliculas',
  templateUrl: './todas-las-peliculas.component.html',
  styleUrls: ['./todas-las-peliculas.component.scss']
})
export class TodasLasPeliculasComponent implements OnInit {
  url= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
peliculas:Array<Movie>=[];

  constructor(private mostrarPeliculas:MostrarpeliculasService, private infopelicula:FiltrosService, private router:Router) { }

  idPelicula:FiltroId={
    idpeliculas:0
  }
  ngOnInit() {
    this.mostrarPeliculas.getPeliculas().subscribe(res => this.peliculas = res['peliculas'])
  }

  obtenerPelicula(num){
    this.idPelicula.idpeliculas=num;
    // localStorage.setItem('infopelicula', JSON.stringify(res))
  this.infopelicula.obtenerPeliculaId(this.idPelicula).subscribe(res => {localStorage.setItem('pelicula', JSON.stringify(res)), setTimeout(() => {
    this.router.navigate(['/peliculas/peliculasinfo'])
  }, 999)})
  }
}
