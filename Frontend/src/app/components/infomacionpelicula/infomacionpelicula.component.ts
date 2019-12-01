import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infomacionpelicula',
  templateUrl: './infomacionpelicula.component.html',
  styleUrls: ['./infomacionpelicula.component.scss']
})
export class InfomacionpeliculaComponent implements OnInit {
  url= 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
  infoDePelis=JSON.parse(localStorage.getItem('pelicula'));
  constructor() { }

  ngOnInit() {
  }

}
