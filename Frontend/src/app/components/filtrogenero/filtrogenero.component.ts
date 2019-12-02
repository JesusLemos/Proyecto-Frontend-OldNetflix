import { Component, OnInit } from '@angular/core';

import { FiltroGenero } from 'src/app/models/filtrogenero.model';
import { FiltrosService } from 'src/app/services/filtros.service';
import { Popularity } from 'src/app/models/popularity.model';

@Component({
  selector: 'app-filtrogenero',
  templateUrl: './filtrogenero.component.html',
  styleUrls: ['./filtrogenero.component.scss']
})
export class FiltrogeneroComponent  {
  url= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
 genero:FiltroGenero={
  genre:''
}
peliculas:Array<Popularity>=[];
  constructor(private fgenero:FiltrosService ) { }

 mostrarGenero(){
   this.fgenero.obtenerPeliculaGenero(this.genero).subscribe(res => this.peliculas.push(res) )
 }

}
