import { Component, OnInit } from '@angular/core';
import { AlquilarpeliculasService } from 'src/app/services/alquilarpeliculas.service';
import { AlquilerPeliculas } from 'src/app/models/alquilarpeliculas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alquilarpeliculas',
  templateUrl: './alquilarpeliculas.component.html',
  styleUrls: ['./alquilarpeliculas.component.scss']
})
export class AlquilarpeliculasComponent  {
  usuario2=JSON.parse(localStorage.getItem('usuario'))
peliculayusuario:AlquilerPeliculas={
  idpelicula:0,
  idusuario:this.usuario2.idusuario,
  dias:0
}
  constructor(private alquiler:AlquilarpeliculasService, private router:Router) { }

  alquilarpelicula(){
    console.log(this.peliculayusuario)
    this.alquiler.alquilarpeliculas(this.peliculayusuario).subscribe(res => {
     setTimeout(() =>{location.reload(); }, 1000 ),
    setTimeout(() => {
      this.router.navigate(['/usuarios/verperfil'])}, 999)})
  }

}
