import { Component, OnInit } from '@angular/core';

import { FiltroGenero } from 'src/app/models/filtrogenero.model';
import { Observable } from 'rxjs';
import { FiltrosService } from 'src/app/services/filtros.service';

@Component({
  selector: 'app-filtrogenero',
  templateUrl: './filtrogenero.component.html',
  styleUrls: ['./filtrogenero.component.scss']
})
export class FiltrogeneroComponent  {
 genero:FiltroGenero={
  genre:''
}
  constructor(private fgenero:FiltrosService ) { }

 mostrarGenero(){
   this.fgenero.obtenerPeliculaGenero(this.genero).subscribe(res => console.log(res))
 }

}
