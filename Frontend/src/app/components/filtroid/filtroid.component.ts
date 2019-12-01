import { Component, OnInit } from '@angular/core';
;
import { FiltroId } from 'src/app/models/filtroid.model';
import { FiltrosService } from 'src/app/services/filtros.service';

@Component({
  selector: 'app-filtroid',
  templateUrl: './filtroid.component.html',
  styleUrls: ['./filtroid.component.scss']
})
export class FiltroidComponent {
id:FiltroId={
  idpeliculas:0
}
  constructor(private filtroid:FiltrosService) { }

  mostrarid(){
    this.filtroid.obtenerPeliculaId(this.id)
    .subscribe(res =>console.log(res) )
  }

}
