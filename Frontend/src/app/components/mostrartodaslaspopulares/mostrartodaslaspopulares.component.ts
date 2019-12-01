import { Component, OnInit } from '@angular/core';
import { MostrarpopularesService } from 'src/app/services/mostrarpopulares.service';
// import { Movie } from 'src/app/models/movie.model';
import { Popularity } from 'src/app/models/popularity.model';

@Component({
  selector: 'app-mostrartodaslaspopulares',
  templateUrl: './mostrartodaslaspopulares.component.html',
  styleUrls: ['./mostrartodaslaspopulares.component.scss']
})
export class MostrartodaslaspopularesComponent implements OnInit {
  url= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
peliculas:Array<Popularity>=[]
  constructor(private mostrarpopulares: MostrarpopularesService) { }

  ngOnInit() {
    this.mostrarpopulares.getPopulares().subscribe(res => this.peliculas.push(res))
  }

}
