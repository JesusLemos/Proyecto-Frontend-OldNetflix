import { Component, OnInit } from '@angular/core';
import { FiltroidService } from 'src/app/services/filtroid.service';
import { FiltroId } from 'src/app/models/filtroid.model';

@Component({
  selector: 'app-filtroid',
  templateUrl: './filtroid.component.html',
  styleUrls: ['./filtroid.component.scss']
})
export class FiltroidComponent {
id:FiltroId={
  idpeliculas:0
}
  constructor(private filtroid:FiltroidService) { }

  mostrarid(){
    this.filtroid.obtenerPeliculaId(this.id)
    .subscribe(res =>console.log(res) )
  }

}
