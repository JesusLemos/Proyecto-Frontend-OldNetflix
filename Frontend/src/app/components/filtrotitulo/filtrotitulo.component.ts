import { Component, OnInit } from '@angular/core';
import { FiltrosService } from 'src/app/services/filtros.service';
import { FiltroTitulo } from 'src/app/models/filtroTitulo.model';

@Component({
  selector: 'app-filtrotitulo',
  templateUrl: './filtrotitulo.component.html',
  styleUrls: ['./filtrotitulo.component.scss']
})
export class FiltrotituloComponent {
 titulo:FiltroTitulo={
   title:''
 }
 url= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
 pelicula:{}
  constructor(private filtros:FiltrosService) { }

  mostrarTitulo(){
    this.filtros.obtenerPeliculaTitulo(this.titulo).subscribe(res => this.pelicula=res)
  }
}
 